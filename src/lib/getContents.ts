import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export function getFileBySlug(slug: string) {
  const fullPath = path.join(contentDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    slug,
    ...data,
    content,
  };
}

export function getAllFiles() {
  const files = fs.readdirSync(contentDirectory);

  return files.map((file) => {
    const slug = file.replace(/\.md$/, "");
    return getFileBySlug(slug);
  });
}
