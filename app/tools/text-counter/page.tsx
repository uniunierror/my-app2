// app/tools/text-counter/page.tsx
"use client"; // ✅ クライアントコンポーネント宣言

import { useState } from "react";

export default function TextCounterPage() {
  const [text, setText] = useState("");

  // 文字数と単語数を計算
  const charCount = text.length;
  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">文字数カウンター</h1>

      <textarea
        className="w-full h-48 p-4 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="ここに文章を入力または貼り付けてください..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <div className="mt-4 flex gap-6 text-lg">
        <p>文字数：<span className="font-semibold">{charCount}</span></p>
        <p>単語数：<span className="font-semibold">{wordCount}</span></p>
      </div>
    </main>
  );
}
