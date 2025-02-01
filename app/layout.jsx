import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  metadataBase: new URL("https://egxworld.vercel.app"),
  title: "EG|World v1",
  description: "Full Stack Developer. Digital Product Designer.",
  referrer: "origin-when-cross-origin",
  creator: "https://egxo.dev.",
  keywords: [
    "eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer",
  ],
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "EG|World v1",
    description: "Full Stack Developer. Digital Product Designer.",
    url: "https://egxworld.vercel.app",
    siteName: "egxworld.vercel.app",
    images: [
      {
        url: `https://egxworld.vercel.app/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: "Full Stack Developer. Digital Product Designer.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EG|World v1",
    description: "Full Stack Developer. Digital Product Designer.",
    creator: "@eg__xo",
    site: "@eg__xo",
    images: [
      {
        url: `https://egxworld.vercel.app/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: "Full Stack Developer. Digital Product Designer.",
      },
    ],
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" }],
    apple: [{ url: "/apple-icon.png", sizes: "192x192", type: "image/png" }],
    other: [
      {
        rel: "apple-icon-precomposed",
        url: "/apple-icon-precomposed.png",
      },
    ],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaeaea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f10" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className="scroll-smooth antialiased"
      suppressHydrationWarning
    >
      <body
        className={cn(
          "grid min-h-[100dvh] grid-rows-[auto_1fr_auto] bg-background font-neogrote text-foreground"
        )}
      >
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
