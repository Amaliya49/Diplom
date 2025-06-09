import withPWA from 'next-pwa';

const pwaConfig = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
}

const nextConfig = withPWA(pwaConfig)({
  reactStrictMode: true,
});

export default nextConfig;