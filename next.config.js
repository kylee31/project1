/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: false,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/api/recommend/:path*",
                destination: "http://api.kcisa.kr/openapi/API_CNV_060/request/:path*",
            },
            // {
            //     source: "/api/weather/:path*",
            //     destination: "https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst/:path*"
            // },
        ];
    },
}

module.exports = nextConfig
