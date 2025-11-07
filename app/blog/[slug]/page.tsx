import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

export const dynamic = "force-dynamic";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "posts", `${slug}.md`);
  const { content, data } = matter(fs.readFileSync(filePath, "utf8"));
  const html = marked.parse(content);

  return (
    <article className="prose dark:prose-invert max-w-2xl mx-auto">
      <h1>{data.title}</h1>
      <p className="text-gray-500">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </article>
  );
}
