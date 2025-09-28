import { motion } from 'framer-motion'
import { MapPin, Calendar, Award, Users, Code, Coffee } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { useState, useEffect } from 'react'

const About = () => {
  const [isMobile, setIsMobile] = useState(false)

  // Check screen size for responsive animations
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const skills = [
    { name: 'Web Development', level: 95, details: 'React, Vue.js, Angular, Node.js, Python, Java' },
    { name: 'AI & Machine Learning', level: 90, details: 'TensorFlow, PyTorch, Scikit-learn, NLP, Computer Vision' },
    { name: 'Cloud Infrastructure', level: 85, details: 'AWS, Azure, GCP, Kubernetes, Docker, Terraform' },
    { name: 'Mobile Development', level: 80, details: 'React Native, Flutter, iOS, Android' },
    { name: 'DevOps & CI/CD', level: 75, details: 'Jenkins, GitHub Actions, ArgoCD, Prometheus, Grafana' }
  ]

  const experiences = [
    {
      title: 'Technology Innovation',
      company: 'INARA TECH',
      period: '2025 - Present',
      description: 'Leading digital transformation initiatives and developing cutting-edge technology solutions for enterprise clients.',
      achievements: [
        'Architected 50+ microservices applications',
        'Implemented AI/ML solutions for Fortune 500 companies',
        'Reduced deployment time by 90% through CI/CD automation'
      ]
    },
    {
      title: 'AI & Machine Learning',
      company: 'INARA TECH',
      period: '2025 - Present',
      description: 'Implementing intelligent automation and data-driven solutions to optimize business processes.',
      achievements: [
        'Built recommendation engines processing 10M+ daily requests',
        'Developed computer vision systems for quality control',
        'Created NLP solutions for automated document processing'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      company: 'INARA TECH',
      period: '2025 - Present',
      description: 'Building scalable cloud infrastructure and DevOps solutions for high-performance applications.',
      achievements: [
        'Migrated 100+ applications to cloud-native architecture',
        'Achieved 99.99% uptime SLA across all client systems',
        'Reduced infrastructure costs by 60% through optimization'
      ]
    }
  ]

  const interests = [
    { icon: Code, title: 'Innovation', description: 'Pioneering new technology solutions' },
    { icon: Coffee, title: 'Collaboration', description: 'Working with industry leaders' },
    { icon: Users, title: 'Client Success', description: 'Ensuring client satisfaction' },
    { icon: Award, title: 'Excellence', description: 'Delivering quality solutions' }
  ]

  // Apple-style 3D animation variants
  const heroVariants = {
    hidden: { 
      opacity: 0,
      y: isMobile ? 30 : 50,
      rotateX: -25,
      rotateY: -10,
      scale: 0.9,
      z: -100
    },
    visible: { 
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      z: 0,
      transition: {
        duration: isMobile ? 1.2 : 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: isMobile ? 60 : 40,
        damping: 12
      }
    },
    hover: {
      rotateX: 5,
      rotateY: 5,
      scale: 1.02,
      z: 20,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const titleVariants = {
    hidden: { 
      opacity: 0,
      x: isMobile ? -30 : -50,
      y: 20,
      scale: 0.8,
      rotateX: -30,
      rotateY: -15,
      z: -50
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      z: 0,
      transition: {
        duration: isMobile ? 1.0 : 1.3,
        delay: isMobile ? 0.2 : 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: isMobile ? 70 : 50,
        damping: 15
      }
    },
    hover: {
      rotateX: 8,
      rotateY: 8,
      scale: 1.05,
      z: 30,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const contentVariants = {
    hidden: { 
      opacity: 0,
      x: isMobile ? 30 : 50,
      y: -20,
      rotateX: 25,
      rotateY: 15,
      scale: 0.9,
      z: -30
    },
    visible: { 
      opacity: 1,
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      z: 0,
      transition: {
        duration: isMobile ? 1.0 : 1.3,
        delay: isMobile ? 0.3 : 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: isMobile ? 70 : 50,
        damping: 15
      }
    },
    hover: {
      rotateX: -5,
      rotateY: -5,
      scale: 1.03,
      z: 25,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }


  // Apple-style 3D card animations
  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 50,
      rotateX: -30,
      rotateY: -20,
      scale: 0.85,
      z: -60
    },
    visible: (i) => ({ 
      opacity: 1,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      z: 0,
      transition: {
        duration: 1.2,
        delay: i * 0.1,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        stiffness: 50,
        damping: 15
      }
    }),
    hover: {
      rotateX: 10,
      rotateY: 10,
      scale: 1.05,
      z: 50,
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  // Floating animation for icons
  const iconVariants = {
    animate: {
      y: [0, -10, 0],
      rotateX: [0, 5, 0],
      rotateY: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }


  const skillVariants = {
    hidden: { 
      opacity: 0,
      x: (i) => i % 2 === 0 ? (isMobile ? -20 : -30) : (isMobile ? 20 : 30)
    },
    visible: (i) => ({ 
      opacity: 1,
      x: 0,
      transition: {
        duration: isMobile ? 0.6 : 0.8,
        delay: i * (isMobile ? 0.1 : 0.15),
        ease: "easeOut",
        type: "spring",
        stiffness: isMobile ? 80 : 60
      }
    })
  }

  const progressVariants = {
    hidden: { width: 0 },
    visible: (level) => ({ 
      width: `${level}%`,
      transition: {
        duration: isMobile ? 1.2 : 1.5,
        delay: 0.3,
        ease: "easeOut"
      }
    })
  }

  return (
    <div className="min-h-screen pt-14">
      {/* Doodle Watermark - About Page */}
      <div className="doodle-watermark-about"></div>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#93c5fd]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              variants={heroVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{ transformStyle: "preserve-3d" }}
            >
              <motion.h1 
                variants={titleVariants}
                whileHover="hover"
                style={{ transformStyle: "preserve-3d" }}
                className={`font-bold mb-6 font-display text-robotic-display dark:text-robotic-glow ${
                  isMobile ? 'text-3xl sm:text-4xl' : 'text-4xl md:text-5xl'
                }`}
              >
                About <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">INARA TECH</span>
              </motion.h1>
              <motion.p 
                className={`text-muted-foreground mb-8 leading-relaxed font-display ${
                  isMobile ? 'text-lg' : 'text-xl'
                }`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                We are a forward-thinking technology company that specializes in innovative digital solutions. 
                Our team combines cutting-edge technology with strategic thinking to deliver transformative 
                results for businesses worldwide.
              </motion.p>
            </motion.div>

            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              style={{ transformStyle: "preserve-3d" }}
              className="relative"
            >
              <div className={`relative mx-auto ${
                isMobile ? 'w-64 h-64' : 'w-80 h-80'
              }`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
                <div className="relative w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                  <div className={`bg-background rounded-full border-4 border-primary/20 flex items-center justify-center overflow-hidden ${
                    isMobile ? 'w-48 h-48' : 'w-64 h-64'
                  }`}>
                    <motion.img 
                      src="/images/Akshay.JPG"
                      alt="Akshay"
                      className={`object-cover rounded-full ${
                        isMobile ? 'w-44 h-44' : 'w-60 h-60'
                      }`}
                      animate={{ 
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ duration: isMobile ? 3 : 4, repeat: Infinity, ease: "easeInOut" }}
                      whileHover={{
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#93c5fd]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
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
              <h3 className={`font-bold mb-6 text-gray-800 dark:text-white ${isMobile ? 'text-2xl' : 'text-2xl md:text-3xl'}`}>
                Our Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                At INARA TECH, we believe in the power of technology to transform ideas into extraordinary digital experiences. Our team of creative professionals combines artistic vision with technical expertise to deliver solutions that not only meet your needs but exceed your expectations.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We specialize in creating immersive digital experiences that engage audiences, build brand loyalty, and drive business growth. From concept to completion, we're committed to delivering excellence in every project.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-2 gap-6"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { number: "50+", label: "Projects Completed", emoji: "🚀" },
                { number: "25+", label: "Happy Clients", emoji: "😊" },
                { number: "5+", label: "Years Experience", emoji: "⭐" },
                { number: "100%", label: "Client Satisfaction", emoji: "💯" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-6 text-center border border-border/30"
                  variants={cardVariants}
                  whileHover={{
                    y: -10,
                    rotateX: 5,
                    rotateY: 3,
                    scale: 1.05,
                    z: 20,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="text-4xl mb-3">
                    {stat.emoji}
                  </div>
                  <div className={`font-bold text-primary mb-2 ${isMobile ? 'text-3xl' : 'text-3xl md:text-4xl'}`}>
                    {stat.number}
                  </div>
                  <div className={`text-gray-600 dark:text-gray-300 ${isMobile ? 'text-sm' : 'text-sm md:text-base'}`}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`font-bold mb-4 ${
              isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl md:text-4xl'
            }`}>Company Information</h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto ${
              isMobile ? 'text-lg' : 'text-xl'
            }`}>
              Learn more about our company background and core values.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: MapPin, label: 'Headquarters', value: 'Dhangadhi, Nepal' },
              { icon: Calendar, label: 'Founded', value: '2025' },
              { icon: Award, label: 'Specialization', value: 'Technology Solutions' }
            ].map((info, index) => (
              <motion.div
                key={info.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300" data-cursor-text={`Learn ${info.label}`}>
                  <CardHeader>
                    <motion.div 
                      className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className={`text-primary ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                    </motion.div>
                    <CardTitle className={`${isMobile ? 'text-base' : 'text-lg'}`}>{info.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>
                      {info.value}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`font-bold mb-4 ${
              isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl md:text-4xl'
            }`}>Core Technologies</h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto ${
              isMobile ? 'text-lg' : 'text-xl'
            }`}>
              Our expertise in cutting-edge technologies and platforms.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                variants={skillVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className={`font-medium ${isMobile ? 'text-sm' : 'text-base'}`}>{skill.name}</span>
                    <span className={`text-muted-foreground ${isMobile ? 'text-xs' : 'text-sm'}`}>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <motion.div
                      custom={skill.level}
                      variants={progressVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      className="bg-primary h-2 rounded-full"
                    />
                  </div>
                  <p className={`text-xs text-muted-foreground mt-2 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    {skill.details}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Achievements */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`font-bold mb-4 ${
              isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl md:text-4xl'
            }`}>Technical Achievements</h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto ${
              isMobile ? 'text-lg' : 'text-xl'
            }`}>
              Milestones and accomplishments that demonstrate our technical excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '500+',
                label: 'Applications Deployed',
                description: 'Successfully deployed and maintained applications across various industries'
              },
              {
                number: '99.9%',
                label: 'Average Uptime',
                description: 'Consistently achieved high availability across all client systems'
              },
              {
                number: '50M+',
                label: 'Daily API Calls',
                description: 'Handling massive scale with microservices architecture'
              },
              {
                number: '24/7',
                label: 'Monitoring',
                description: 'Real-time monitoring and alerting for proactive issue resolution'
              },
              {
                number: '90%',
                label: 'Cost Reduction',
                description: 'Average infrastructure cost savings through optimization'
              },
              {
                number: '100+',
                label: 'Enterprise Clients',
                description: 'Trusted technology partner for leading organizations'
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.label}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300" data-cursor-text={`View ${achievement.label}`}>
                  <CardHeader>
                    <motion.div 
                      className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Award className={`text-primary ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                    </motion.div>
                    <CardTitle className={`text-3xl font-bold text-primary ${isMobile ? 'text-2xl' : 'text-3xl'}`}>
                      {achievement.number}
                    </CardTitle>
                    <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>{achievement.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={isMobile ? 'text-sm' : 'text-base'}>
                      {achievement.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`font-bold mb-4 ${
              isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl md:text-4xl'
            }`}>Our Expertise</h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto ${
              isMobile ? 'text-lg' : 'text-xl'
            }`}>
              Our core areas of expertise and the solutions we provide to our clients.
            </p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="hover:shadow-lg transition-all duration-300" data-cursor-text={`Learn ${exp.title}`}>
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <CardTitle className={`${isMobile ? 'text-lg' : 'text-xl'}`}>{exp.title}</CardTitle>
                        <CardDescription className={`font-medium text-primary ${isMobile ? 'text-sm' : 'text-base'}`}>
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className={`text-muted-foreground mt-2 sm:mt-0 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className={`text-muted-foreground ${isMobile ? 'text-sm' : 'text-base'}`}>{exp.description}</p>
                    <ul className="list-disc list-inside mt-4 text-muted-foreground text-sm">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.6 : 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className={`font-bold mb-4 ${
              isMobile ? 'text-2xl sm:text-3xl' : 'text-3xl md:text-4xl'
            }`}>Our Values</h2>
            <p className={`text-muted-foreground max-w-2xl mx-auto ${
              isMobile ? 'text-lg' : 'text-xl'
            }`}>
              The core values that drive our company culture and success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300" data-cursor-text={`Learn ${interest.title}`}>
                  <CardHeader>
                    <motion.div 
                      className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit image-3d"
                      variants={iconVariants}
                      animate="animate"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 10,
                        rotateX: 360,
                        rotateY: 180,
                        z: 30,
                        transition: { duration: 0.6 }
                      }}
                      style={{ transformStyle: "preserve-3d" }}
                    >
                      <interest.icon className={`text-primary ${isMobile ? 'h-5 w-5' : 'h-6 w-6'}`} />
                    </motion.div>
                    <CardTitle className={isMobile ? 'text-base' : 'text-lg'}>{interest.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className={isMobile ? 'text-sm' : 'text-base'}>{interest.description}</CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
