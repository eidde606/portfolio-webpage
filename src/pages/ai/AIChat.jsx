const AIChat = () => {
  return (
    <div className="container mt-4 px-3" style={{ maxWidth: "100%" }}>
      <h2 className="text-center mb-3">NazborgAI</h2>
      <div style={{ position: "relative", width: "100%", paddingTop: "130%" }}>
        <iframe
          src="https://resume-chatbot-gnpn.onrender.com"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "10px",
          }}
          title="Resume Chatbot"
        ></iframe>
      </div>
    </div>
  );
};

export default AIChat;
