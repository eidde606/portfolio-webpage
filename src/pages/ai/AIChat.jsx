import { useEffect, useState } from "react";

const AIChat = () => {
  const [iframeHeight, setIframeHeight] = useState("600px");

  useEffect(() => {
    const updateHeight = () => {
      if (window.innerWidth < 576) {
        setIframeHeight("500px"); // Mobile
      } else if (window.innerWidth < 992) {
        setIframeHeight("600px"); // Tablets / small laptops
      } else {
        setIframeHeight("700px"); // Desktop
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="container mt-4 px-3" style={{ maxWidth: "100%" }}>
      <h2 className="text-center mb-3">NazborgAI</h2>
      <iframe
        src="https://resume-chatbot-gnpn.onrender.com"
        style={{
          width: "100%",
          height: iframeHeight,
          border: "none",
          borderRadius: "10px",
        }}
        title="Resume Chatbot"
      ></iframe>
    </div>
  );
};

export default AIChat;
