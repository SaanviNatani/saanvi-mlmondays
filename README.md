ML Mondays – Blog Platform
🔗 Live Links

Live Site: https://saanvi-mlmondays.netlify.app/

GitHub Repository: https://github.com/SaanviNatani/saanvi-mlmondays

📌 Project Overview

ML Mondays is a static blog platform built to host short, practical machine learning articles.
The goal was to create a clean, fast, and easy-to-maintain blog system aligned with Neural Hive’s design and content expectations.

🛠️ Tech Stack & SSG Choice

Astro – Static Site Generator (SSG)

Markdown – Blog content authoring

Tailwind CSS – Styling and layout

Netlify – Deployment & hosting

GitHub – Version control

Why Astro?
Astro was chosen because it offers fast performance, clean file-based routing, and excellent support for static content and Markdown-based blogs without unnecessary JavaScript.

🧱 Architecture & Structure

Pages are created using Astro’s file-based routing.

Layouts ensure consistent headers, footers, and metadata across the site.

Reusable components (Hero, PostCard, etc.) keep the UI modular.

Blog posts are stored as Markdown files inside src/content/posts.

This structure makes the project easy to scale and maintain.

✍️ Blog Upload Workflow

To add a new blog post:

Create a new .md file inside src/content/posts

Add frontmatter (title, date, description, slug)

Write content in Markdown

The post automatically appears on the Posts page and gets its own URL

No code changes are required to publish new blogs.

🔀 Routing & Navigation

Static routing for Home, About, Write for Us, and Ethos pages

Dynamic routing for blog posts using /posts/[slug]

Clean and readable URLs for better SEO and usability

🔍 SEO & Performance

Meta titles and descriptions added via layouts

Clean URLs using Astro routing

Fast load times due to static generation and minimal JavaScript

⭐ Optional Enhancements

Per-post view counter implemented using browser local storage
(lightweight, non-intrusive, and scoped per blog post)

⚠️ Challenges Faced

Understanding Astro’s routing and layout behavior initially

Debugging dynamic post routing and imports

Managing deployment and GitHub authentication issues

These challenges helped me gain a better understanding of Astro, static site workflows, and real-world deployment processes.

🚀 Conclusion

This project fulfills all required features, follows clean architectural practices, and provides a simple yet effective blogging platform that can be easily extended in the future.
