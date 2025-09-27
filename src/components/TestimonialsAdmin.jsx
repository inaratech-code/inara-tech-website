import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Plus, Edit, Trash2, Save, X, Star } from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'

const TestimonialsAdmin = () => {
  const [testimonials, setTestimonials] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editingId, setEditingId] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    role: '',
    content: '',
    rating: 5,
    avatar: '👤',
    featured: false
  })

  // Load testimonials from localStorage on component mount
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('inaratech_testimonials')
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials))
    }
  }, [])

  // Save testimonials to localStorage whenever testimonials change
  useEffect(() => {
    localStorage.setItem('inaratech_testimonials', JSON.stringify(testimonials))
  }, [testimonials])

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (editingId) {
      // Update existing testimonial
      setTestimonials(prev => prev.map(testimonial => 
        testimonial.id === editingId 
          ? { ...testimonial, ...formData }
          : testimonial
      ))
    } else {
      // Add new testimonial
      const newTestimonial = {
        id: Date.now(),
        ...formData
      }
      setTestimonials(prev => [...prev, newTestimonial])
    }
    
    resetForm()
  }

  const handleEdit = (testimonial) => {
    setFormData(testimonial)
    setEditingId(testimonial.id)
    setIsEditing(true)
  }

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id))
    }
  }

  const resetForm = () => {
    setFormData({
      name: '',
      company: '',
      role: '',
      content: '',
      rating: 5,
      avatar: '👤',
      featured: false
    })
    setEditingId(null)
    setIsEditing(false)
  }

  const avatarOptions = ['👤', '👩‍💼', '👨‍💻', '👩‍🎨', '👨‍💼', '👩‍⚕️', '👨‍🚀', '👩‍🔬', '👨‍🎓', '👩‍💻', '👨‍🏫', '👩‍🚀']

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-8 border border-border/30">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            Manage Testimonials
          </h2>
          <Button
            onClick={() => setIsEditing(true)}
            className="bg-primary hover:bg-primary/90"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Testimonial
          </Button>
        </div>

        {/* Form */}
        {isEditing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-background/50 rounded-lg p-6 mb-8 border border-border/30"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Client Name</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g., John Smith"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Company</label>
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="e.g., Tech Solutions Inc."
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Role/Position</label>
                  <Input
                    name="role"
                    value={formData.role}
                    onChange={handleInputChange}
                    placeholder="e.g., CEO, Marketing Director"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Avatar</label>
                  <div className="flex gap-2 flex-wrap">
                    {avatarOptions.map((avatar) => (
                      <button
                        key={avatar}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, avatar }))}
                        className={`w-10 h-10 rounded-lg border-2 flex items-center justify-center text-xl ${
                          formData.avatar === avatar 
                            ? 'border-primary bg-primary/10' 
                            : 'border-border hover:border-primary/50'
                        }`}
                      >
                        {avatar}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Testimonial Content</label>
                <Textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  placeholder="Write the testimonial here..."
                  rows={4}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <button
                        key={rating}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating }))}
                        className={`p-1 ${
                          rating <= formData.rating 
                            ? 'text-yellow-400' 
                            : 'text-gray-300'
                        }`}
                      >
                        <Star className="w-5 h-5 fill-current" />
                      </button>
                    ))}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="rounded border-border"
                  />
                  <label className="text-sm font-medium">Featured testimonial</label>
                </div>
              </div>

              <div className="flex gap-2 pt-4">
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Save className="w-4 h-4 mr-2" />
                  {editingId ? 'Update' : 'Add'} Testimonial
                </Button>
                <Button type="button" variant="outline" onClick={resetForm}>
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
              </div>
            </form>
          </motion.div>
        )}

        {/* Testimonials List */}
        <div className="space-y-4">
          {testimonials.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg mb-2">No testimonials added yet</p>
              <p>Click "Add Testimonial" to get started</p>
            </div>
          ) : (
            testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-background/50 rounded-lg p-6 border border-border/30"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{testimonial.avatar}</span>
                    <div>
                      <h3 className="font-semibold text-gray-800 dark:text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {testimonial.featured && (
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">
                        Featured
                      </span>
                    )}
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  "{testimonial.content}"
                </p>
                
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleEdit(testimonial)}
                  >
                    <Edit className="w-4 h-4 mr-1" />
                    Edit
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => handleDelete(testimonial.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="w-4 h-4 mr-1" />
                    Delete
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Instructions */}
        <div className="mt-8 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            How to use:
          </h3>
          <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
            <li>• Click "Add Testimonial" to create a new testimonial</li>
            <li>• Fill in all the required fields</li>
            <li>• Choose an avatar from the emoji options</li>
            <li>• Set the rating (1-5 stars)</li>
            <li>• Mark as "Featured" to highlight important testimonials</li>
            <li>• Testimonials are automatically saved to your browser's local storage</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsAdmin
