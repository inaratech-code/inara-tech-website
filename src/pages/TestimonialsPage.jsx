import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { MessageSquare } from 'lucide-react'
import Testimonials from '../components/Testimonials'
import TestimonialForm from '../components/TestimonialForm'

const TestimonialsPage = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [showForm, setShowForm] = useState(false)
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
    }
  }, [])

  // Handle new testimonial added from form
  const handleTestimonialAdded = (updatedTestimonials) => {
    setTestimonials(updatedTestimonials)
    setShowForm(false) // Hide form after submission
  }

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
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
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

      {/* Testimonial Form Toggle */}
      <motion.div 
        className="text-center mb-16"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.button
          onClick={() => setShowForm(!showForm)}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
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
          <MessageSquare className="w-5 h-5" />
          {showForm ? 'Hide Testimonial Form' : 'Share Your Experience'}
        </motion.button>
      </motion.div>

      {/* Testimonial Form */}
      {showForm && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="mb-16"
        >
          <TestimonialForm onTestimonialAdded={handleTestimonialAdded} />
        </motion.div>
      )}

      {/* External Testimonials Buttons */}
      <motion.div 
        className="text-center mb-16 space-y-4"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
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
            View All External Testimonials
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.div>
          </motion.a>
          
          <motion.a
            href="https://testimonial.to/inara-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
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
            Submit New Testimonial
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            >
              →
            </motion.div>
          </motion.a>
        </div>
        
        <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
          We have testimonials both on our website and collected through our external testimonial platform. 
          Choose the option that works best for you!
        </p>
      </motion.div>

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
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center justify-center">
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
