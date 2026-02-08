import { client } from './client'

export async function getPosts() {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage,
      "author": author->name
    }
  `)
  return posts
}

export async function getPost(slug: string) {
  const post = await client.fetch(`
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      body,
      publishedAt,
      mainImage,
      "author": author->name
    }
  `, { slug })
  return post
}

export async function getRecentPosts(limit: number = 3) {
  const posts = await client.fetch(`
    *[_type == "post"] | order(publishedAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      publishedAt,
      mainImage
    }
  `, { limit: limit - 1 })
  return posts
}
