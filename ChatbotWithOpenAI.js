import React, { useState } from "react";
import axios from "axios";

const ChatbotWithOpenAI = () => {
  const [userPrompt, setUserPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchAIResponse = async () => {
    setLoading(true);

    try {
      const response = await fetchAIResponse(userPrompt);
      setAiResponse(response.data.choices[0].text);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAiResponse("Error fetching AI response. Please try again.");
    }

    setLoading(false);
  };

  const fetchAIResponse = async (prompt) => {
    const apiUrl = "https://your-firebase-function-url.com/chatCompletion"; // Replace with your actual Firebase Function URL
    const apiKey = "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";

    try {
      const response = await axios.post(
        apiUrl,
        { prompt, max_tokens: 150 },
        { headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" } }
      );
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <label>
        User Prompt:
        <input
          type="text"
          value={userPrompt}
          onChange={(e) => setUserPrompt(e.target.value)}
        />
      </label>
      <button
        onClick={handleFetchAIResponse}
        disabled={loading || userPrompt.trim() === ""}
      >
        {loading ? "Fetching..." : "Fetch AI Response"}
      </button>
      <div>
        <strong>AI Response:</strong> {aiResponse}
      </div>
    </div>
  );
};

export default ChatbotWithOpenAI;
