import { useState } from "react";

// Simple Markdown-to-HTML parser for links only
const parseLinks = (text) => {
  if (!text) return "";
  return text.replace(
    /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g,
    '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
  );
};

const AIChat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [eventLink, setEventLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsThinking(true);
    setResponse("");
    setEventLink("");

    try {
      const res = await fetch("https://nazborgai-backend.onrender.com/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      const data = await res.json();
      const reply = data?.reply || "🤖 No response from NazborgAI.";
      setResponse(parseLinks(reply)); // ⬅️ Parse any Markdown links

      const lower = prompt.toLowerCase();
      const isBooking =
        lower.includes("book") ||
        lower.includes("appointment") ||
        lower.includes("schedule") ||
        lower.includes("meeting");

      if (isBooking) {
        const scheduleRes = await fetch(
          "https://nazborgai-backend.onrender.com/schedule",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "Website Visitor",
              dateTime: prompt,
              reason: prompt,
            }),
          }
        );

        const scheduleData = await scheduleRes.json();
        if (scheduleData.success) {
          setEventLink(scheduleData.eventLink);
        }
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
          dangerouslySetInnerHTML={{ __html: response }} // ⬅️ Inject HTML with clickable link
        />
      )}

      {eventLink && (
        <div className="mt-3">
          📅{" "}
          <a href={eventLink} target="_blank" rel="noopener noreferrer">
            View your appointment
          </a>
        </div>
      )}
    </div>
  );
};

export default AIChat;
