import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [recommendation, setRecommendation] = useState("");

  const handleChat = async () => {
    if (!message) return;

    try {
      // Replace with chatbot service URL
      const response = await fetch("http://localhost:5003/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      setChatResponse(data.reply || "No response from chatbot");
    } catch (error) {
      setChatResponse("Unable to connect to chatbot service.");
    }
  };

  const getRecommendation = async () => {
    try {
      // Replace with recommendation service URL
      const response = await fetch(
        "http://localhost:5004/recommendation"
      );

      const data = await response.json();

      setRecommendation(
        data.recommendation || "No recommendation available"
      );
    } catch (error) {
      setRecommendation(
        "Unable to connect to recommendation service."
      );
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🏦 AI Banking Application</h1>

      <hr />

      <h2>Account Summary</h2>

      <div
        style={{
          border: "1px solid #ccc",
          padding: "15px",
          width: "300px",
          borderRadius: "10px"
        }}
      >
        <p>
          <strong>Customer:</strong> Keerthana
        </p>

        <p>
          <strong>Account Number:</strong> 123456789
        </p>

        <p>
          <strong>Balance:</strong> ₹50,000
        </p>
      </div>

      <hr />

      <h2>AI Banking Assistant</h2>

      <input
        type="text"
        placeholder="Ask me anything..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        style={{
          width: "300px",
          padding: "10px"
        }}
      />

      <button
        onClick={handleChat}
        style={{
          marginLeft: "10px",
          padding: "10px"
        }}
      >
        Send
      </button>

      <p>
        <strong>Bot:</strong> {chatResponse}
      </p>

      <hr />

      <h2>Financial Recommendations</h2>

      <button
        onClick={getRecommendation}
        style={{
          padding: "10px"
        }}
      >
        Get Recommendation
      </button>

      <p>
        <strong>Suggestion:</strong> {recommendation}
      </p>
    </div>
  );
}

export default App;