export default function manifest() {
  return {
    name: 'egxworldv1',
    short_name: 'egv1',
    description: 'Full Stack Developer. Digital Product Designer.',
    display: 'standalone',
    background_color: '#eaeaea',
    theme_color: '#eaeaea',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-384.png',
        sizes: '384x384',
        type: 'image/png',
      },
    ],
  }
}
