# Hoang Quang Quyen — Developer Portfolio

A bilingual, responsive personal portfolio for **Hoang Quang Quyen**, a Fresher Software Developer based in Ho Chi Minh City, Vietnam.

## Live website

[hoang-quang-quyen-portfolio.idealbun1.chatgpt.site](https://hoang-quang-quyen-portfolio.idealbun1.chatgpt.site)

## Highlights

- English and Vietnamese language switcher with saved preference
- Dark and light themes with saved preference
- Responsive layouts for desktop, tablet, and mobile
- Animated section reveals and scroll progress
- Active navigation and mobile menu
- Project, internship, education, and certification sections
- Working email, GitHub, phone, and CV download links
- Reduced-motion accessibility support
- SEO metadata and custom favicon

## Technology

- React 19
- Vite / Vinext
- TypeScript
- Tailwind CSS
- Motion for React
- Lucide icons

## Project structure

```text
app/
  page.tsx            Main portfolio page
  layout.tsx          Metadata and root layout
  globals.css         Theme and responsive styling
components/
  navbar.tsx          Navigation, language and theme controls
  project-card.tsx    Reusable project showcase
  reveal.tsx          Scroll reveal animation
  section-heading.tsx Reusable section heading
data/
  portfolio.ts        Portfolio content and project information
public/
  resume.pdf          Downloadable CV
  favicon.svg         Website icon
```

## Run locally

Requirements: Node.js 22.13 or newer and npm.

```bash
npm install
npm run dev
```

Open the local address shown in the terminal.

## Production build

```bash
npm run build
npm run start
```

## Edit portfolio content

General portfolio, contact, skill, and project data are stored in `data/portfolio.ts`. Page-level bilingual copy is stored in `app/page.tsx` and project translations are stored in `components/project-card.tsx`.

Replace `public/resume.pdf` whenever the CV changes. Keep the same filename so all existing download links continue to work.

## Deployment

The application can be deployed to Vercel or another platform that supports Vite-compatible React applications. For Vercel, connect the repository, keep the default install command, and use `npm run build` as the build command.

## Contact

- Email: [hqq.7.12.03@gmail.com](mailto:hqq.7.12.03@gmail.com)
- GitHub: [github.com/quyenhoang0712](https://github.com/quyenhoang0712)
- Location: Ho Chi Minh City, Vietnam

© 2026 Hoang Quang Quyen.
