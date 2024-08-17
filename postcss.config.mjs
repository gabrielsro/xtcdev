/** @type {import('postcss-load-config').Config} */
const config = {
  async rewrites(){
    return [{source:"/ingest/static/:path*",destination:"https://us-assets.i.posthog.com"},{source:"/ingest/:path*",destination:"https://us.i.posthog.com/path*"},{source:"ingest/decide",destination:"https://us.i.posthog.com/decide"}];
  },
  skipTrailingSlashRedirect:true,
  plugins: {
    tailwindcss: {},
  },
};

export default config;
