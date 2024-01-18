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
        hostname: 'spb-apple.ru'
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
