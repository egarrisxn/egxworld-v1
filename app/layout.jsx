import './globals.css'
import {cn} from '@/lib/utils'
import {ThemeProvider} from '@/components/ThemeProvider'
import {Navbar} from '@/components/Navbar'
import {Footer} from '@/components/Footer'
import {Toaster} from '@/components/ui/toaster'
import {Analytics} from '@vercel/analytics/react'

export const metadata = {
  metadataBase: new URL('https://egxworld.vercel.app'),
  title: 'EG|World v1',
  description: 'Full Stack Developer. Digital Product Designer.',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'eg, ethan_g, ethang, ethan-g, egarrisxn, egxworld, website, portfolio, projects, about, nextjs, next, next14, shadcn-ui, shadcn/ui, radixui, tailwindcss, javascript, react, fullstack, full-stack, webdeveloper, web-developer',
  ],
  creator: {name: 'Ethan Garrison', url: 'https://github.com/egarrisxn'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: 'egxworld.vercel.app',
    title: 'EG|World v1',
    url: 'https://egxworld.vercel.app',
    locale: 'en_US',
    images: [
      {
        url: `https://egxworld.vercel.app/opengraph-image.png`,
        width: 1200,
        height: 630,
        alt: 'Full Stack Developer. Digital Product Designer.',
      },
    ],
  },
  twitter: {
    cardType: 'summary_large_image',
    creator: '@eg__xo',
    site: '@eg__xo',
    title: 'EG|World v1',
    images: [
      {
        url: `https://egxworld.vercel.app/twitter-image.png`,
        width: 1200,
        height: 630,
        alt: 'Full Stack Developer. Digital Product Designer.',
      },
    ],
  },
  icons: {
    shortcut: 'https://egxworld.vercel.app/favicon.ico',
  },
}

export const viewport = {
  themeColor: [
    {media: '(prefers-color-scheme: light)', color: '#eaeaea'},
    {media: '(prefers-color-scheme: dark)', color: '#0f0f10'},
  ],
}

export default function RootLayout({children}) {
  return (
    <html lang='en' className='scroll-smooth antialiased' suppressHydrationWarning>
      <body
        className={cn(
          'grid min-h-[100dvh] grid-rows-[auto_1fr_auto] bg-background font-neogrote text-foreground',
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
  )
}
