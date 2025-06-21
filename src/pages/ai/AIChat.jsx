import { useState } from "react";

const AIChat = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponse("Thinking...");
    setPrompt(""); // Clear the input field

    const systemPrompt = `
You are NazborgAI, a helpful assistant built into Eddie Nazario's web portfolio. 
Answer questions only based on Eddie's actual experience, skills, education, and projects listed in his portfolio. 
If you’re unsure, respond with “I don’t have that information.” 
Eddie speaks English and Spanish, so answer in the language used by the visitor.

Here’s Eddie’s information:

Name: Eddie Nazario  
Location: Hopewell, VA  
LinkedIn: linkedin.com/in/eddie-nazario-20b2a320a  
Email: eiddenazario@gmail.com  
Phone: 804-528-7612  

Skills: ReactJS, JavaScript, Firebase, CSS, HTML5, Bootstrap, ChakraUI, GitHub  

Projects:
1. nazariodev.com (React.js portfolio with animated homepage, SEO optimization, and routing)
2. myReads Book Tracker (React app with shelves: Currently Reading, Want to Read, Read)

Experience:
- Vet Tech IT Services LLC (Junior React Dev): Bug fixing, GitHub workflows, Scrum team
- Freelance for Andrey’s ProLandscaping: Full app design, UI optimization, bug resolution

Education:
- A.A.S. in IT (Software Dev) – John Tyler Community College (2023)
- Member of BCC Tech Club

If a user asks to download Eddie's resume, guide them to the download button on the page.
If someone asks how to contact Eddie, provide his email or LinkedIn.
    `.trim();

    try {
      const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
        }),
      });

      if (res.status === 429) {
        setResponse(
          "⚠️ Too many requests. Please wait a moment and try again."
        );
        return;
      }

      if (!res.ok) {
        const errData = await res.json();
        console.error("API Error:", errData);
        setResponse(
          `❌ API Error: ${errData.error?.message || res.statusText}`
        );
        return;
      }

      const data = await res.json();
      if (data?.choices?.[0]?.message?.content) {
        setResponse(data.choices[0].message.content.trim());
      } else {
        setResponse("🤖 No response from NazborgAI.");
      }
    } catch (err) {
      console.error("Fetch Error:", err);
      setResponse("❌ Something went wrong. Check your network or API key.");
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
        <button className="btn btn-primary">Submit</button>
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
