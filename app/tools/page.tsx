// app/tools/page.tsx
import Link from "next/link";

export default function ToolsPage() {
  const tools = [
    { href: "/tools/text-counter", title: "文字数カウンター", desc: "テキストの文字数を瞬時にカウントします。" },
    { href: "/tools/line-counter", title: "行数カウンター", desc: "入力したテキストの行数をカウントします。" },
  ];

  return (
    <main>
      <h1 className="text-3xl font-bold mb-6">ツール一覧</h1>
      <ul className="space-y-4">
        {tools.map((tool) => (
          <li key={tool.href} className="border-b pb-2">
            <Link href={tool.href} className="text-blue-600 hover:underline">
              {tool.title}
            </Link>
            <p className="text-sm text-gray-500">{tool.desc}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
