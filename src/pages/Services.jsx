import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Code, 
  Palette, 
  Smartphone, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users,
  Activity,
  ArrowRight,
  CheckCircle
} from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import InaraLogo from '../components/InaraLogo'

const Services = () => {
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

  const services = [
    {
      icon: Code,
      title: 'Enterprise Web Applications',
      description: 'Scalable web solutions built with modern technologies for enterprise-level businesses.',
      features: ['Microservices Architecture', 'High Performance', 'Scalable Infrastructure', 'Enterprise Security'],
      price: 'Custom Quote'
    },
    {
      icon: Palette,
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and data-driven solutions to optimize business processes.',
      features: ['Predictive Analytics', 'Process Automation', 'Data Mining', 'Custom AI Models'],
      price: 'Custom Quote'
    },
    {
      icon: Smartphone,
      title: 'Digital Transformation',
      description: 'End-to-end digital transformation solutions for modern businesses.',
      features: ['Legacy System Migration', 'Process Optimization', 'Digital Strategy', 'Change Management'],
      price: 'Custom Quote'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Robust cloud solutions and DevOps services for optimal performance and scalability.',
      features: ['Multi-cloud Strategy', 'DevOps Automation', 'Infrastructure as Code', '24/7 Monitoring'],
      price: 'Custom Quote'
    },
    {
      icon: Users,
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies to drive growth and engagement.',
      features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
      price: 'Custom Quote'
    },
    {
      icon: Activity,
      title: 'Performance Monitoring',
      description: 'Advanced monitoring and analytics solutions to track, analyze, and optimize your digital performance.',
      features: ['Real-time Monitoring', 'Performance Analytics', 'Alert Systems', 'Custom Dashboards'],
      price: 'Custom Quote'
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your requirements and creating a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Prototyping',
      description: 'Creating wireframes and prototypes to visualize the final product.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Building your solution with clean, maintainable code and best practices.'
    },
    {
      step: '04',
      title: 'Testing & Launch',
      description: 'Thorough testing and deployment to ensure everything works perfectly.'
    }
  ]

  return (
    <div className="min-h-screen pt-14">
      {/* Doodle Watermark - Services Page */}
      <div className="doodle-watermark-services"></div>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#93c5fd]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
              initial={{ 
                opacity: 0, 
                y: -50, 
                rotateX: -30,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1
              }}
              transition={{ 
                duration: 1.2, 
                delay: 0.2,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              whileHover={{
                rotateX: 15,
                rotateY: 10,
                scale: 1.08,
                z: 40,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Our <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Solutions</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8"
              initial={{ 
                opacity: 0, 
                x: -100, 
                rotateY: -45,
                scale: 0.9
              }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                scale: 1
              }}
              transition={{ 
                duration: 1.0, 
                delay: 0.5,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              whileHover={{
                rotateX: -8,
                rotateY: -12,
                scale: 1.05,
                z: 30,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Enterprise-grade technology solutions designed to drive digital transformation and business growth. 
              From AI integration to cloud infrastructure, we deliver innovative solutions that scale.
            </motion.p>
            <motion.div
              initial={{ 
                opacity: 0, 
                y: 50, 
                rotateX: 30,
                scale: 0.7
              }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1
              }}
              transition={{ 
                duration: 1.1, 
                delay: 0.8,
                type: "spring",
                stiffness: 120,
                damping: 18
              }}
              whileHover={{
                rotateX: 5,
                rotateY: 8,
                scale: 1.1,
                z: 35,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{
                scale: 0.95,
                rotateX: -5,
                transition: { duration: 0.1 }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Button asChild size="lg" className="flex items-center mx-auto" data-cursor-text="Get Started">
                <Link to="/contact" className="flex items-center">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
            whileHover={{
              rotateX: 5,
              rotateY: 5,
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enterprise Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions designed for enterprise-level businesses and digital transformation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group" data-cursor-text={`Learn ${service.title}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors image-3d">
                        <motion.div
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
                        <service.icon className="h-8 w-8 text-primary" />
                        </motion.div>
                      </div>
                      <span className="text-sm font-medium text-primary">{service.price}</span>
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-muted-foreground">
                          <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/30 to-pink-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ 
                opacity: 0, 
                y: -40, 
                rotateX: -20,
                scale: 0.9
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1
              }}
              transition={{ 
                duration: 1.0, 
                delay: 0.1,
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: 10,
                rotateY: 5,
                scale: 1.05,
                z: 30,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Process</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ 
                opacity: 0, 
                x: -60, 
                rotateY: -30,
                scale: 0.95
              }}
              whileInView={{ 
                opacity: 1, 
                x: 0, 
                rotateY: 0,
                scale: 1
              }}
              transition={{ 
                duration: 0.9, 
                delay: 0.3,
                type: "spring",
                stiffness: 80,
                damping: 12
              }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: -5,
                rotateY: -8,
                scale: 1.03,
                z: 25,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              A proven methodology that ensures successful project delivery every time.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              // Different animation styles for each card
              const cardAnimations = [
                {
                  initial: { opacity: 0, x: -50, rotateY: -25, scale: 0.8 },
                  animate: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
                  hover: { rotateX: 8, rotateY: 5, scale: 1.05, z: 30 }
                },
                {
                  initial: { opacity: 0, y: 50, rotateX: 25, scale: 0.8 },
                  animate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
                  hover: { rotateX: -8, rotateY: -5, scale: 1.05, z: 30 }
                },
                {
                  initial: { opacity: 0, x: 50, rotateY: 25, scale: 0.8 },
                  animate: { opacity: 1, x: 0, rotateY: 0, scale: 1 },
                  hover: { rotateX: 5, rotateY: 8, scale: 1.05, z: 30 }
                },
                {
                  initial: { opacity: 0, y: -50, rotateX: -25, scale: 0.8 },
                  animate: { opacity: 1, y: 0, rotateX: 0, scale: 1 },
                  hover: { rotateX: -5, rotateY: -8, scale: 1.05, z: 30 }
                }
              ];

              const animation = cardAnimations[index];

              return (
                <motion.div
                  key={step.step}
                  initial={animation.initial}
                  whileInView={animation.animate}
                  transition={{ 
                    duration: 1.0, 
                    delay: 0.5 + (index * 0.15),
                    type: "spring",
                    stiffness: 80,
                    damping: 12
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    ...animation.hover,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative"
                >
                  <Card className="text-center hover:shadow-2xl transition-all duration-300 border-2 hover:border-transparent bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 hover:from-blue-100/50 hover:via-purple-100/50 hover:to-pink-100/50" data-cursor-text={`Learn ${step.title}`}>
                    <CardHeader>
                      <motion.div 
                        className={`mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center ${
                          index === 0 ? 'bg-gradient-to-br from-blue-400 to-blue-600' :
                          index === 1 ? 'bg-gradient-to-br from-purple-400 to-purple-600' :
                          index === 2 ? 'bg-gradient-to-br from-green-400 to-green-600' :
                          'bg-gradient-to-br from-pink-400 to-pink-600'
                        } shadow-lg`}
                        whileHover={{
                          scale: 1.15,
                          rotate: 360,
                          transition: { duration: 0.6, ease: "easeOut" }
                        }}
                      >
                        <span className="text-2xl font-bold text-white drop-shadow-sm">{step.step}</span>
                      </motion.div>
                      <CardTitle className={`text-lg font-semibold ${
                        index === 0 ? 'text-blue-700' :
                        index === 1 ? 'text-purple-700' :
                        index === 2 ? 'text-green-700' :
                        'text-pink-700'
                      }`}>{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm leading-relaxed text-gray-600">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                  
                  {/* Enhanced connector line with arrow */}
                  {index < process.length - 1 && (
                    <motion.div 
                      className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2"
                      initial={{ scaleX: 0, opacity: 0 }}
                      whileInView={{ scaleX: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.8, 
                        delay: 0.8 + (index * 0.15),
                        ease: "easeOut"
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex items-center">
                        <div className="w-6 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full shadow-lg"></div>
                        <motion.div
                          className="w-0 h-0 border-l-[8px] border-l-pink-500 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent ml-1 drop-shadow-sm"
                          animate={{
                            x: [0, 3, 0],
                            scale: [1, 1.1, 1],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Why Choose INARA TECH?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Zap,
                    title: 'Innovation Leadership',
                    description: 'Pioneering new technologies and approaches to solve complex business challenges.'
                  },
                  {
                    icon: Users,
                    title: 'Expert Team',
                    description: 'Senior-level consultants and engineers with deep industry expertise.'
                  },
                  {
                    icon: Shield,
                    title: 'Enterprise Security',
                    description: 'Bank-grade security and compliance standards for enterprise clients.'
                  },
                  {
                    icon: CheckCircle,
                    title: 'Strategic Partnership',
                    description: 'Long-term partnership approach with ongoing support and optimization.'
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="p-2 bg-primary/10 rounded-full">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

                                      <motion.div
               initial={{ opacity: 0, x: 50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.8 }}
               viewport={{ once: true }}
               className="relative"
             >
               <div className="relative w-full h-96 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
                 <InaraLogo size="xl" />
                 <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl" />
               </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Case Studies */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Case Studies</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Real-world implementations showcasing our technical expertise and innovative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {[
              {
                title: "AI-Powered E-commerce Platform",
                industry: "Retail & E-commerce",
                challenge: "Legacy system struggling with 10M+ daily transactions and poor recommendation accuracy",
                solution: "Built microservices architecture with ML-powered recommendation engine using TensorFlow and Redis",
                results: [
                  "300% increase in recommendation accuracy",
                  "50% reduction in page load times",
                  "99.9% uptime with auto-scaling",
                  "Real-time personalization for 2M+ users"
                ],
                tech: ["React", "Node.js", "TensorFlow", "Redis", "Kubernetes", "AWS"]
              },
              {
                title: "Cloud-Native Banking System",
                industry: "Financial Services",
                challenge: "Monolithic banking application with 6-hour deployment cycles and security vulnerabilities",
                solution: "Migrated to containerized microservices with zero-trust security and automated compliance",
                results: [
                  "5-minute deployment cycles",
                  "Zero security incidents in 18 months",
                  "99.99% availability SLA achieved",
                  "50% reduction in infrastructure costs"
                ],
                tech: ["Java", "Spring Boot", "Docker", "Kubernetes", "Istio", "Prometheus"]
              }
            ].map((caseStudy, index) => (
              <motion.div
                key={caseStudy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300" data-cursor-text={`View ${caseStudy.title}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {caseStudy.industry}
                      </span>
                    </div>
                    <CardTitle className="text-2xl mb-4">{caseStudy.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Challenge</h4>
                      <p className="text-muted-foreground">{caseStudy.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Solution</h4>
                      <p className="text-muted-foreground">{caseStudy.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Results</h4>
                      <ul className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-muted text-sm rounded-full border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#93c5fd]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
              Let's discuss how our technology solutions can drive your business forward and accelerate growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Highlighted Get Quote Button */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
                className="relative"
              >
                {/* Glowing background effect */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(59, 130, 246, 0.3)",
                      "0 0 40px rgba(59, 130, 246, 0.5)",
                      "0 0 20px rgba(59, 130, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-lg blur-sm"
                />
                
                {/* Pulsing ring effect */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 rounded-lg border-2 border-primary/50"
                />
                
                <Button
                  size="lg"
                  className="relative text-lg px-8 py-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 font-bold"
                  data-cursor-text="Get Quote"
                >
                  <Link to="/contact" className="flex items-center">
                    <span className="text-white font-bold drop-shadow-sm">
                      Get Free Quote
                    </span>
                    <motion.div
                      animate={{
                        x: [0, 5, 0],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="ml-2"
                    >
                      <ArrowRight className="h-5 w-5 text-white" />
                    </motion.div>
                  </Link>
                </Button>
                
                {/* Sparkle effect */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-80"
                />
                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -bottom-1 -left-1 w-3 h-3 bg-yellow-300 rounded-full opacity-60"
                />
              </motion.div>
              
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                data-cursor-text="Schedule Call"
              >
                <Link to="/contact" className="flex items-center">
                  Schedule Call
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services
