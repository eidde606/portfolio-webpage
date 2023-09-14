// FloatingChatButton.js
import React, { useState } from "react";
import "./buttonStyle.css";

const FloatingChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`floating-chat-button ${isOpen ? "open" : ""}`}
      onClick={toggleChat}
    >
      {isOpen ? "Close Chat" : "Open Chat"}
    </div>
  );
};

export default FloatingChatButton;
