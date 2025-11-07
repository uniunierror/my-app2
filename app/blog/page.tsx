import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

type PostMeta = {
  slug: string;
  title: string;
  date: string;
};

export default function BlogList() {
  const postsDir = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(postsDir);

const posts: PostMeta[] = files.map((file) => {
  const filePath = path.join(postsDir, file);
  const { data } = matter(fs.readFileSync(filePath, "utf8"));
  return {
    slug: file.replace(/\.md$/, ""),
    title: data.title as string,
    date: data.date as string,
  };
});


  return (
    <main className="space-y-4">
      <h1 className="text-3xl font-bold">ブログ一覧</h1>
      <ul className="space-y-2">
        {posts.map((p) => (
          <li key={p.slug}>
            <Link href={`/blog/${p.slug}`} className="text-blue-600 hover:underline">
              {p.title}
            </Link>
            <p className="text-sm text-gray-500">{p.date}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
