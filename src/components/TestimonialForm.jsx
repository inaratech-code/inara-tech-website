import { useState } from 'react'
import { motion } from 'framer-motion'
import { Star, Send, CheckCircle } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const TestimonialForm = ({ onTestimonialAdded }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    content: '',
    rating: 5,
    avatar: '👤'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const avatarOptions = ['👤', '👩‍💼', '👨‍💻', '👩‍🎨', '👨‍💼', '👩‍⚕️', '👨‍🚀', '👩‍🔬', '👨‍🎓', '👩‍💻', '👨‍🏫', '👩‍🚀']

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.company.trim()) newErrors.company = 'Company is required'
    if (!formData.role.trim()) newErrors.role = 'Role is required'
    if (!formData.content.trim()) newErrors.content = 'Testimonial content is required'
    if (formData.content.trim().length < 20) newErrors.content = 'Please write at least 20 characters'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsSubmitting(true)
    
    try {
      // Get existing testimonials
      const existingTestimonials = JSON.parse(localStorage.getItem('inaratech_testimonials') || '[]')
      
      // Create new testimonial
      const newTestimonial = {
        id: Date.now(),
        ...formData,
        featured: false
      }
      
      // Add to existing testimonials
      const updatedTestimonials = [...existingTestimonials, newTestimonial]
      
      // Save to localStorage
      localStorage.setItem('inaratech_testimonials', JSON.stringify(updatedTestimonials))
      
      // Trigger update in parent component
      if (onTestimonialAdded) {
        onTestimonialAdded(updatedTestimonials)
      }
      
      // Show success message
      setIsSubmitted(true)
      
      // Reset form
      setFormData({
        name: '',
        company: '',
        role: '',
        content: '',
        rating: 5,
        avatar: '👤'
      })
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
      
    } catch (error) {
      console.error('Error saving testimonial:', error)
      alert('There was an error saving your testimonial. Please try again.')
    } finally {
      setIsSubmitting(false)
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

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-16 h-16 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
        </motion.div>
        <h3 className="text-xl font-semibold text-green-800 dark:text-green-200 mb-2">
          Thank You!
        </h3>
        <p className="text-green-700 dark:text-green-300">
          Your testimonial has been submitted successfully. It will be reviewed and may appear on our website soon.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-8 border border-border/30"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
          Share Your Experience
        </h3>
        <p className="text-muted-foreground">
          Help others by sharing your experience working with INARA TECH
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Your Name *
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., John Smith"
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Company *
            </label>
            <Input
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              placeholder="e.g., Tech Solutions Inc."
              className={errors.company ? 'border-red-500' : ''}
            />
            {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Your Role *
            </label>
            <Input
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              placeholder="e.g., CEO, Marketing Director"
              className={errors.role ? 'border-red-500' : ''}
            />
            {errors.role && <p className="text-red-500 text-sm mt-1">{errors.role}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Avatar
            </label>
            <div className="flex gap-2 flex-wrap">
              {avatarOptions.map((avatar) => (
                <button
                  key={avatar}
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, avatar }))}
                  className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center text-xl transition-all ${
                    formData.avatar === avatar 
                      ? 'border-primary bg-primary/10 scale-110' 
                      : 'border-border hover:border-primary/50 hover:scale-105'
                  }`}
                >
                  {avatar}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Your Testimonial *
          </label>
          <Textarea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
            placeholder="Tell us about your experience working with INARA TECH..."
            rows={4}
            className={errors.content ? 'border-red-500' : ''}
          />
          {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
          <p className="text-xs text-muted-foreground mt-1">
            Minimum 20 characters ({formData.content.length} characters)
          </p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
            Rating
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => setFormData(prev => ({ ...prev, rating }))}
                className={`p-1 transition-all ${
                  rating <= formData.rating 
                    ? 'text-yellow-400 scale-110' 
                    : 'text-gray-300 hover:text-yellow-300 hover:scale-105'
                }`}
              >
                <motion.div
                  variants={starVariants}
                  initial="hidden"
                  animate="visible"
                  whileHover="hover"
                  custom={rating - 1}
                >
                  <Star className="w-6 h-6 fill-current" />
                </motion.div>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 mr-2 border-2 border-white border-t-transparent rounded-full"
                />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Submit Testimonial
              </>
            )}
          </Button>
        </motion.div>
      </form>

      <p className="text-xs text-muted-foreground text-center mt-4">
        Your testimonial will be reviewed before being published on our website.
      </p>
    </motion.div>
  )
}

export default TestimonialForm
