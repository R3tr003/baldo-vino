import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  transpilePackages: ['next-sanity', 'sanity'],
  redirects: async () => [
    {
      source: "/it/contatti",
      destination: "/it/contatti/contatti/",
      permanent: true,
    },
    {
      source: "/it/eventi",
      destination: "/it/eventi/eventi/",
      permanent: true,
    },
  ],
};

export default nextConfig;
