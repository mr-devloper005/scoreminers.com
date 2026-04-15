export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'lbwtzmxybb',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'Score Miners',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Image and profile platform',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'A Digg-inspired image and profile platform for surfacing standout visuals, creator pages, and fast-moving discoveries through a sharper feed rhythm.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'scoreminers.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://scoreminers.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || 'AIzaSyBco7dIECu3rJWjP3J0MImnR_uxlbeqAe0',

} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const

