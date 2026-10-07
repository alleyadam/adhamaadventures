import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Adhama Africa Adventures',
    short_name: 'Adhama',
    description: 'Responsible community-based safaris, cultural tours and Kilimanjaro adventures in Tanzania.',
    start_url: '/',
    display: 'standalone',
    background_color: '#fbf7ef',
    theme_color: '#185233',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
