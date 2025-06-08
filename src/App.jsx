import React, { useState } from "react";
import Crypto from "./utils/crypto";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

export default function App() {
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");

  const handleEncrypt = () => {
    const encrypted = Crypto.encrypt(text, password);
    const blob = new Blob([encrypted], { type: "text/plain;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "note.md.enc";
    a.click();
  };

  const handleDecrypt = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const decrypted = Crypto.decrypt(e.target.result, password);
      setText(decrypted);
    };
    reader.readAsText(file);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">📝 InvisiNote</h1>
      <textarea
        className="w-full h-40 p-2 border rounded mb-2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your markdown note..."
      />
      <input
        type="password"
        className="w-full p-2 border rounded mb-2"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div className="flex gap-2 mb-4">
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={handleEncrypt}>Encrypt + Save</button>
        <input type="file" onChange={handleDecrypt} className="border rounded px-4 py-2" />
      </div>
      <Previewer markdown={text} />
    </div>
  );
}
