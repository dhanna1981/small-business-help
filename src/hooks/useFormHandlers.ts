import { toast } from 'sonner'

export function useFormHandlers(setIsSubmitting: (loading: boolean) => void, setShowExitPopup?: (show: boolean) => void) {
  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    // Check honeypot
    if (formData.get('honeypot')) {
      setIsSubmitting(false)
      return
    }
    
    // Safely get IP address
    let ipAddress = 'Unknown'
    try {
      if (typeof window !== 'undefined') {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        ipAddress = data.ip || 'Unknown'
      }
    } catch (error) {
      console.log('Could not fetch IP address:', error)
    }

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      consent: formData.get('consent'),
      honeypot: formData.get('honeypot'),
      ipAddress,
      timestamp: new Date().toISOString()
    }

    try {
      // Send to PHP contact handler
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success('Thank you! Your message has been sent. We\'ll get back to you within 24 hours.')
        e.currentTarget.reset()
        if (setShowExitPopup) setShowExitPopup(false) // Close popup after successful submission
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Contact form error:', error)
      toast.error('Unable to send message. Please try again or call us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleEbookSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    // Check honeypot
    if (formData.get('honeypot')) {
      setIsSubmitting(false)
      return
    }
    
    // Safely get IP address
    let ipAddress = 'Unknown'
    try {
      if (typeof window !== 'undefined') {
        const response = await fetch('https://api.ipify.org?format=json')
        const data = await response.json()
        ipAddress = data.ip || 'Unknown'
      }
    } catch (error) {
      console.log('Could not fetch IP address:', error)
    }

    const data = {
      email: formData.get('email'),
      consent: formData.get('ebook-consent'),
      honeypot: formData.get('honeypot'),
      ipAddress,
      timestamp: new Date().toISOString()
    }

    try {
      // Send to PHP ebook handler
      const response = await fetch('/ebook.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (response.ok && result.success) {
        toast.success('Thank you! Check your email for the download link.')
        e.currentTarget.reset()
      } else {
        toast.error(result.error || 'Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Ebook form error:', error)
      toast.error('Unable to send download link. Please try again or contact us directly.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return {
    handleContactSubmit,
    handleEbookSubmit
  }
}