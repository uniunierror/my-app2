"use client";
import { useState } from "react";

export default function LineCounterPage() {
  const [text, setText] = useState("");

  // 改行を基準に行数を数える
  const lineCount = text === "" ? 0 : text.split(/\r?\n/).length;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">行数カウンター</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="ここにテキストを入力..."
        className="w-full h-48 p-3 border rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
      />
      <p className="mt-4 text-gray-700">
        行数：<span className="font-semibold">{lineCount}</span>
      </p>
    </div>
  );
}
