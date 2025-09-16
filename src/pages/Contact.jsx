import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [canReset, setCanReset] = useState(false)
  const [timeLeft, setTimeLeft] = useState(15)

  // Timer effect for success message
  useEffect(() => {
    if (isSubmitted) {
      setCanReset(false)
      setTimeLeft(15)
      
      const timer = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            setCanReset(true)
            clearInterval(timer)
            return 0
          }
          return prev - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isSubmitted])

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'inaratech2025@gmail.com',
      href: 'mailto:inaratech2025@gmail.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+977-9864320452',
      href: 'tel:+9779864320452'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+977-9864320452',
      href: 'https://wa.me/9779864320452'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      value: 'Dhangadhi, Kailali, Nepal',
      href: '#'
    }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/inaratech-code', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/inara-tech/', label: 'LinkedIn' }
  ]

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    console.log('Form submitted with data:', formData)
    
    if (!validateForm()) {
      console.log('Form validation failed:', errors)
      return
    }

    console.log('Form validation passed, submitting...')
    setIsSubmitting(true)

    try {
      // Using Formspree for reliable form handling
      const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xeolwloo' // Your Formspree form ID
      
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          // Form fields with proper labels
          'Name': formData.name,
          'Email': formData.email,
          'Subject': formData.subject,
          'Phone Number': formData.phone || 'Not provided',
          'Message': formData.message,
          
          // Formspree special fields
          '_replyto': formData.email,
          '_subject': `New Contact Form Submission: ${formData.subject}`,
          '_next': window.location.href, // Redirect back to contact page after submission
          
          // Additional context
          'Form Source': 'INARA TECH Website Contact Form',
          'Submission Time': new Date().toLocaleString(),
          'User Agent': navigator.userAgent
        })
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      console.log('Form submitted successfully to Formspree')

    setIsSubmitting(false)
    setIsSubmitted(true)
      setFormData({ name: '', email: '', subject: '', phone: '', message: '' })
    setErrors({})

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000)

    } catch (error) {
      console.error('Form submission error:', error)
      setIsSubmitting(false)
      // You can add error handling here
    }
  }

  // Function to send email notification
  const sendEmailNotification = async (data) => {
    try {
      // Using EmailJS or similar service
      // This is optional - Google Forms will already send you notifications
      console.log('Email notification would be sent:', data)
    } catch (error) {
      console.error('Email notification error:', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <div className="min-h-screen pt-14">
      {/* Doodle Watermark - Contact Page */}
      <div className="doodle-watermark-contact"></div>
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#1e3a8a]/5 via-background to-[#93c5fd]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: -25, rotateY: -10, scale: 0.9, z: -100 }}
            animate={{ opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1, z: 0 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.25, 0.46, 0.45, 0.94],
              type: "spring",
              stiffness: 40,
              damping: 12
            }}
            whileHover={{
              rotateX: 8,
              rotateY: 8,
              scale: 1.05,
              z: 30,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white"
              initial={{ opacity: 0, y: 20, scale: 0.8, rotateX: -30, rotateY: -15, z: -50 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
              transition={{ 
                duration: 1.3, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
              whileHover={{
                rotateX: 8,
                rotateY: 8,
                scale: 1.05,
                z: 30,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Get in <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">Touch</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto mb-8"
              initial={{ opacity: 0, y: 20, scale: 0.9, rotateX: 25, rotateY: 15, z: -30 }}
              animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0, rotateY: 0, z: 0 }}
              transition={{ 
                duration: 1.3, 
                delay: 0.4,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
              whileHover={{
                rotateX: -5,
                rotateY: -5,
                scale: 1.03,
                z: 25,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              Ready to transform your business with innovative technology solutions? Let's discuss how INARA TECH can help drive your digital transformation and accelerate growth.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.2,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 60,
                damping: 20
              }}
              whileHover={{
                y: -8,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Send a Message</CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300">
                    Fill out the form below and our team will get back to you within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5, y: 50 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1, 
                        y: 0,
                        transition: {
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                          duration: 0.8
                        }
                      }}
                      className="text-center py-12"
                    >
                      {/* Success Icon with Animation */}
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ 
                          scale: 1, 
                          rotate: 0,
                          transition: {
                            type: "spring",
                            stiffness: 300,
                            damping: 15,
                            delay: 0.2
                          }
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotate: 5,
                          transition: { duration: 0.3 }
                        }}
                        className="relative mb-6"
                      >
                        <motion.div
                          animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                          className="absolute inset-0 bg-green-500/20 rounded-full blur-xl"
                        />
                        <CheckCircle className="h-20 w-20 text-green-500 mx-auto relative z-10" />
                      </motion.div>

                      {/* Success Message with Staggered Animation */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: 1, 
                          y: 0,
                          transition: { delay: 0.5, duration: 0.6 }
                        }}
                      >
                        <motion.h3 
                          className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.7, duration: 0.5 }
                          }}
                        >
                          Message Sent Successfully! 🎉
                        </motion.h3>
                        
                        <motion.p 
                          className="text-muted-foreground text-lg mb-6"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 0.9, duration: 0.5 }
                          }}
                        >
                          Thank you for reaching out! Our team will get back to you within 24 hours.
                        </motion.p>

                        {/* Animated Success Details */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 1.1, duration: 0.5 }
                          }}
                          className="space-y-2 text-sm text-muted-foreground"
                        >
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: 1.3, duration: 0.4 }
                            }}
                            className="flex items-center justify-center gap-2"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>Email notification sent</span>
                          </motion.div>
                          
                          <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ 
                              opacity: 1, 
                              x: 0,
                              transition: { delay: 1.5, duration: 0.4 }
                            }}
                            className="flex items-center justify-center gap-2"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span>Response within 24 hours</span>
                          </motion.div>
                        </motion.div>

                        {/* Reset Button with Countdown */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: 1, 
                            y: 0,
                            transition: { delay: 1.7, duration: 0.5 }
                          }}
                          className="mt-8"
                        >
                          <Button
                            onClick={() => {
                              setIsSubmitted(false)
                              setFormData({ name: '', email: '', subject: '', phone: '', message: '' })
                              setErrors({})
                              setCanReset(false)
                              setTimeLeft(15)
                            }}
                            disabled={!canReset}
                            variant="outline"
                            className={`transition-all duration-300 ${
                              canReset 
                                ? 'hover:bg-green-50 hover:border-green-300 hover:text-green-700 cursor-pointer' 
                                : 'opacity-50 cursor-not-allowed'
                            }`}
                          >
                            {canReset ? (
                              'Send Another Message'
                            ) : (
                              <div className="flex items-center gap-2">
                                <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                <span>Please wait {timeLeft}s to send another message</span>
                              </div>
                            )}
                          </Button>
                          
                          {!canReset && (
                            <motion.p
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 2, duration: 0.5 }}
                              className="text-xs text-muted-foreground mt-2"
                            >
                              This ensures your message was properly received
                            </motion.p>
                          )}
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleChange}
                            className={errors.name ? 'border-red-500' : ''}
                            placeholder="Your name"
                          />
                          {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                          )}
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={errors.email ? 'border-red-500' : ''}
                            placeholder="your@email.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleChange}
                          className={errors.subject ? 'border-red-500' : ''}
                          placeholder="What's this about?"
                        />
                        {errors.subject && (
                          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className={errors.phone ? 'border-red-500' : ''}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                        )}
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Message *
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          className={errors.message ? 'border-red-500' : ''}
                          placeholder="Tell us about your business needs and technology requirements..."
                          rows={6}
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                        )}
                      </div>

                      <div className="space-y-3">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full flex items-center"
                        size="lg"
                        data-cursor-text="Send Message"
                          onClick={() => console.log('Submit button clicked')}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                        
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full flex items-center bg-green-600 hover:bg-green-700 text-white border-green-600 hover:border-green-700"
                          size="lg"
                          data-cursor-text="Chat on WhatsApp"
                          onClick={() => window.open('https://wa.me/9779864320452?text=Hi! I would like to discuss your services.', '_blank')}
                        >
                          <MessageCircle className="mr-2 h-5 w-5" />
                          Chat on WhatsApp
                        </Button>
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50, y: -20, rotateX: 25, rotateY: 15, scale: 0.9, z: -30 }}
              animate={{ opacity: 1, x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1, z: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3,
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 50,
                damping: 15
              }}
              className="space-y-8"
              whileHover={{
                rotateX: -5,
                rotateY: -5,
                scale: 1.03,
                z: 25,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Contact Information</CardTitle>
                  <CardDescription className="text-gray-700 dark:text-gray-300">
                    Get in touch with us through any of these channels.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={info.title}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                      className="flex items-center p-4 rounded-lg border border-border hover:border-primary transition-colors group"
                      data-cursor-text={`Contact ${info.title}`}
                    >
                      <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors mr-4 image-3d">
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
                        <info.icon className="h-6 w-6 text-primary" />
                        </motion.div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">{info.title}</h3>
                        <p className="text-gray-700 dark:text-gray-300">{info.value}</p>
                      </div>
                    </motion.a>
                  ))}
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary/10 rounded-full hover:bg-primary/20 transition-colors"
                      data-cursor-text={`Visit ${social.label}`}
                    >
                      <social.icon className="h-6 w-6 text-primary" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Additional Info */}
              <Card data-cursor-text="Learn More">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Let's Partner Together</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    We're always open to discussing new partnerships, innovative projects, and opportunities to help transform your business.
                  </p>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>• Enterprise Technology Solutions</p>
                    <p>• Digital Transformation Consulting</p>
                    <p>• AI & Machine Learning Projects</p>
                    <p>• Strategic Technology Partnerships</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Common questions about our services and partnership opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "What types of solutions do you provide?",
                answer: "We specialize in enterprise technology solutions, including AI & machine learning, digital transformation, cloud infrastructure, and cybersecurity."
              },
              {
                question: "How long does a typical engagement take?",
                answer: "Engagement timelines vary based on complexity. Digital transformation projects typically take 3-6 months, while AI implementations can take 6-12 months."
              },
              {
                question: "Do you provide ongoing support?",
                answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solutions continue to deliver value and remain secure."
              },
              {
                question: "What's your approach to digital transformation?",
                answer: "We follow a strategic approach: assessment, strategy development, implementation, and continuous optimization with regular stakeholder feedback."
              }
            ].map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card data-cursor-text="Read FAQ">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{faq.question}</h3>
                    <p className="text-gray-700 dark:text-gray-300">{faq.answer}</p>
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

export default Contact
