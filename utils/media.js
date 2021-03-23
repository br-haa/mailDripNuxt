export function getStrapiMedia(url) {
  // Check if URL is a local path
  console.log(process.env.strapiBaseUri)
  if (url.startsWith('/')) {
    // Prepend Strapi address
    return `${process.env.strapiBaseUri}${url}`
  }
  // Otherwise return full URL
  return url
}
