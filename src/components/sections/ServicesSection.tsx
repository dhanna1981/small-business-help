import React from 'react'
import { Card, CardContent, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Shield, 
  Heart, 
  Users, 
  TrendUp, 
  ArrowRight, 
  Sparkle,
  Calculator,
  CurrencyDollar,
  Lightbulb,
  Building
} from '@phosphor-icons/react'

export function ServicesSection() {
  const costReductionServices = [
    {
      icon: Shield,
      title: "Preventative Care Management Program (PCMP)",
      featured: true,
      savings: "$620 per employee annually",
      description: "Comprehensive healthcare program that saves employers an average of $620 per employee annually while providing superior care benefits.",
      benefits: [
        { icon: Heart, text: 'Free telehealth' },
        { icon: Shield, text: 'Free prescriptions' },
        { icon: Users, text: '24/7 mental health' },
        { icon: TrendUp, text: 'Preventative care' }
      ],
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: CurrencyDollar,
      title: "Community Solar Programs",
      savings: "5-20% energy cost reduction",
      description: "Reduce electricity costs through community solar subscriptions. Available in PA, ME, and IL with no upfront costs.",
      benefits: [
        "No installation required",
        "Immediate savings",
        "Environmentally friendly",
        "No upfront costs"
      ],
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: Calculator,
      title: "Credit Card Processing Optimization",
      savings: "Up to 40% reduction in fees",
      description: "Comprehensive audit and optimization of your current credit card processing to reduce transaction fees and improve cash flow.",
      benefits: [
        "Processing fee audit",
        "Rate negotiation",
        "Equipment upgrade",
        "Ongoing monitoring"
      ],
      gradient: "from-purple-500 to-pink-600"
    }
  ]

  const growthServices = [
    {
      icon: Building,
      title: "Web Design & Development",
      description: "Modern, responsive websites that convert visitors into customers.",
      gradient: "from-indigo-500 to-blue-600"
    },
    {
      icon: TrendUp,
      title: "Digital Marketing & SEO",
      description: "Comprehensive digital marketing strategies to increase online visibility.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      icon: Users,
      title: "Call Center Services",
      description: "Professional customer service solutions to improve customer satisfaction.",
      gradient: "from-teal-500 to-cyan-600"
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-primary/20 text-primary">
            <Sparkle className="w-3 h-3 mr-2" />
            Our Comprehensive Solutions
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Reduce Costs.</span> Drive Growth.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive solutions to reduce operational costs and accelerate business growth
          </p>
        </div>

        {/* Cost Reduction Services */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <Shield className="h-6 w-6 text-accent" />
              Cost Reduction Services
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* PCMP - Featured Service */}
            <Card className="lg:col-span-3 overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-blue-200">
              <div className="grid lg:grid-cols-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 bg-gradient-to-br ${costReductionServices[0].gradient} rounded-xl flex items-center justify-center`}>
                      <Shield className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{costReductionServices[0].title}</CardTitle>
                      <Badge variant="secondary" className="mt-1 text-xs">Featured Service</Badge>
                    </div>
                  </div>
                  <p className="text-base text-muted-foreground mb-4 leading-relaxed">
                    {costReductionServices[0].description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Heart className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">Free telehealth</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">Free prescriptions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">24/7 mental health</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendUp className="h-4 w-4 text-accent flex-shrink-0" />
                      <span className="text-sm">Preventative care</span>
                    </div>
                  </div>
                  <Button className={`bg-gradient-to-r ${costReductionServices[0].gradient} hover:opacity-90 transition-opacity`} size="sm">
                    Learn More About PCMP
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
                
                <div className="relative p-6 flex items-center justify-center bg-gradient-to-br from-blue-500/10 to-cyan-600/10">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">{costReductionServices[0].savings}</div>
                    <p className="text-sm text-muted-foreground">Average annual savings</p>
                    <div className="mt-4 grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">$0</div>
                        <div className="text-xs text-muted-foreground">Setup cost</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">24/7</div>
                        <div className="text-xs text-muted-foreground">Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Other Cost Reduction Services */}
            {costReductionServices.slice(1).map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center`}>
                        <IconComponent className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-base">{service.title}</CardTitle>
                        <Badge variant="outline" className="mt-1 text-xs">{service.savings}</Badge>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2 mb-4">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                          <span className="text-xs text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Growth Services */}
        <div>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2 flex items-center justify-center gap-2">
              <TrendUp className="h-6 w-6 text-primary" />
              Growth Services
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {growthServices.map((service, index) => {
              const IconComponent = service.icon
              return (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <div className={`w-12 h-12 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <CardTitle className="text-lg mb-3">{service.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <Button variant="outline" size="sm">
                      Learn More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}