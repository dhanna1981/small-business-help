import React, { useState } from 'react'
import { VideoHero } from '@/components/sections/VideoHero'
import { StatsSection } from '@/components/sections/StatsSection'
import { ServicesSection } from '@/components/sections/ServicesSection'
import { CalculatorsSection } from '@/components/sections/CalculatorsSection'
// Import the original content temporarily until we break it down
import { OriginalContent } from '@/components/OriginalContent'
import { useCalculators } from '@/hooks/useCalculators'

export default function HomePage() {
  const calculatorState = useCalculators()
  
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
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Calculators Section */}
      <CalculatorsSection {...calculatorState} />
      
      {/* Original Content (temporary until we break it down) */}
      <OriginalContent />
    </div>
  )
}