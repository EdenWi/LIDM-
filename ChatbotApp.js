import React, { useState } from "react";
import axios from "axios";

const ChatbotApp = () => {
  const [prompt, setPrompt] = useState("");
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetchAIResponse = async () => {
    setLoading(true);

    try {
      const response = await axios.post(
        "https://YOUR_PROJECT_ID.cloudfunctions.net/chatCompletion", // Replace with your actual Firebase Function URL
        { prompt }
      );

      setAiResponse(response.data.aiResponse);
    } catch (error) {
      console.error("Error fetching AI response:", error);
      setAiResponse("Error fetching AI response. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div>
      <label>
        User Prompt:
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
      </label>
      <button
        onClick={handleFetchAIResponse}
        disabled={loading || prompt.trim() === ""}
      >
        {loading ? "Fetching..." : "Fetch AI Response"}
      </button>
      <div>
        <strong>AI Response:</strong> {aiResponse}
      </div>
    </div>
  );
};

export default ChatbotApp;
