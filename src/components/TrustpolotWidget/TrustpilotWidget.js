"use client";

import Script from "next/script";
import { useEffect } from "react";

const TrustpilotWidget = () => {
  useEffect(() => {
    // Trigger Trustpilot to load the widget after the script is ready
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(
        document.getElementById("trustpilot-widget"),
        true
      );
    }
  }, []);

  return (
    <>
      {/* TrustBox script */}
      <Script
        src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />

      {/* TrustBox widget */}
      <div
        id="trustpilot-widget"
        className="trustpilot-widget"
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="67e6bd58e3692dd8cf651bd3"
        data-style-height="80"
        data-style-width="180"
      >
        <a
          href="https://www.trustpilot.com/review/cottagehomecare.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Trustpilot
        </a>
      </div>
    </>
  );
};

export default TrustpilotWidget;
