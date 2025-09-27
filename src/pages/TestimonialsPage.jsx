import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Testimonials from '../components/Testimonials'

const TestimonialsPage = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const pageVariants = {
    hidden: { 
      opacity: 0, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 1.0,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Page Header */}
      <motion.section 
        className="py-16 md:py-24 px-4 md:px-6 lg:px-8 logo-gradient-background"
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            variants={titleVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <h1 className="font-bold tracking-tight mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl gradient-text">
              Client Testimonials
            </h1>
            <p className="text-muted-foreground font-light tracking-wide max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl">
              Discover why businesses choose INARA TECH for their digital transformation needs. 
              Read real testimonials from our satisfied clients who have experienced exceptional results.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* All Testimonials */}
      <Testimonials showAll={true} />

      {/* Call to Action */}
      <motion.section 
        className="py-16 md:py-24 px-4 md:px-6 lg:px-8 logo-gradient-background"
        variants={pageVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-border/30"
            whileHover={{
              y: -5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <h2 className="font-bold tracking-tight mb-6 text-3xl sm:text-4xl md:text-5xl gradient-text">
              Ready to Join Our Success Stories?
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-8 text-lg md:text-xl">
              Let's work together to create your own success story. Our team is ready to help you achieve 
              exceptional digital results just like our satisfied clients.
            </p>
            <motion.div
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
            >
              <a
                href="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg"
              >
                Start Your Project Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default TestimonialsPage
