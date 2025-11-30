import { useState } from "react";

export default function App() {
  const [type, setType] = useState("Social media caption");
  const [prompt, setPrompt] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const generateContent = async () => {
    if (!prompt.trim()) {
      alert("Enter a prompt!");
      return;
    }

    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("http://localhost:5000/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, prompt }),
      });

      const data = await res.json();
      setOutput(data.output || "No output from API");
    } catch (e) {
      setOutput("Error connecting to API!");
    }

    setLoading(false);
  };

  return (
    <div className="container">
      <h1>AI Content Generator</h1>

      <div className="box">
        <label>Content Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Social media caption</option>
          <option>Blog idea</option>
          <option>Product description</option>
          <option>Email template</option>
        </select>

        <label>Enter Prompt</label>
        <textarea
          placeholder="Describe what you want..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>

        <button onClick={generateContent} disabled={loading}>
          {loading ? "Generating..." : "Generate"}
        </button>
      </div>

      {output && (
        <div className="output">
          <h3>AI Output</h3>
          <p>{output}</p>

          <button
            onClick={() => navigator.clipboard.writeText(output)}
            className="copy-btn"
          >
            Copy
          </button>
        </div>
      )}
    </div>
  );
}
