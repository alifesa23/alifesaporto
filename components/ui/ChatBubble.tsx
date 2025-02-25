"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, Loader } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface ChatBubbleProps {
  isChatOpen: boolean;
  setIsChatOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ isChatOpen, setIsChatOpen }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "👋 Hi! I`&apos;m Esa`&apos;s AI Assistant. How can I help you today?" },
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isChatOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [chat, isChatOpen]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    const userMessage = { role: "user", content: message };
    setChat((prev) => [...prev, userMessage]);
    setMessage("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message,
          sessionId: Date.now().toString(),
        }),
      });

      const data = await response.json();

      if (data.response) {
        setChat((prev) => [...prev, { role: "assistant", content: data.response }]);
      } else {
        throw new Error("Gagal mendapatkan respons.");
      }
    } catch (error) {
      console.error("Error:", error);
      setChat((prev) => [...prev, { role: "assistant", content: "Maaf, terjadi kesalahan. Coba lagi nanti." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="fixed bottom-6 right-6 bg-blue-500 dark:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition transform"
      >
        <MessageCircle className="w-8 h-8" />
      </button>

      {isChatOpen && (
        <div className="fixed bottom-20 right-6 w-80 bg-gray-900 text-white rounded-lg shadow-lg border border-gray-700">
          <div className="bg-blue-500 p-3 flex justify-between items-center rounded-t-lg">
            <span className="text-white font-semibold">Chat with Esa`&apos;s AI Assistant</span>
            <button onClick={() => setIsChatOpen(false)} className="text-white hover:opacity-80">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col space-y-2 p-3 h-96 overflow-y-auto">
            {chat.map((msg, idx) => (
              <div
                key={idx}
                className={`p-2 rounded-lg max-w-[75%] ${
                  msg.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-800 text-white self-start"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && (
              <div className="flex items-center text-gray-400 self-start">
                <Loader className="animate-spin mr-2 w-4 h-4" /> Mengetik...
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="flex items-center space-x-2 p-3 border-t border-gray-700">
            <Input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 bg-gray-800 text-white border-gray-600 placeholder-gray-400 focus:ring-0 focus:border-blue-500 rounded-full"
              aria-label="Ketik pesan"
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <Button onClick={sendMessage} disabled={!message.trim() || loading} className="bg-blue-500 p-2 rounded-full">
              {loading ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5 text-white" />}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
