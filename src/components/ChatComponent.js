import { useEffect } from "react";

const ChatComponent = () => {
  useEffect(() => {
    // Check if we are in the browser environment
    const loadChatScript = () => {
      // Dynamically create a script tag
      const script = document.createElement("script");
      script.type = "module";
      script.src =
        "https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js";

      script.onload = () => {
        // Ensure createChat is available
        if (window.createChat) {
          window.createChat({
            webhookUrl:
              "https://1312-556.n8nbysnbd.top/webhook/feec1b42-25f6-44b3-8ca9-e01d501ad1fb/chat",
          });
        }
      };

      document.body.appendChild(script);
    };

    // Only run this on the client side
    if (typeof window !== "undefined") {
      loadChatScript();
    }

    return () => {
      // Clean up script tag when the component is unmounted
      const script = document.querySelector(
        'script[src="https://cdn.jsdelivr.net/npm/@n8n/chat/dist/chat.bundle.es.js"]'
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // No JSX to render for this component
};

export default ChatComponent;
