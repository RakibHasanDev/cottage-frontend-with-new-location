// components/ChatWidget.js

"use client"; // Important to indicate this is a client-side component

import { useEffect } from "react";
import { createChat } from "@n8n/chat"; // Import the createChat function from the @n8n/chat package
import "@n8n/chat/style.css";

export default function ChatWidget() {
  useEffect(() => {
    // Set up the ChatWidgetConfig
    window.ChatWidgetConfig = {
      webhook: {
        url: "https://1312-556.n8nbysnbd.top/webhook/1d01b9d3-d114-46c2-ab82-9b049a2c3f90/chat", // Replace with your actual webhook URL
        route: "general",
      },
      branding: {
        logo: "/assets/Cottage-Home.webp", // Replace with your logo URL
        name: "Cottage Home Care", // Replace with your company name
        welcomeText: "Get instant answers to your questions!",
        responseTimeText: "Click the button below to start chatting",
      },
      style: {
        itsPrimaryColor: "#10b981",
        itsSecondaryColor: "#059669",
        position: "right",
        backgroundColor: "#ffffff",
        fontColor: "#1f2937",
      },
    };

    // Dynamically load the script from the CDN
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/RakibHasanDev/website-chatbot-cdn@main/script.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []); // Empty dependency array ensures this runs only once on component mount

  return <div id="n8n-chat-widget"></div>; // This is where the chat widget will be mounted
}
