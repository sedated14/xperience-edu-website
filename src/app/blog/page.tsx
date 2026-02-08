import Link from 'next/link'
import Image from 'next/image'
import { getPosts } from '@/sanity/queries'
import { urlFor } from '@/sanity/client'
import { Calendar, ArrowRight, BookOpen } from 'lucide-react'

export const revalidate = 60 // Revalidate every 60 seconds

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 hero-gradient overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-dots-pattern" />
        </div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary-500/10 rounded-full blur-3xl" />
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary-500/20 backdrop-blur-sm rounded-full text-secondary-300 text-sm mb-6">
              <BookOpen className="w-4 h-4" />
              Our Blog
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-display">
              Insights & 
              <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-secondary-400 to-accent-400">Resources</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/80 mt-6 max-w-2xl">
              Tips, guides, and stories to help you navigate your international education journey.
            </p>
          </div>
        </div>
      </section>

      {/* BLOG POSTS */}
      <section className="section bg-neutral-50">
        <div className="container-wide">
          {posts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">Coming Soon</h2>
              <p className="text-neutral-600">We&apos;re working on some great content. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: any) => (
                <Link 
                  key={post._id} 
                  href={`/blog/${post.slug.current}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
                >
                  {post.mainImage && (
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={urlFor(post.mainImage).width(600).height(340).url()}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.publishedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <h2 className="text-xl font-bold text-neutral-900 group-hover:text-secondary-600 transition-colors mb-2">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-neutral-600 line-clamp-2 mb-4">{post.excerpt}</p>
                    )}
                    <div className="flex items-center text-secondary-600 font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-white">
        <div className="container-wide">
          <div className="bg-gradient-to-br from-secondary-600 to-secondary-800 rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Explore our programs and take the first step toward your American education experience.
            </p>
            <Link 
              href="/students" 
              className="inline-flex items-center gap-2 bg-white text-secondary-600 px-8 py-4 rounded-full font-semibold hover:bg-neutral-100 transition-colors"
            >
              Explore Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
