// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatarzo.ru'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com'
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  }
}

module.exports = nextConfig
// https://avatarzo.ru
// (https://www.blast.hk
// (https://illustrators.ru
// (https://cdn.freelance.ru
// (https://trashbox.ru
// (https://trashbox.ru
// https://spb-apple.ru/image/cache/catalog/Add/iPhone%2014/14blue-350x450.jpg
// https://avatarzo.ru
// https://avatars.githubusercontent.com/u/103478300?v=4
// https://lh3.googleusercontent.com/a/ACg8ocKiflyeitL5weOiXBwH-vRoTRgugN2EqNwl46ArYWNWbQ=s96-c
