# 📝 Markdown Blog

This is a simple static blog built with **Next.js** where blog posts are written in plain **Markdown (`.md`) files**. It uses **static generation** to load and render posts, supports **frontmatter**, and applies **custom CSS** for styling.

---

## ✨ Features

- ✅ Write blog posts in `/blogs` as `.md` files
- ✅ Automatically generate pages for each post
- ✅ Clean layout with centered content
- ✅ Responsive design with readable typography
- ✅ Ordered lists, images with border-radius, code blocks, etc.
- ✅ Uses `remark`, `remark-html`, and `gray-matter` for Markdown parsing

---

## 📁 Folder Structure

```
.
├── app/
│   ├── blog/
│   │   └── [slug]/
│   │       └── page.tsx     # Renders each blog post
│   └── page.tsx             # Blog homepage (list of posts)
├── blogs/                   # Markdown files live here
│   └── first-post.md
├── lib/
│   └── blogs.ts             # Markdown parsing utilities
├── public/
├── styles/
│   └── globals.css          # Global CSS styling
├── types/
│   └── blog.ts              # Blog metadata types
├── next.config.js
├── tsconfig.json
└── README.md
```

---

## 🛠 Installation

```bash
git clone https://github.com/your-username/markdown-blog.git
cd markdown-blog
npm install
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧠 Writing Blog Posts

1. Create a new file in the `blogs/` folder:
   ```
   blogs/my-post.md
   ```

2. Use this format:

   ```markdown
   ---
   title: "My Awesome Post"
   date: "2025-06-22"
   ---

   This is my post content.

   1. First item
   2. Second item

   ![Alt text](https://via.placeholder.com/400)
   ```

---

## 🧩 Tech Stack

- [Next.js App Router](https://nextjs.org/docs/app) (13+)
- [TypeScript](https://www.typescriptlang.org/)
- [Gray-matter](https://github.com/jonschlinkert/gray-matter)
- [Remark](https://github.com/remarkjs/remark)
- [Plain CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) (no Tailwind)

---

## 💡 Customization Ideas

- Add author name in frontmatter
- Add tags/categories
- Add search or filtering
- Add a reading time indicator
- Use MDX for advanced interactivity

---

## 📄 License

MIT License. Use freely and customize as you like.