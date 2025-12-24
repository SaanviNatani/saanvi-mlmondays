export async function getPosts() {
  const modules = import.meta.glob('/src/content/posts/*.md', { eager: true });
  const posts = Object.values(modules).map((m) => ({
    ...m.frontmatter,
    body: m.default,
  }));
  posts.sort((a, b) => new Date(b.date) - new Date(a.date));
  return posts;
}