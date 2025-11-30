import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const HF_API_KEY = process.env.HF_API_KEY;
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/api/generate", async (req, res) => {
  const { type, prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  const fullPrompt = `Generate a ${type} based on: ${prompt}`;

  try {
    const response = await axios.post(
      "https://router.huggingface.co/hf-inference/models/google/gemma-2-9b-it",
      { inputs: fullPrompt },
      {
        headers: {
          Authorization: `Bearer ${HF_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    const output =
      response.data.generated_text ||
      response.data[0]?.generated_text ||
      JSON.stringify(response.data);

    res.json({ output });
  } catch (error) {
    res.status(500).json({
      error: "HuggingFace API error",
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log("Backend running on port", PORT);
});
