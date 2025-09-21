/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: async () => {
    const rewrites = [];
    
    if (process.env.NODE_ENV === "development") {
      rewrites.push({
        source: "/api/py/:path*",
        destination: "http://127.0.0.1:8000/api/py/:path*"
      });
    }
    
    return rewrites;
  }
};

module.exports = nextConfig;
