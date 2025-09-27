import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useState, useEffect } from 'react'

const Testimonials = ({ showAll = false, maxItems = 3 }) => {
  const [isMobile, setIsMobile] = useState(false)
  const [testimonials, setTestimonials] = useState([])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Load testimonials from localStorage
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('inaratech_testimonials')
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials))
    } else {
      // Fallback sample testimonials if none are saved
      const sampleTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "TechStart Inc.",
      role: "CEO",
      content: "INARA TECH transformed our digital presence completely. Their innovative approach and attention to detail exceeded our expectations. The team delivered exceptional results that significantly boosted our online engagement.",
      rating: 5,
      avatar: "👩‍💼",
      featured: true
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Digital Solutions Ltd.",
      role: "Marketing Director",
      content: "Working with INARA TECH was a game-changer for our business. Their creative solutions and technical expertise helped us achieve remarkable growth. Highly recommended for anyone looking for quality digital services.",
      rating: 5,
      avatar: "👨‍💻",
      featured: true
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Agency",
      role: "Founder",
      content: "The level of professionalism and creativity at INARA TECH is outstanding. They understood our vision perfectly and brought it to life with amazing results. Our website traffic increased by 300% after their redesign.",
      rating: 5,
      avatar: "👩‍🎨",
      featured: true
    },
    {
      id: 4,
      name: "David Kumar",
      company: "E-commerce Plus",
      role: "Operations Manager",
      content: "INARA TECH's mobile app development service was exceptional. The app they created for us has significantly improved our customer engagement and sales. Their support and maintenance services are also top-notch.",
      rating: 5,
      avatar: "👨‍💼",
      featured: false
    },
    {
      id: 5,
      name: "Lisa Thompson",
      company: "HealthTech Solutions",
      role: "CTO",
      content: "The cloud-native architecture solution provided by INARA TECH was exactly what we needed. Their expertise in modern technologies helped us scale efficiently. The team is knowledgeable and responsive.",
      rating: 5,
      avatar: "👩‍⚕️",
      featured: false
    },
    {
      id: 6,
      name: "Alex Patel",
      company: "StartupHub",
      role: "Co-founder",
      content: "INARA TECH helped us build a robust digital infrastructure from scratch. Their consulting services were invaluable in making the right technology choices. We couldn't have done it without them.",
      rating: 5,
      avatar: "👨‍🚀",
      featured: false
    }
      ]
      setTestimonials(sampleTestimonials)
    }
  }, [])

  // Listen for testimonials updates (when admin adds new ones)
  useEffect(() => {
    const handleStorageChange = () => {
      const savedTestimonials = localStorage.getItem('inaratech_testimonials')
      if (savedTestimonials) {
        setTestimonials(JSON.parse(savedTestimonials))
      }
    }

    window.addEventListener('storage', handleStorageChange)
    return () => window.removeEventListener('storage', handleStorageChange)
  }, [])

  // Filter testimonials based on showAll prop
  const displayTestimonials = showAll ? testimonials : testimonials.slice(0, maxItems)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95,
      rotateX: -10
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    }
  }

  const starVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: (i) => ({
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.3,
        delay: i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      scale: 1.2,
      rotate: 10,
      transition: { duration: 0.2 }
    }
  }

  return (
    <motion.section 
      className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 logo-gradient-background"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={cardVariants}
        >
          <h2 className="font-bold tracking-tight mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl gradient-text">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground font-light tracking-wide max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with INARA TECH.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {displayTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-6 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
              variants={cardVariants}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 3,
                scale: 1.02,
                z: 20,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Quote Icon */}
              <motion.div 
                className="text-primary/20 mb-4"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <Quote size={32} />
              </motion.div>

              {/* Rating */}
              <motion.div 
                className="flex gap-1 mb-4"
                variants={containerVariants}
              >
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    variants={starVariants}
                    whileHover="hover"
                  >
                    <Star 
                      size={16} 
                      className="text-yellow-400 fill-current" 
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Content */}
              <motion.p 
                className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 text-sm md:text-base"
                whileHover={{
                  color: "var(--foreground)",
                  transition: { duration: 0.2 }
                }}
              >
                "{testimonial.content}"
              </motion.p>

              {/* Author */}
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{
                  x: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center text-2xl"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.2 }
                  }}
                >
                  {testimonial.avatar}
                </motion.div>
                <div>
                  <motion.h4 
                    className="font-semibold text-gray-800 dark:text-white"
                    whileHover={{
                      color: "var(--primary)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {testimonial.name}
                  </motion.h4>
                  <motion.p 
                    className="text-sm text-muted-foreground"
                    whileHover={{
                      color: "var(--foreground)",
                      transition: { duration: 0.2 }
                    }}
                  >
                    {testimonial.role}, {testimonial.company}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button (only show if not showing all) */}
        {!showAll && (
          <motion.div 
            className="text-center mt-12"
            variants={cardVariants}
          >
            <motion.a
              href="https://testimonial.to/inara-tech"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
              whileHover={{
                scale: 1.05,
                rotateX: 3,
                rotateY: 2,
                z: 15,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              View All Testimonials
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        )}
      </div>
    </motion.section>
  )
}

export default Testimonials
