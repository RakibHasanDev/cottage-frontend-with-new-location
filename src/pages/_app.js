// pages/_app.js
import "@/styles/globals.css";
// import "aos/dist/aos.css"; // keep off for now
import "react-photo-view/dist/react-photo-view.css";

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Script from "next/script";
import Head from "next/head";

// ✅ Self-host fonts via next/font (not in _document)
import { League_Spartan, Open_Sans, Roboto } from "next/font/google";

const heading = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial"],
  adjustFontFallback: true,
  variable: "--font-heading",
});
const body = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Roboto", "Arial"],
  adjustFontFallback: true,
  variable: "--font-body",
});
const ui = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  fallback: ["system-ui", "Segoe UI", "Arial"],
  adjustFontFallback: true,
  variable: "--font-ui",
});

// ✅ Lazy load TawkTo (chat widget)
const TawkTo = dynamic(() => import("@/components/shared/TawkTo"), {
  ssr: false,
});

// Layouts & Providers
import Layout from "@/components/Layout";
import DashboardLayout from "@/pages/dashboard/layout";
import AuthProvider from "@/context/AuthProvider";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  // client-only flags
  const [isClient, setIsClient] = useState(false);
  const [mountChat, setMountChat] = useState(false);

  // Derive route buckets once
  const isDashboard = router.pathname.startsWith("/dashboard");
  const isAuthRoute =
    router.pathname.startsWith("/login") ||
    router.pathname.startsWith("/signup") ||
    router.pathname.startsWith("/auth");

  useEffect(() => {
    setIsClient(true);

    // 👇 mount chat when idle (or after 4s fallback) to protect LCP
    const id =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(() => setMountChat(true))
        : setTimeout(() => setMountChat(true), 4000);

    // one-time session metric (kept as-is)
    const localCount = sessionStorage.getItem("count");
    if (!localCount) {
      fetch("https://cottage-backend-voilerplate.vercel.app/count", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ count: 1 }),
      })
        .then((res) => res.json())
        .then(() => sessionStorage.setItem("count", "true"))
        .catch((err) => console.error("API Error:", err));
    }

    // route change spinner
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      typeof id === "number"
        ? clearTimeout(id)
        : window.cancelIdleCallback?.(id);
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  const LayoutComponent = isDashboard ? DashboardLayout : Layout;

  return (
    <QueryClientProvider client={queryClient}>
      {/* --- NETWORK HINTS (micro wins for hero + CDNs) --- */}
      <Head>
        {/* Helps LCP when hero comes from Cloudinary */}
        <link
          rel="preconnect"
          href="https://res.cloudinary.com"
          crossOrigin=""
        />
        {/* General Google CDN hint (maps/fonts/images that you lazy-load later) */}
        <link rel="preconnect" href="https://www.gstatic.com" crossOrigin="" />
        <link
          rel="preconnect"
          href="https://maps.googleapis.com"
          crossOrigin=""
        />
      </Head>

      {/* --- ANALYTICS --- */}
      {/* ✅ GA loads lazily; then a 3s delay—keeps GA off the LCP path */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X3W2KFKTS2"
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          setTimeout(() => {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config','G-X3W2KFKTS2',{ send_page_view: false });
          }, 3000);
        `}
      </Script>

      {/* --- 3P UTILITIES (NON-BLOCKING) --- */}
      {/* GoDaddy: Lighthouse showed it as render-blocking. Fix by deferring. */}
      <Script
        src="https://img1.wsimg.com/scc-c2/scc-c2.min.js"
        strategy="afterInteractive" // ✅ off the render path
        onError={(e) => {
          console.warn("GoDaddy script failed", e);
        }}
      />
      {/* ✅ Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1288701326249992');
          fbq('track', 'PageView');
        `}
      </Script>

      {/* Firebase/Auth iframe.js was in your network waterfall.
          Load ONLY where needed (auth/dashboard), never on the home page. */}
      {(isDashboard || isAuthRoute) && (
        <Script
          id="firebase-app"
          src="https://www.gstatic.com/firebasejs/10.13.1/firebase-app-compat.js"
          strategy="lazyOnload"
        />
      )}
      {(isDashboard || isAuthRoute) && (
        <Script
          id="firebase-auth"
          src="https://www.gstatic.com/firebasejs/10.13.1/firebase-auth-compat.js"
          strategy="lazyOnload"
        />
      )}

      <AuthProvider>
        {/* Expose font variables at the app root */}
        <div
          className={`${body.variable} ${heading.variable} ${ui.variable} font-smooth`}
        >
          <LayoutComponent>
            <Toaster />
            {loading && <LoadingScreen />}

            {/* Tawk chat: mounted on idle, outside LCP */}
            {mountChat && <TawkTo />}

            <Component {...pageProps} />
          </LayoutComponent>
        </div>
      </AuthProvider>
    </QueryClientProvider>
  );
}
