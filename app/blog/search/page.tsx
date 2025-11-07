"use client";

import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function BlogSearch() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    // 仮実装：通常はサーバーAPI経由で検索
    setResult(["Next.js入門", "Tailwind概要"].filter(t => t.includes(query)));
  }, [query]);

  return (
    <main>
      <h1 className="text-2xl font-bold mb-4">検索結果：{query}</h1>
      <ul>{result.map((r) => <li key={r}>{r}</li>)}</ul>
    </main>
  );
}
