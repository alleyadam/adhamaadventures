import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  // We remove ignoreBuildErrors to ensure production stability.
  // Build time validation is critical for Next.js reliability.
  typescript: {
    ignoreBuildErrors: false, 
  }
};

export default nextConfig;