<a href="https://www.oliverlister.dev/">
  <img alt="Oliver Lister | Portfolio & Blog - Web Developer" src="https://www.oliverlister.dev/readme_blog_teaser.webp">
  <h1 align="center">Oliver Lister's Portfolio & Blog </h1>
</a>

<p align="center">
My Next.js, Supabase and MDX powered portfolio and blog.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#dependencies"><strong>Dependencies</strong></a> ·
  <a href="#acknowledgements"><strong>Acknowledgements</strong></a> ·
  <a href="#to-dos"><strong>To-dos</strong></a>
</p>
<br/>

## Features

### Supabase Auth

- Github login 
- SessionProvider component fetches session from Supabase on mount and stores it in Zustand's global User state.

### MDX Blog

- Custom post creation form which leverages presigned URLs from Cloudflare R2
  (via AWS-SDK) to directly send images via PUT requests to Cloudflare,
  bypassing the server for added secruity.
- Server actions through the ZSA library for zod validation and security proceedures which check user's
  athentication and post ownership status before executing.
- Post metadata such as title, description, author_id, and image_url stored in
  Supabase, and secured using Supabase's RLS policies.
- Table of contents navigation extracted from markdown document headings using
  rehype-slug and rehype-extract-toc.
- Code snippet syntax highlighting using rehype-highlight.
- Code snippet headers with filename using rehype-mdx-code-props.

### Email Automation

- Contact form using react-hook-form and zod validation.


## Dependencies

- **Languages:** Typescript
- **Frameworks:** React, Next.js
- **Libraries:** TailwindCSS, Supabase (PostgreSQL), MDX, Jest, React Testing
  Library, Zustand, ZSA, Axios, Zod.
- **Other Tools:** Cloudflare R2, Resend

## Acknowledegements

## To-dos
