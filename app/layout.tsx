import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Unmesh Bhosale - AI/ML Engineer",
  description:
    "AI/ML Engineer and Full-Stack Developer portfolio for Unmesh Bhosale, focused on ML systems, semantic retrieval, backend APIs, and production software.",
  metadataBase: new URL("https://unmesh-portfolio.example.com"),
  openGraph: {
    title: "Unmesh Bhosale - AI/ML Engineer",
    description:
      "Portfolio showcasing AI/ML projects, semantic retrieval, JAX optimization, full-stack development, and backend systems.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="bg-white font-sans text-ink antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
try {
  var theme = window.localStorage.getItem("portfolio-theme");
  if (theme === "cyberpunk") {
    document.documentElement.dataset.theme = "cyberpunk";
    document.documentElement.style.colorScheme = "dark";
  } else {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
} catch (_) {
  document.documentElement.dataset.theme = "light";
}
`
          }}
        />
        {children}
      </body>
    </html>
  );
}
