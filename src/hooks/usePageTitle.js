import { useEffect } from 'react'

export const usePageTitle = () => {
  useEffect(() => {
    // Always set the title to just "Inara Tech" regardless of the page
    document.title = 'Inara Tech'
  }, [])
}
