import "@/styles/globals.css";
import "react-photo-view/dist/react-photo-view.css";
import Layout from "@/components/Layout";
import LoadingScreen from "@/components/shared/LoadingScreen";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AOS from "aos";
import "aos/dist/aos.css";
import dynamic from "next/dynamic";
import Script from "next/script";
import AuthProvider from "@/context/AuthProvider";

// ✅ Lazy Load TawkTo for better performance
const TawkTo = dynamic(() => import("@/components/shared/TawkTo"), {
  ssr: false,
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // ✅ Create QueryClient only once
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

  return (
    <QueryClientProvider client={queryClient}>
      {/* ✅ Google Analytics with Delayed Execution */}
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
        <Layout>
          <Toaster />
          {loading && <LoadingScreen />}

          {/* ✅ Only render chat widget on client-side */}
          {isClient && <TawkTo />}

          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </QueryClientProvider>
  );
}
