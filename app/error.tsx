"use client";

export default function Error({ error }: { error: Error }) {
  return (
    <div className="text-center py-20">
      <h1 className="text-3xl font-bold mb-4">エラーが発生しました</h1>
      <p>{error.message}</p>
    </div>
  );
}
