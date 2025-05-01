import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://egxworld.vercel.app"),
  title: "EG|World v1",
  description: "Full Stack Developer. Digital Product Designer.",
  referrer: "origin-when-cross-origin",
  applicationName: "EG|World v1",
  creator: "https://egxo.dev.",
  keywords: [
    "eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer",
  ],

  openGraph: {
    title: "EG|World v1",
    description: "Full Stack Developer. Digital Product Designer.",
    url: "https://egxworld.vercel.app",
    siteName: "EG|World v1",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EG|World v1",
    description: "Full Stack Developer. Digital Product Designer.",
    creator: "@eg__xo",
    site: "@eg__xo",
  },
  icons: {
    icon: {
      url: "/icon.png",
      sizes: "192x192",
      type: "image/png",
    },
    apple: {
      url: "/apple-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
    other: {
      rel: "icon",
      url: "/icon.svg",
      type: "image/svg+xml",
    },
  },
  verification: {},
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#eaeaea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f10" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background font-neogrote text-foreground grid min-h-[100dvh] grid-rows-[auto_1fr_auto] scroll-smooth antialiased">
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
