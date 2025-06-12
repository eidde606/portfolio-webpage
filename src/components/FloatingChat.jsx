import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FloatingChat.css";

const FloatingChat = () => {
  const [greetingVisible, setGreetingVisible] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setGreetingVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {greetingVisible && (
        <div className="chat-greeting alert alert-info shadow">
          👋 Hi there! Ask me anything.
        </div>
      )}

      <div
        className="floating-chat-button btn btn-primary d-flex align-items-center justify-content-center shadow"
        onClick={() => navigate("/ai")}
      >
        <MessageCircle size={24} />
      </div>
    </>
  );
};

export default FloatingChat;
