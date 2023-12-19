/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {
    experimental: {
        webpack: (config) => {
            config.externals = [...config.externals, 'bcrypt'];
            return config;
        },
    },
}
=======
const nextConfig = {}
>>>>>>> bcab0d982a8c651f21ea2ebebe087963209ce63d

module.exports = nextConfig
