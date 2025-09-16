import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Calendar, Clock, Tag, ArrowLeft, Eye } from 'lucide-react'
import { Button } from '../components/ui/button'
import { getBlogPostBySlug, incrementBlogView, getBlogViewCount } from '../utils/blogUtils'
import { formatDate } from '../lib/utils'
import { useEffect } from 'react'

const BlogPost = () => {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  // Track view when component mounts
  useEffect(() => {
    if (post && slug) {
      incrementBlogView(slug)
    }
  }, [post, slug])

  // Apple-style 3D Animation Variants
  const heroVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -25, rotateY: -10, scale: 0.9, z: -100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      rotateY: 0, 
      scale: 1, 
      z: 0,
      transition: { 
        duration: 1.5, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 40,
        damping: 12
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8, rotateX: -30, rotateY: -15, z: -50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0, 
      z: 0,
      transition: { 
        duration: 1.3, 
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9, rotateX: 25, rotateY: 15, z: -30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0, 
      z: 0,
      transition: { 
        duration: 1.3, 
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-14 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      className="min-h-screen pt-14"
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: { 
          duration: 0.6, 
          ease: "easeOut"
        }
      }}
      exit={{ 
        opacity: 0, 
        y: -20,
        scale: 0.98,
        transition: { duration: 0.3 }
      }}
    >
      {/* Header */}
      <section className="py-12 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#93c5fd]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              rotateX: 8,
              rotateY: 8,
              scale: 1.02,
              z: 30,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              variants={contentVariants}
            >
              <Button asChild variant="ghost" className="mb-6">
                <Link to="/blog" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>
            </motion.div>

            <motion.div 
              className="mb-6"
              variants={titleVariants}
            >
              <motion.h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
                whileHover={{
                  rotateX: 8,
                  rotateY: 8,
                  scale: 1.05,
                  z: 30,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {post.frontmatter.title}
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-6"
                whileHover={{
                  rotateX: -5,
                  rotateY: -5,
                  scale: 1.03,
                  z: 25,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {post.frontmatter.excerpt}
              </motion.p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {Math.ceil(post.content.split(' ').length / 200)} min read
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {getBlogViewCount(post.slug) + (post.views || 0)} views
              </div>
              <div className="flex items-center">
                <span>By {post.frontmatter.author}</span>
              </div>
            </div>

            {post.frontmatter.tags && (
              <div className="flex flex-wrap gap-2">
                {post.frontmatter.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full flex items-center"
                  >
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.8, 
                delay: 0.3,
                ease: "easeOut"
              }
            }}
          >
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Author Bio or Related Content */}
            <motion.div 
              className="mt-12 pt-8 border-t border-border"
              initial={{ opacity: 0, y: 20 }}
              animate={{ 
                opacity: 1, 
                y: 0,
                transition: { 
                  duration: 0.6, 
                  delay: 0.6,
                  ease: "easeOut"
                }
              }}
            >
              <h3 className="text-xl font-bold mb-4">About the Author</h3>
              <p className="text-muted-foreground mb-6">
                {post.frontmatter.author} is a passionate developer and writer who loves sharing knowledge 
                about web development and technology.
              </p>
              
              {/* Medium Links */}
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                    <a href="https://medium.com/@akshaymohpal.07" target="_blank" rel="noopener noreferrer">
                      📝 Follow on Medium
                    </a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild variant="outline">
                    <a href="https://medium.com/@akshaymohpal.07" target="_blank" rel="noopener noreferrer">
                      📚 Read More on Medium
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  )
}

export default BlogPost
