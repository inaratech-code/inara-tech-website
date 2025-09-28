import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Calendar, Clock, Tag, ExternalLink, Eye } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { getAllBlogPosts, getAllTags, getBlogViewCount } from '../utils/blogUtils'
import { formatDate, truncateText } from '../lib/utils'

const Blog = () => {
  const [selectedTag, setSelectedTag] = useState('all')
  const posts = getAllBlogPosts()
  const tags = getAllTags()

  const filteredPosts = selectedTag === 'all' 
    ? posts 
    : posts.filter(post => post.frontmatter.tags?.includes(selectedTag))

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

  const cardVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -20, rotateY: -10, scale: 0.9, z: -40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0, 
      rotateY: 0, 
      scale: 1, 
      z: 0,
      transition: { 
        duration: 1.2, 
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 60,
        damping: 20
      }
    }
  }

  return (
    <div className="min-h-screen pt-14">
      {/* Doodle Watermark - Blog Page */}
      <div className="doodle-watermark-blog"></div>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#93c5fd]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">
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
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              variants={titleVariants}
              whileHover={{
                rotateX: 8,
                rotateY: 8,
                scale: 1.05,
                z: 30,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              My <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Personal Blog</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              variants={titleVariants}
              whileHover={{
                rotateX: -5,
                rotateY: -5,
                scale: 1.03,
                z: 25,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Insights, experiences, and lessons learned from building startups, scaling businesses, and navigating the entrepreneurial journey. 
              Discover practical advice, failures, successes, and everything in between.
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
              variants={titleVariants}
            >
              <Button asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href="https://medium.com/@akshaymohpal.07" target="_blank" rel="noopener noreferrer">
                  📝 Follow on Medium
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="https://medium.com/@akshaymohpal.07" target="_blank" rel="noopener noreferrer">
                  📚 Read on Medium
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <h3 className="text-xl font-semibold mb-2">No posts found</h3>
              <p className="text-muted-foreground">Try selecting a different tag or check back later.</p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    y: -15,
                    rotateX: 12,
                    rotateY: 8,
                    scale: 1.05,
                    z: 50,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group" data-cursor-text={`Read ${post.frontmatter.title}`}>
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div 
                          className="text-4xl image-3d"
                          whileHover={{ 
                            rotateX: 360,
                            rotateY: 180,
                            scale: 1.2,
                            transition: { duration: 0.6 }
                          }}
                          animate={{ 
                            rotateX: [0, 5, 0, -5, 0],
                            rotateY: [0, 5, 0, -5, 0],
                            transition: { 
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }
                          }}
                        >
                          📝
                        </motion.div>
                      </div>
                    </div>

                    <CardHeader>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
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
                      </div>
                      
                      <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                        {post.frontmatter.title}
                      </CardTitle>
                      
                      <CardDescription className="text-base">
                        {truncateText(post.excerpt, 150)}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      {/* Tags */}
                      {post.frontmatter.tags && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {post.frontmatter.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Action Button */}
                      <Button asChild className="w-full" data-cursor-text="Read Article">
                        <Link to={`/blog/${post.slug}`} className="flex items-center">
                          Read Full Article
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Blog
