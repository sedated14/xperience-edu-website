import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import { getPost, getPosts } from '@/sanity/queries'
import { urlFor } from '@/sanity/client'
import { Calendar, ArrowLeft, User } from 'lucide-react'

export const revalidate = 60

// Generate static paths for all posts
export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post: any) => ({
    slug: post.slug.current,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) return { title: 'Post Not Found' }
  
  return {
    title: post.title,
    description: post.excerpt || `Read ${post.title} on the Xperience Education blog.`,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.mainImage ? [urlFor(post.mainImage).width(1200).height(630).url()] : [],
    },
  }
}

// Custom components for rendering rich text
const components = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8 rounded-2xl overflow-hidden">
        <Image
          src={urlFor(value).width(800).url()}
          alt={value.alt || 'Blog image'}
          width={800}
          height={450}
          className="w-full"
        />
      </div>
    ),
  },
  block: {
    h2: ({ children }: any) => (
      <h2 className="text-2xl font-bold text-neutral-900 mt-8 mb-4">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-xl font-bold text-neutral-900 mt-6 mb-3">{children}</h3>
    ),
    normal: ({ children }: any) => (
      <p className="text-neutral-700 leading-relaxed mb-4">{children}</p>
    ),
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-secondary-500 pl-6 italic text-neutral-600 my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-4 text-neutral-700">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal list-inside space-y-2 mb-4 text-neutral-700">{children}</ol>
    ),
  },
  marks: {
    link: ({ children, value }: any) => (
      <a 
        href={value.href} 
        className="text-secondary-600 hover:text-secondary-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
    strong: ({ children }: any) => (
      <strong className="font-semibold text-neutral-900">{children}</strong>
    ),
  },
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-12 lg:pt-40 lg:pb-16 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-dots-pattern" />
        </div>
        <div className="container-wide relative z-10">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 text-white/80 text-sm mb-4">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </span>
              {post.author && (
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
              )}
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-display">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-lg text-white/80 mt-4">{post.excerpt}</p>
            )}
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {post.mainImage && (
        <section className="relative -mt-8 z-10">
          <div className="container-wide">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-elevated">
                <Image
                  src={urlFor(post.mainImage).width(1200).height(675).url()}
                  alt={post.title}
                  width={1200}
                  height={675}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CONTENT */}
      <section className="section bg-white">
        <div className="container-wide">
          <article className="max-w-3xl mx-auto prose prose-lg">
            {post.body && <PortableText value={post.body} components={components} />}
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our programs and take the first step toward your American education experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/students" 
                className="inline-flex items-center gap-2 bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
              >
                Explore Programs
              </Link>
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
