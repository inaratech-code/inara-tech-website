import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import TestimonialsAdmin from '../components/TestimonialsAdmin'

const Admin = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  // Simple password authentication
  const handleLogin = (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate authentication check
    setTimeout(() => {
      if (password === 'inara2025') { // Change this to your desired password
        setIsAuthenticated(true)
        localStorage.setItem('admin_authenticated', 'true')
      } else {
        alert('Incorrect password')
      }
      setIsLoading(false)
    }, 1000)
  }

  // Check if already authenticated
  useEffect(() => {
    const isAuth = localStorage.getItem('admin_authenticated')
    if (isAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('admin_authenticated')
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full"
        >
          <div className="bg-gradient-to-br from-background/50 to-background/30 backdrop-blur-sm rounded-xl p-8 border border-border/30">
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
              Admin Access
            </h1>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Enter admin password"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-primary hover:bg-primary/90 text-white py-2 px-4 rounded-lg font-semibold transition-colors disabled:opacity-50"
              >
                {isLoading ? 'Authenticating...' : 'Login'}
              </button>
            </form>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Default password: inara2025
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-8"
      >
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
            Website Administration
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
          >
            Logout
          </button>
        </div>
        
        <TestimonialsAdmin />
      </motion.div>
    </div>
  )
}

export default Admin
