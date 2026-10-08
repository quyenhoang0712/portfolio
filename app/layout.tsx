import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hoang Quang Quyen | Fresher Software Developer",
  description: "Portfolio of Hoang Quang Quyen, a fresher software developer building modern full-stack web applications with React.js, Node.js, and MongoDB.",
  openGraph: { title: "Hoang Quang Quyen | Software Developer", description: "Full-stack projects, technical skills, and frontend internship experience.", type: "website" },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body className="antialiased">{children}</body>
    </html>
  );
}
