import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from '../context/ThemeContext'
import InaraLogo from './InaraLogo'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()
  const { isDark } = useTheme()

  // Check screen size for responsive animations
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]

  // Responsive animation variants
  const navVariants = {
    hidden: { 
      y: isMobile ? -50 : -100,
      opacity: 0
    },
    visible: { 
      y: 0,
      opacity: 1,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: isMobile ? 100 : 80,
        damping: isMobile ? 15 : 20
      }
    }
  }

  const logoVariants = {
    hidden: { 
      scale: 0.9,
      opacity: 0,
      x: -20,
      rotateX: -8
    },
    visible: { 
      scale: 1,
      opacity: 1,
      x: 0,
      rotateX: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        type: "spring",
        stiffness: 150
      }
    },
    hover: {
      scale: isMobile ? 1.01 : 1.02,
      rotateX: 3,
      rotateY: 3,
      transition: { duration: 0.15, ease: "easeOut" }
    }
  }

  const navItemVariants = {
    hidden: { 
      opacity: 0,
      y: isMobile ? 20 : 30,
      rotateX: -10
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.1,
        ease: "easeOut"
      }
    }),
    hover: {
      y: isMobile ? -2 : -3,
      scale: 1.05,
      rotateX: 5,
      rotateY: 5,
      transition: { duration: 0.2 }
    }
  }

  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: -20
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    },
    exit: { 
      opacity: 0,
      scale: 0.95,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn"
      }
    }
  }

  const mobileItemVariants = {
    hidden: { 
      opacity: 0,
      y: 30,
      scale: 0.9
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: "easeOut",
        type: "spring",
        stiffness: 80
      }
    })
  }

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-background/90 backdrop-blur-md border-b border-border/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div
                variants={logoVariants}
                whileHover="hover"
                className="flex items-center"
              >
                <InaraLogo size="default" />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-12">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  variants={navItemVariants}
                  whileHover="hover"
                >
                  <Link
                    to={item.path}
                    className={`relative text-base font-semibold tracking-wide transition-all duration-300 hover:text-primary px-4 py-2 rounded-lg hover:bg-primary/5 font-robotic ${
                      location.pathname === item.path ? 'text-primary bg-primary/10' : 'text-foreground/80'
                    }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-1 left-0 right-0 h-1 bg-primary rounded-full"
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
              
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-4">
              
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(!isOpen)}
                  className="text-foreground/80 hover:text-primary transition-colors duration-300"
                >
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                  </motion.div>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-md"
          >
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-8">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    custom={index}
                    variants={mobileItemVariants}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-4xl md:text-6xl font-bold tracking-wider transition-all duration-300 hover:text-primary px-6 py-4 rounded-xl hover:bg-primary/5 ${
                        location.pathname === item.path
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/80'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
