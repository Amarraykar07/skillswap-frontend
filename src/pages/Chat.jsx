import { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // backend URL

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const endRef = useRef(null);

  useEffect(() => {
    socket.on("receiveMessage", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("receiveMessage");
  }, []);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!text.trim()) return;

    const msg = {
      sender: "me",
      message: text,
      time: new Date().toLocaleTimeString(),
    };

    socket.emit("sendMessage", msg);
    setMessages((prev) => [...prev, msg]);
    setText("");
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-blue-600 text-white p-4 flex items-center gap-3">
        <div className="h-3 w-3 bg-green-400 rounded-full"></div>
        <h2 className="font-semibold">Barter Partner</h2>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`max-w-xs p-3 mb-2 rounded-lg text-sm ${
              m.sender === "me"
                ? "ml-auto bg-blue-600 text-white"
                : "mr-auto bg-white"
            }`}
          >
            <p>{m.message}</p>
            <span className="text-xs opacity-70">{m.time}</span>
          </div>
        ))}
        <div ref={endRef}></div>
      </div>

      {/* Input */}
      <div className="p-3 flex gap-2 bg-white">
        <input
          className="flex-1 border rounded px-3 py-2"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-blue-600 text-white px-4 rounded hover:bg-blue-500 transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
