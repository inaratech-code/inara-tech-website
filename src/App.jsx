import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { ThemeProvider } from './context/ThemeContext'
import { usePageTitle } from './hooks/usePageTitle'
import Lenis from 'lenis'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import SiteLoader from './components/SiteLoader'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contact from './pages/Contact'
import TestimonialsPage from './pages/TestimonialsPage'
import Admin from './pages/Admin'


// ScrollToTop component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    // Use Lenis smooth scroll if available, otherwise fallback to native
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
    }
  }, [pathname])

  return null
}

// Background component that changes based on current route
const BackgroundImage = ({ pathname }) => {
  const getBackgroundClass = () => {
    switch (pathname) {
      case '/':
        return 'logo-gradient-background'
      case '/about':
        return 'doodle-watermark-about'
      case '/services':
        return 'doodle-watermark-services'
      case '/contact':
        return 'doodle-watermark-contact'
      case '/blog':
        return 'logo-gradient-background'
      case '/testimonials':
        return 'logo-gradient-background'
      case '/admin':
        return 'logo-gradient-background'
      default:
        return 'logo-gradient-background'
    }
  }

  return <div className={`fixed inset-0 z-[-10] ${getBackgroundClass()}`} />
}

function AppContent() {
  const location = useLocation()
  
  // Update page title based on current route
  usePageTitle()

  // Initialize Lenis smooth scrolling - Optimized for performance
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1.2,
      smoothTouch: false,
      touchMultiplier: 2.5,
      infinite: false,
      normalizeWheel: true,
      wheelMultiplier: 1.2,
      syncTouch: true,
      syncTouchLerp: 0.1,
    })

    // Make Lenis globally accessible
    window.lenis = lenis

    // Enhanced scroll event handling
    lenis.on('scroll', (e) => {
      // Add custom scroll effects here if needed
      // e.velocity for scroll speed
      // e.direction for scroll direction
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Handle resize events
    const handleResize = () => {
      lenis.resize()
    }

    // Handle orientation change for mobile
    const handleOrientationChange = () => {
      setTimeout(() => {
        lenis.resize()
      }, 100)
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('orientationchange', handleOrientationChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('orientationchange', handleOrientationChange)
      lenis.destroy()
      window.lenis = null
    }
  }, [])

  return (
    <>
      <SiteLoader />
      <ScrollToTop />
      <BackgroundImage pathname={location.pathname} />
      <div className="min-h-screen bg-background text-foreground relative">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/about" element={<PageTransition><About /></PageTransition>} />
            <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
            <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
            <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
            <Route path="/testimonials" element={<PageTransition><TestimonialsPage /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/admin" element={<PageTransition><Admin /></PageTransition>} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <AppContent />
      </Router>
    </ThemeProvider>
  )
}

export default App
