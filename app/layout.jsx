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
  appleWebApp: {
    capable: true,
    title: "EG|World v1",
    startupImage: "/opengraph-image.png",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  verification: {},
  appLinks: {},
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
      <body
        className={cn(
          "grid min-h-[100dvh] grid-rows-[auto_1fr_auto] scroll-smooth bg-background font-neogrote text-foreground antialiased"
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
