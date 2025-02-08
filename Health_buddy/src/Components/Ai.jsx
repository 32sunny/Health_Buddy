import { useState } from "react";
import { Mic, X } from "lucide-react";
import { healthAdvice } from "../Chatdata";


const HealthChatBot = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me about any health condition for advice.", isUser: false },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const synthesizeSpeech = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) return;

    const userMessage = { text: input, isUser: true };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      const normalizedInput = input.toLowerCase().trim();
      let response = "Sorry, I don’t have information on that health condition.";
      
      for (const key in healthAdvice) {
        if (normalizedInput.includes(key)) {
          response = healthAdvice[key];
          break;
        }
      }

      const botMessage = { text: response, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    //   synthesizeSpeech(response);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-[130px] right-[80px] w-full max-w-lg bg-white rounded-xl shadow-xl p-4 space-y-4">
      <div className="flex items-center justify-between bg-gradient-to-r from-blue-500 to-green-500 text-white p-3 rounded-lg shadow-md">
        <h1 className="font-bold text-lg">Health Advice Chatbot</h1>
        <X className="w-6 h-6 cursor-pointer" onClick={() => window.location.reload()} />
      </div>
      <div className="overflow-y-auto max-h-80 space-y-4 p-4 bg-gray-100 rounded-xl shadow-inner">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
            <div className={`max-w-xs rounded-xl p-3 ${message.isUser ? "bg-blue-500 text-white" : "bg-gray-200"}`}>
              <p>{message.text}</p>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="max-w-xs rounded-xl p-3 bg-gray-300">
              <p>Thinking...</p>
            </div>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit} className="flex items-center justify-between">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about a health condition..."
          className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button type="submit" className="ml-2 text-white bg-blue-600 p-3 rounded-full">
          {loading ? "..." : <Mic className="w-6 h-6" />}
        </button>
      </form>
    </div>
  );
};

export default HealthChatBot;
