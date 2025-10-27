import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { CurrencyDollar, Users, Building, Sparkle } from '@phosphor-icons/react'

export function StatsSection() {
  const stats = [
    { 
      value: '$2.3M+', 
      label: 'Money Saved for Clients',
      description: 'Total cost reductions achieved',
      icon: CurrencyDollar,
      gradient: 'from-green-500 to-emerald-600'
    },
    { 
      value: '150+', 
      label: 'Businesses Served',
      description: 'Successful cost reduction partnerships',
      icon: Building,
      gradient: 'from-blue-500 to-cyan-600'
    },
    { 
      value: '95%', 
      label: 'Client Satisfaction',
      description: 'Would recommend our services',
      icon: Users,
      gradient: 'from-purple-500 to-pink-600'
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-muted/50 to-background section-bg-pattern">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="transform hover:scale-105 transition-all duration-300">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-gradient-to-br from-background to-muted/30">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  <h3 className="text-base font-semibold text-foreground mb-1">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}