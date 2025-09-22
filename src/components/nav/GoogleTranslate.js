"use client";

import { useEffect, useRef } from "react";
import Script from "next/script";

const GoogleTranslate = () => {
  const containerRef = useRef(null);

  // Idempotent init
  const initTranslate = () => {
    if (typeof window === "undefined") return;
    if (window.__gt_inited) return;
    const g = window.google;
    if (!g || !g.translate || !g.translate.TranslateElement) return;

    try {
      new g.translate.TranslateElement(
        {
          pageLanguage: "en",
          // Prefer container mount over float position to avoid CLS
          includedLanguages: "en,es,hi,bn,ar,ru,zh-CN",
          autoDisplay: false,
        },
        (containerRef.current && containerRef.current.id) ||
          "google_translate_element"
      );
      window.__gt_inited = true;
    } catch (e) {
      // no-op
    }
  };

  // Try to init immediately on client navs where script is cached
  useEffect(() => {
    initTranslate();
  }, []);

  return (
    <>
      {/* Non-blocking load; init after script attaches to window */}
      <Script
        id="google-translate"
        src="https://translate.google.com/translate_a/element.js?cb=__noop"
        strategy="afterInteractive"
        onLoad={() => Promise.resolve().then(initTranslate)}
      />

      {/* Reserve space to avoid CLS */}
      <div
        id="google_translate_element"
        ref={containerRef}
        aria-label="Google Translate"
        className="overflow-hidden"
        style={{ minHeight: 32, minWidth: 140 }}
      />
    </>
  );
};

export default GoogleTranslate;
