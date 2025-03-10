import { useEffect } from "react";

const TawkTo = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/674de3fc4304e3196aeb709f/1ie4455c8";
    script.charset = "UTF-8";
    script.async = true;
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  return null;
};

export default TawkTo;
