import "@/styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";
import "aos/dist/aos.css";
import "@/components/shared/LoadingScreen"; // ✅ Ensure this is imported
import "@/context/AuthProvider"; // ✅ Ensure Auth is applied globally

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import dynamic from "next/dynamic";
import Script from "next/script";
import AOS from "aos";

// ✅ Lazy load TawkTo (chat widget)
const TawkTo = dynamic(() => import("@/components/shared/TawkTo"), {
  ssr: false,
});

// ✅ Import Layouts
import Layout from "@/components/Layout";
import DashboardLayout from "@/pages/dashboard/layout";
import AuthProvider from "@/context/AuthProvider";
import LoadingScreen from "@/components/shared/LoadingScreen";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [queryClient] = useState(() => new QueryClient());

  // ✅ Avoid `window` usage during SSR
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // ✅ Ensure client-only code runs after mount

    // ✅ Initialize AOS animations
    AOS.init();
    AOS.refresh();

    // ✅ Track session-based API call (only once per session)
    if (typeof window !== "undefined") {
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
    }

    // ✅ Page Loading Animation Setup
    const handleStart = () => setLoading(true);
    const handleStop = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleStop);
    router.events.on("routeChangeError", handleStop);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleStop);
      router.events.off("routeChangeError", handleStop);
    };
  }, [router]);

  // ✅ Use DashboardLayout for `/dashboard/*` pages
  const isDashboard = router.pathname.startsWith("/dashboard");
  const LayoutComponent = isDashboard ? DashboardLayout : Layout;

  return (
    <QueryClientProvider client={queryClient}>
      {/* ✅ Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-X3W2KFKTS2"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          setTimeout(() => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag("js", new Date());
            gtag("config", "G-X3W2KFKTS2", { send_page_view: false });
          }, 3000); // ✅ Delayed by 3 seconds for better performance
        `}
      </Script>
      <AuthProvider>
        <LayoutComponent>
          <Toaster />
          {loading && <LoadingScreen />}
          {isClient && <TawkTo />}
          <Component {...pageProps} />
        </LayoutComponent>
      </AuthProvider>
    </QueryClientProvider>
  );
}
