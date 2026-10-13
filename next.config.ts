import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://upload.wikimedia.org/wikipedia/commons/**")],
  },
  redirects() {
    return [
      { source: "/courses/:path*", destination: "/job-seekers", permanent: true },
      {
        source: "/industries/construction-real-estate",
        destination: "/industries/construction-infrastructure",
        permanent: true,
      },
      {
        source: "/industries/textile-apparel",
        destination: "/industries/manufacturing-engineering",
        permanent: true,
      },
      {
        source: "/industries/:slug(banking-financial-services|retail-ecommerce)",
        destination: "/industries/non-it-corporate",
        permanent: true,
      },
      { source: "/industries/healthcare-pharma", destination: "/industries", permanent: true },
      { source: "/jobs/page/1", destination: "/jobs", permanent: true },
    ];
  },
  experimental: {
    serverActions: {
      // Enquiry form accepts resumes up to 4 MB plus multipart overhead
      bodySizeLimit: "5mb",
    },
  },
};

export default nextConfig;
