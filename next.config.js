/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "http://api.kcisa.kr/openapi/API_CNV_060/request/:path*",
            },
        ];
    },
}

module.exports = nextConfig
