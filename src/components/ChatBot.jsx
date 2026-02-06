import { useState, useRef, useEffect } from "react";
import products from "../data/products.";
export default function ChatBot({ cartItems, addToCart, removeFromCart }) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      type: "text",
      text: "Hi! I’m ShopBot 🤖. Ask me about birthday gifts, anniversary gifts, tech gadgets, or your cart!",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Rules for keywords
  const rules = [
    {
      keywords: ["birthday", "birthday gift", "birthday present"],
      type: "products",
      reply: "🎉 Birthday gift ideas:",
      filter: (p) =>
        ["Wireless Headphones", "Smart Watch", "Running Shoes"].includes(p.name),
    },
        {
      keywords: ["gift",  "present"],
      type: "products",
      reply: "🎉 gift ideas:",
      filter: (p) =>
        ["Wireless Headphones", "Smart Watch", "Denim Jacket", "Throw Pillow Set"].includes(p.name),
    },
    {
      keywords: ["anniversary", "anniversary gift", "partner gift"],
      type: "products",
      reply: "💖 Anniversary gift suggestions:",
      filter: (p) =>
        ["Denim Jacket", "Coffee Maker", "Throw Pillow Set"].includes(p.name),
    },
    {
      keywords: ["tech", "gadgets", "electronics", "device"],
      type: "products",
      reply: "💻 Check out these tech gadgets:",
      filter: (p) =>
        ["Wireless Headphones", "Smart Watch", "Laptop Stand", "Wireless Mouse", "Sleek Steel Keyboard"].includes(
          p.name
        ),
    },
    {
      keywords: ["cart", "my cart"],
      type: "cart",
    },
    {
      keywords: ["hello", "hi", "hey"],
      type: "text",
      reply: "Hello! How can I help you today? 😊",
    },
  ];

  const getBotReply = (message) => {
    const msg = message.toLowerCase();
    for (let rule of rules) {
      if (rule.keywords.some((k) => msg.includes(k))) {
        if (rule.type === "text") {
          return { type: "text", text: rule.reply };
        } else if (rule.type === "products") {
          const filteredProducts = products.filter(rule.filter);
          return { type: "products", text: rule.reply, products: filteredProducts };
        } else if (rule.type === "cart") {
          return { type: "cart" };
        }
      }
    }
    return {
      type: "text",
      text: "🤔 Sorry, I didn’t understand. Try asking about gifts, products, or your cart.",
    };
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", type: "text", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const botResponse = getBotReply(input);
    setMessages((prev) => [...prev, { sender: "bot", ...botResponse }]);

    setInput("");
  };

  return (
    <>
      {/* Chat Icon */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full bg-yellow-400 shadow-lg flex items-center justify-center text-2xl hover:bg-yellow-500"
        >
          💬
        </button>
      )}

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-4 right-4 w-96 h-96 bg-white shadow-lg rounded-lg flex flex-col z-50">
          <div className="flex justify-between items-center border-b p-2 bg-yellow-400 rounded-t-lg">
            <span className="font-semibold text-white">ShopBot 🤖</span>
            <button onClick={() => setOpen(false)} className="text-white font-bold text-xl">
              ✕
            </button>
          </div>

          <div className="p-3 flex-1 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {/* Text Messages */}
                {m.type === "text" && (
                  <span
                    className={`inline-block px-3 py-2 rounded-lg whitespace-pre-wrap ${
                      m.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {m.text}
                  </span>
                )}

                {/* Product Suggestions */}
                {m.type === "products" && m.sender === "bot" && (
                  <div className="flex flex-col space-y-2 w-full">
                    <span className="text-gray-800">{m.text}</span>
                    <div className="grid grid-cols-1 gap-2">
                      {m.products.map((p) => (
                        <div
                          key={p.id}
                          className="flex items-center gap-2 border p-2 rounded hover:shadow"
                        >
                          <img src={p.image} alt={p.name} className="w-16 h-16 object-cover rounded" />
                          <div className="flex-1">
                            <h3 className="text-sm font-semibold">{p.name}</h3>
                            <p className="text-green-600 font-bold">${p.price.toFixed(2)}</p>
                          </div>
                          <button
                            onClick={() => addToCart(p)}
                            className="bg-yellow-400 text-sm px-2 py-1 rounded hover:bg-yellow-500"
                          >
                            Add
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Cart Messages */}
                {m.type === "cart" && m.sender === "bot" && (
                  <div className="flex flex-col space-y-2 w-full">
                    <span className="text-gray-800">🛒 Your Cart:</span>
                    {cartItems.length === 0 ? (
                      <span className="text-gray-500">Your cart is empty.</span>
                    ) : (
                      <div className="grid grid-cols-1 gap-2">
                        {cartItems.map((item) => (
                          <div
                            key={item.id}
                            className="flex items-center gap-2 border p-2 rounded hover:shadow"
                          >
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-16 h-16 object-cover rounded"
                            />
                            <div className="flex-1">
                              <h3 className="text-sm font-semibold">{item.name}</h3>
                              <p className="text-gray-500">Qty: {item.quantity}</p>
                              <p className="text-green-600 font-bold">
                                ${(item.price * item.quantity).toFixed(2)}
                              </p>
                            </div>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="bg-red-500 text-white text-sm px-2 py-1 rounded hover:bg-red-600"
                            >
                              Remove
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex border-t p-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask me anything..."
              className="flex-1 border rounded px-2 py-1"
            />
            <button onClick={sendMessage} className="ml-2 bg-blue-500 text-white px-4 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}
