import React from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, PlayCircle } from '@phosphor-icons/react'

interface VideoHeroProps {
  onGetStarted: () => void
  onWatchDemo: () => void
}

export function VideoHero({ onGetStarted, onWatchDemo }: VideoHeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80"
        >
          <source 
            src="https://videos.pexels.com/video-files/3196887/3196887-uhd_2560_1440_25fps.mp4" 
            type="video/mp4" 
          />
          {/* Fallback for browsers that don't support video */}
          <div 
            className="w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=1080&fit=crop&crop=center&auto=format&q=80)'
            }}
          />
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          
          {/* Badge */}
          <Badge variant="outline" className="mb-6 border-white/20 text-white bg-white/10 backdrop-blur-sm">
            <span className="animate-pulse w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Trusted by 150+ Businesses
          </Badge>
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Cut Costs,{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Drive Growth
            </span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Save an average of <strong className="text-yellow-400">$620 per employee</strong> with our proven cost reduction strategies. 
            From PCMP healthcare savings to community solar, we help small businesses thrive.
          </p>
          
          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10 text-white/80">
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
              Free Consultation
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
              Immediate Savings
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
              Proven Results
            </div>
          </div>
          
          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-2xl"
              onClick={onGetStarted}
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              onClick={onWatchDemo}
            >
              <PlayCircle className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="mt-12 text-white/60 text-sm">
            <p>Over $2M saved for clients • Average 30% cost reduction • Sharon, PA based</p>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}