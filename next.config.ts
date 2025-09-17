import type {NextConfig} from "next";

const nextConfig: NextConfig = {
    "compilerOptions": {
        "baseUrl": ".",
        "paths": {
            "@/*": ["./*"]
        }
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'randomuser.me',
                port: '',
                pathname: '/api/portraits/**',
            },
        ],
    },
};

export default nextConfig;
