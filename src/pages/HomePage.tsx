import React, { useState } from 'react'
import { VideoHero } from '@/components/sections/VideoHero'
import { StatsSection } from '@/components/sections/StatsSection'
// Import the original content temporarily until we break it down
import { OriginalContent } from '@/components/OriginalContent'

export default function HomePage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen">
      {/* Modern Video Hero Section */}
      <VideoHero 
        onGetStarted={() => scrollToSection('contact')}
        onWatchDemo={() => scrollToSection('calculators')}
      />
      
      {/* Stats Section */}
      <StatsSection />
      
      {/* Original Content (temporary until we break it down) */}
      <OriginalContent />
    </div>
  )
}