/* * */

export default function manifest() {
  return {
    name: 'Earth',
    short_name: "João's Earth",
    description: 'João de Vasconcelos',
    start_url: '/',
    theme_color: '#ffffff',
    background_color: '#ffffff',
    display: 'standalone',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
