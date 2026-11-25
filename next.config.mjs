/** @type {import('next').NextConfig} */
const nextConfig = {
  // /planejador is a static page built with the tasteskill kit (public/planejador/index.html,
  // kit files in public/assets), kept out of the app's Tailwind styles.
  async rewrites() {
    return [{ source: "/planejador", destination: "/planejador/index.html" }];
  },
};

export default nextConfig;
