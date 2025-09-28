// Smooth scroll utility functions
export const smoothScrollTo = (target, options = {}) => {
  const defaultOptions = {
    duration: 1000,
    easing: 'easeInOut',
    offset: 0,
    ...options
  }

  // Use Lenis if available, otherwise fallback to native smooth scroll
  if (window.lenis) {
    const element = typeof target === 'string' ? document.querySelector(target) : target
    if (element) {
      const rect = element.getBoundingClientRect()
      const scrollTop = window.pageYOffset + rect.top - defaultOptions.offset
      window.lenis.scrollTo(scrollTop, {
        duration: defaultOptions.duration / 1000,
        easing: (t) => {
          switch (defaultOptions.easing) {
            case 'easeInOut':
              return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
            case 'easeIn':
              return t * t
            case 'easeOut':
              return t * (2 - t)
            default:
              return t
          }
        }
      })
    }
  } else {
    // Fallback to native smooth scroll
    const element = typeof target === 'string' ? document.querySelector(target) : target
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      })
    }
  }
}

export const smoothScrollToTop = (options = {}) => {
  const defaultOptions = {
    duration: 800,
    easing: 'easeOut',
    ...options
  }

  if (window.lenis) {
    window.lenis.scrollTo(0, {
      duration: defaultOptions.duration / 1000,
      easing: (t) => {
        switch (defaultOptions.easing) {
          case 'easeInOut':
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          case 'easeIn':
            return t * t
          case 'easeOut':
            return t * (2 - t)
          default:
            return t
        }
      }
    })
  } else {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}

export const smoothScrollToBottom = (options = {}) => {
  const defaultOptions = {
    duration: 1000,
    easing: 'easeInOut',
    ...options
  }

  if (window.lenis) {
    window.lenis.scrollTo(document.body.scrollHeight, {
      duration: defaultOptions.duration / 1000,
      easing: (t) => {
        switch (defaultOptions.easing) {
          case 'easeInOut':
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
          case 'easeIn':
            return t * t
          case 'easeOut':
            return t * (2 - t)
          default:
            return t
        }
      }
    })
  } else {
    window.scrollTo({
      top: document.body.scrollHeight,
      left: 0,
      behavior: 'smooth'
    })
  }
}

// Scroll to element with offset for fixed headers
export const smoothScrollToElement = (selector, offset = 80) => {
  smoothScrollTo(selector, { offset })
}

// Initialize smooth scroll for anchor links
export const initSmoothScrollAnchors = () => {
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]')
    if (link) {
      e.preventDefault()
      const targetId = link.getAttribute('href').substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        smoothScrollToElement(`#${targetId}`, 80)
      }
    }
  })
}
