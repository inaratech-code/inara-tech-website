import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '../components/ui/button'
import { useState, useEffect } from 'react'
import Testimonials from '../components/Testimonials'

const Home = () => {
  const [isMobile, setIsMobile] = useState(false)
  
  // Enhanced scroll-based animations
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1.1])
  
  // Spring animations for smooth effects
  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const springOpacity = useSpring(opacity, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const springScale = useSpring(scale, { stiffness: 100, damping: 30, restDelta: 0.001 })

  // Screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Apple-style 3D animation variants
  const heroVariants = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      rotateX: -15, 
      rotateY: -5, 
      scale: 0.95,
      z: -50
    },
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
        stiffness: 40,
        damping: 12
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.9, 
      rotateX: -20, 
      rotateY: -10,
      z: -30
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0,
      z: 0,
      transition: { 
        duration: 1.0, 
        delay: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.95, 
      rotateX: 15, 
      rotateY: 8,
      z: -20
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0,
      z: 0,
      transition: { 
        duration: 1.0, 
        delay: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40, 
      rotateX: -20, 
      rotateY: -10, 
      scale: 0.9,
      z: -40
    },
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

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      y: 30, 
      scale: 0.9, 
      rotateX: -10, 
      rotateY: -5,
      z: -20
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      rotateX: 0, 
      rotateY: 0,
      z: 0,
      transition: { 
        duration: 1.0, 
        delay: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 70,
        damping: 25
      }
    }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  return (
    <div className="min-h-screen pt-14 overflow-hidden relative">
      {/* Animated Background with Scroll Effects */}
      <motion.div 
        className="background" 
        style={{ 
          y: springY,
          opacity: springOpacity,
          scale: springScale
        }}
      />
      
      {/* Dynamic Color Overlay */}
      <motion.div 
        className="overlay"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.3, 0.6, 1],
            [
              'linear-gradient(135deg, rgba(30, 58, 138, 0.1) 0%, rgba(59, 130, 246, 0.05) 50%, rgba(147, 197, 253, 0.1) 100%)',
              'linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(59, 130, 246, 0.1) 50%, rgba(147, 197, 253, 0.2) 100%)',
              'linear-gradient(135deg, rgba(30, 58, 138, 0.3) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(147, 197, 253, 0.3) 100%)',
              'linear-gradient(135deg, rgba(30, 58, 138, 0.4) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(147, 197, 253, 0.4) 100%)'
            ]
          )
        }}
      />
      
      {/* Floating Color Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Hero Section with Enhanced 3D Effects */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center flex flex-col items-center justify-center">
          <motion.div 
            className="space-y-8"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            whileHover={{
              rotateX: 2,
              rotateY: 2,
              scale: 1.01,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div 
              className="mb-6"
              variants={contentVariants}
              whileHover={{
                rotateX: 5,
                rotateY: 3,
                scale: 1.02,
                z: 20,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h2 className="text-primary/60 font-light text-base md:text-lg lg:text-xl mb-3">
                CREATIVE AGENCY OF THE FUTURE
              </h2>
            </motion.div>
            
            <motion.h1 
              className="font-bold tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl gradient-text"
              variants={titleVariants}
              whileHover={{
                rotateX: 8,
                rotateY: 5,
                scale: 1.05,
                z: 30,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              ILLUMINATING
              <br />
              IDEAS WITH
              <br />
              TECHNOLOGY
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground font-light leading-relaxed max-w-3xl mx-auto text-base sm:text-lg md:text-xl lg:text-2xl"
              variants={contentVariants}
              whileHover={{
                rotateX: -3,
                rotateY: -2,
                scale: 1.02,
                z: 15,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              We craft extraordinary digital experiences that push boundaries, blend cutting-edge technology with artistic vision, and shape the future of creative expression.
            </motion.p>
            
          </motion.div>
        </div>
      </section>

      {/* 3D Image Gallery Section */}
      <section id="featured-work" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 logo-gradient-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateX: 5,
              rotateY: 3,
              scale: 1.02,
              z: 20,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="font-bold tracking-tight mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text">
              Our Creative Vision
            </h2>
            <p className="text-muted-foreground font-light tracking-wide max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl">
              Explore our portfolio through immersive 3D experiences that showcase our innovative approach to digital creativity.
            </p>
          </motion.div>

          {/* 3D Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                title: "Digital Artistry",
                description: "Pushing the boundaries of visual storytelling through cutting-edge design and technology.",
                icon: "🎨",
                color: "from-purple-500 to-pink-500"
              },
              {
                title: "Interactive Experiences",
                description: "Creating immersive digital environments that engage and captivate audiences.",
                icon: "🚀",
                color: "from-blue-500 to-cyan-500"
              },
              {
                title: "Brand Innovation",
                description: "Transforming brands through innovative digital strategies and creative solutions.",
                icon: "💡",
                color: "from-green-500 to-emerald-500"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="gallery-item"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{
                  y: -20,
                  rotateX: 10,
                  rotateY: 5,
                  scale: 1.05,
                  z: 40,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="image-card-3d bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl overflow-hidden border border-border/30 hover:border-primary/50 transition-all duration-300 p-8 h-full">
                  <motion.div 
                    className="image-reflection mb-6"
                    whileHover={{
                      rotateX: 15,
                      rotateY: 10,
                      scale: 1.1,
                      z: 20,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-4xl image-3d`}>
                      {item.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 logo-gradient-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateX: 5,
              rotateY: 3,
              scale: 1.02,
              z: 20,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="font-bold tracking-tight mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text">
              Our Services
            </h2>
            <p className="text-muted-foreground font-light tracking-wide max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl">
              Comprehensive digital solutions that transform your vision into reality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Web Development",
                description: "Custom websites and web applications built with modern technologies and best practices.",
                icon: "🌐"
              },
              {
                title: "UI/UX Design",
                description: "User-centered design solutions that create engaging and intuitive digital experiences.",
                icon: "🎨"
              },
              {
                title: "Brand Identity",
                description: "Complete brand identity packages that establish your unique presence in the market.",
                icon: "🏷️"
              },
              {
                title: "Digital Marketing",
                description: "Strategic digital marketing campaigns that drive growth and engagement.",
                icon: "📈"
              },
              {
                title: "Mobile Apps",
                description: "Native and cross-platform mobile applications for iOS and Android devices.",
                icon: "📱"
              },
              {
                title: "Consulting",
                description: "Expert guidance on digital strategy, technology choices, and business optimization.",
                icon: "💼"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-8 border border-border/30 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{
                  y: -15,
                  rotateX: 8,
                  rotateY: 5,
                  scale: 1.03,
                  z: 30,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div 
                  className="text-4xl mb-4"
                  whileHover={{
                    rotateX: 10,
                    rotateY: 5,
                    scale: 1.2,
                    z: 15,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Testimonials Section */}
      <Testimonials maxItems={3} />

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 lg:py-32 px-4 md:px-6 lg:px-8 logo-gradient-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-20"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{
              rotateX: 5,
              rotateY: 3,
              scale: 1.02,
              z: 20,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2 className="font-bold tracking-tight mb-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl gradient-text">
              Get In Touch
            </h2>
            <p className="text-muted-foreground font-light tracking-wide max-w-4xl mx-auto text-lg sm:text-xl md:text-2xl">
              Ready to bring your vision to life? Let's create something extraordinary together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              variants={contentVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                rotateX: 3,
                rotateY: 2,
                scale: 1.01,
                z: 15,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                We're always excited to work on new projects and help bring innovative ideas to life. Get in touch with us to discuss your vision and how we can help make it a reality.
              </p>
              
              <div className="space-y-4">
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{
                      rotateX: 10,
                      rotateY: 5,
                      scale: 1.1,
                      z: 10,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="text-primary text-xl">📞</span>
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Phone</div>
                    <div className="text-gray-600 dark:text-gray-300">+977-9864320452</div>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-center gap-4"
                  whileHover={{
                    x: 10,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  <motion.div 
                    className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center"
                    whileHover={{
                      rotateX: 10,
                      rotateY: 5,
                      scale: 1.1,
                      z: 10,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    <span className="text-primary text-xl">📍</span>
                  </motion.div>
                  <div>
                    <div className="font-semibold text-gray-800 dark:text-white">Location</div>
                    <div className="text-gray-600 dark:text-gray-300">Dhangadhi, Kailali, Nepal</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 3,
                scale: 1.02,
                z: 25,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-8 border border-border/30">
                <h4 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
                  Ready to Get Started?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Contact us today to discuss your project and learn how we can help bring your vision to life.
                </p>
                <motion.div
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
                  <Button 
                    asChild 
                    size="lg"
                    className="w-full bg-gradient-to-r from-[#1e3a8a] to-[#3b82f6] hover:from-[#1e40af] hover:to-[#2563eb] transition-all duration-300"
                  >
                    <Link to="/contact" className="flex items-center justify-center gap-3">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
