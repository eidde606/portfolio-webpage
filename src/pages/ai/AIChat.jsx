import { useState } from "react";

const AIChat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsThinking(true);
    setResponse(""); // Clear previous response

    try {
      const res = await fetch("https://nazborgai-backend.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const data = await res.json();

      if (data && data.reply) {
        setResponse(data.reply);
      } else {
        setResponse("🤖 No response from NazborgAI.");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      setResponse("❌ Something went wrong connecting to the server.");
    } finally {
      setIsThinking(false);
      setPrompt("");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Talk to NazborgAI 🤖</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          rows={4}
          className="form-control mb-3"
          placeholder="Ask me anything in English or Spanish..."
        />
        <button className="btn btn-primary" disabled={isThinking}>
          {isThinking ? "Thinking..." : "Submit"}
        </button>
      </form>

      {response && (
        <div
          className="mt-4 p-3 rounded border"
          style={{
            backgroundColor: "#1e1e1e",
            color: "#f1f1f1",
            whiteSpace: "pre-wrap",
          }}
        >
          <strong>NazborgAI:</strong> {response}
        </div>
      )}
    </div>
  );
};

export default AIChat;
