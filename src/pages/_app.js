import "@/styles/globals.css";
import Layout from "@/components/Layout";
import LoadingScreen from "@/components/shared/LoadingScreen";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  // Ensure QueryClient is created only once
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
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
      <Layout>
        <Toaster />
        {loading && <LoadingScreen />}
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
