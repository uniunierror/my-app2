"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">検索結果</h1>
      {query ? (
        <p>「{query}」の検索結果を表示しています。</p>
      ) : (
        <p>検索キーワードを入力してください。</p>
      )}
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<p>読み込み中...</p>}>
      <SearchContent />
    </Suspense>
  );
}
