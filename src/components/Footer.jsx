import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, MessageCircle, Eye } from 'lucide-react'
import { useState, useEffect } from 'react'

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [siteViews, setSiteViews] = useState(0)
  const currentYear = new Date().getFullYear()

  // Check screen size for responsive animations
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Site view counter - counts every page load
  useEffect(() => {
    const trackSiteView = () => {
      const viewKey = 'site_total_views'
      
      // Get current views
      const currentViews = parseInt(localStorage.getItem(viewKey) || '0')
      
      // Increment on every page load
      const newViews = currentViews + 1
      localStorage.setItem(viewKey, newViews.toString())
      setSiteViews(newViews)
    }

    trackSiteView()
  }, [])

  const socialLinks = [
    { icon: Github, href: 'https://github.com/inaratech-code', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/inara-tech/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:inaratech2025@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/9779864320452', label: 'WhatsApp' },
  ]

  // Responsive animation variants
  const footerVariants = {
    hidden: { 
      opacity: 0,
      y: isMobile ? 30 : 50
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: isMobile ? 80 : 60
      }
    }
  }

  const brandVariants = {
    hidden: { 
      opacity: 0,
      x: -20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      scale: isMobile ? 1.02 : 1.05,
      transition: { duration: 0.3 }
    }
  }

  const socialVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.9
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    }),
    hover: {
      scale: isMobile ? 1.05 : 1.1,
      y: isMobile ? -1 : -2,
      transition: { duration: 0.2 }
    },
    tap: {
      scale: 0.95,
      transition: { duration: 0.1 }
    }
  }

  const linkVariants = {
    hidden: { 
      opacity: 0,
      x: -10
    },
    visible: (i) => ({ 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: i * 0.05,
        ease: "easeOut"
      }
    }),
    hover: {
      x: isMobile ? 3 : 5,
      transition: { duration: 0.2 }
    }
  }

  const heartVariants = {
    animate: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <motion.footer 
      className="bg-muted/50 border-t border-border"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block">
              <motion.div
                variants={brandVariants}
                whileHover="hover"
                className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent mb-4"
              >
                INARA TECH
              </motion.div>
            </Link>
            <motion.p 
              className="text-muted-foreground mb-2 max-w-md"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Empowering businesses with innovative technology solutions. 
              Driving digital transformation and accelerating growth through cutting-edge technology.
            </motion.p>
            <motion.p 
              className="text-primary/70 font-light tracking-wide mb-6 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Illuminating ideas with technology.
            </motion.p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  custom={index}
                  variants={socialVariants}
                  whileHover="hover"
                  whileTap="tap"
                  className="p-2 rounded-full bg-background border border-border hover:border-primary transition-colors"
                >
                  <social.icon 
                    size={isMobile ? 18 : 20} 
                    className="text-muted-foreground hover:text-primary transition-colors" 
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.h3 
              className="font-semibold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Blog', path: '/blog' },
                { name: 'Testimonials', path: '/testimonials' },
                { name: 'Contact', path: '/contact' }
              ].map((item, index) => (
                <motion.li 
                  key={item.name}
                  custom={index}
                  variants={linkVariants}
                  whileHover="hover"
                >
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <motion.h3 
              className="font-semibold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Contact
            </motion.h3>
            <motion.ul 
              className="space-y-2 text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <li>inaratech2025@gmail.com</li>
              <li>+977-9864320452</li>
              <li>Dhangadhi, Kailali, Nepal</li>
            </motion.ul>
          </div>
        </div>

        {/* Bottom */}
        <motion.div 
          className="border-t border-border mt-8 pt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} INARA TECH. All rights reserved.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Site Views Counter */}
              <motion.div 
                className="flex items-center gap-2 text-sm text-muted-foreground"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Eye size={isMobile ? 14 : 16} className="text-primary" />
                <span className="font-medium">{siteViews.toLocaleString()} visits</span>
                {/* Reset button for testing (only visible in development) */}
                {process.env.NODE_ENV === 'development' && (
                  <button
                    onClick={() => {
                      localStorage.removeItem('site_total_views')
                      setSiteViews(0)
                    }}
                    className="ml-2 text-xs text-red-500 hover:text-red-700 underline"
                    title="Reset counter (dev only)"
                  >
                    Reset
                  </button>
                )}
                {/* Reset button for production */}
                <button
                  onClick={() => {
                    localStorage.removeItem('site_total_views')
                    setSiteViews(0)
                  }}
                  className="ml-2 text-xs text-blue-500 hover:text-blue-700 underline"
                  title="Reset site visit counter"
                >
                  Reset Visits
                </button>
              </motion.div>

              {/* Credit */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <motion.a
                  href="/admin"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Manage Testimonials
                </motion.a>
                <motion.p 
                  className="text-sm text-muted-foreground flex items-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  Crafted with 
                  <motion.div
                    variants={heartVariants}
                    animate="animate"
                    className="mx-1"
                  >
                    <Heart size={isMobile ? 14 : 16} className="text-red-500" />
                  </motion.div>
                  by Akshay Mohpal
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer
