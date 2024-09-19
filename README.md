<a href="https://www.oliverlister.dev/">
  <img alt="Oliver Lister Portfolio & Blog - Web Developer" src="https://www.oliverlister.dev/readme_blog_teaser.webp">
  <h1 align="center">Oliver Lister's Portfolio & Blog </h1>
</a>

<p align="center">
My Next.js, Supabase and MDX powered portfolio and blog.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#dependencies"><strong>Dependencies</strong></a> ·
  <a href="#resources"><strong>Resources</strong></a> ·
  <a href="#to-dos"><strong>To-dos</strong></a>
</p>
<br/>

## Features

### Supabase Auth

- Supabase authentication integrated with Github.
- Uses Supabase middleware utility to update the user's session before
  attempting to access a protected route (e.g. /blog/dashboard).
- SessionProvider component fetches the user's auth session from Supabase on
  mount and stores it in Zustand's global User state.

### MDX Blog

- Custom post creation form which leverages presigned URLs from Cloudflare R2
  (via AWS-SDK) to directly send images via PUT requests to Cloudflare,
  bypassing the server for added secruity.
- Server actions through the ZSA library for zod validation and security
  proceedures which check user's athentication and post ownership status before
  executing.
- Post metadata such as title, description, author_id, and image_url stored in
  Supabase, and secured using Supabase's RLS policies.
- Table of contents navigation extracted from markdown document headings using
  rehype-slug and rehype-extract-toc.
- Raw code copy button through unist-util-visit. Code is stored as a property of
  the node before syntax highlighting takes place.
- Code snippet syntax highlighting using rehype-highlight.
- Code snippet headers with filename using rehype-mdx-code-props.

### Email Automation

- Contact form using react-hook-form and zod validation.
- Automated emails from visitors sent to my personal email address via Resend
  email server running on subdomain.

### Custom UI Components

- Custom TailwindCSS styled UI components for Button, Input, Popover, Switch,
  Modal, and Card.
- Light and Dark mode toggle using next-themes.

## Dependencies

- **Languages:** Typescript
- **Frameworks:** React, Next.js
- **Libraries:** TailwindCSS, Supabase (PostgreSQL), MDX, Vitest, React Testing
  Library, Zustand, ZSA, Axios, Zod.
- **Other Tools:** Cloudflare R2, Resend

## Resources

- [Supabase docs](https://supabase.com/docs)
- [MDX Copy Button Tutorial Blog Post](https://claritydev.net/blog/copy-to-clipboard-button-nextjs-mdx-rehype)
- [Resend docs](https://resend.com/docs/send-with-nextjs)
- [Tailwind docs](https://tailwindcss.com/docs)
- [Presigned PUT Requests with Cloudflare R2 Tutorial](https://www.youtube.com/watch?v=tWYShrD6cNE)

## To-dos

- Write more blog posts.
- Integrate keyword tags into blog post metadata.
- Filtering and search functionality for blog posts in main route (/blog) and
  dashboard using URL search queries.
- Automate an email send out to mailing list when a new blog post is published.
- Add in likes and comment section to blog posts.
- Add in similar posts section to blog posts.
