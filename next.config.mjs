import withPWA from 'next-pwa';

const pwaConfig = {
  dest: 'public'
}

const nextConfig = withPWA(pwaConfig)({
  reactStrictMode: true,
});

export default nextConfig;