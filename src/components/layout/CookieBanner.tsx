import React from 'react'
import { Button } from '@/components/ui/button'
import { X } from '@phosphor-icons/react'

interface CookieBannerProps {
  onAccept: () => void
}

export function CookieBanner({ onAccept }: CookieBannerProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-t shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground leading-relaxed">
              We use cookies to enhance your experience, analyze site traffic, and for marketing purposes. 
              By continuing to browse, you consent to our use of cookies.{' '}
              <a 
                href="/privacy" 
                className="text-primary hover:underline font-medium"
              >
                Learn more
              </a>
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm"
              onClick={onAccept}
              className="text-xs whitespace-nowrap"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}