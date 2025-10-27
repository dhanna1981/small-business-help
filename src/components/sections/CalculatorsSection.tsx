import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Slider } from '@/components/ui/slider'
import { Calculator, TrendUp, ArrowRight } from '@phosphor-icons/react'

interface CalculatorsSectionProps {
  pcmpEmployees: number[]
  setPcmpEmployees: (value: number[]) => void
  solarUsage: number[]
  setSolarUsage: (value: number[]) => void
  solarSavings: number[]
  setSolarSavings: (value: number[]) => void
  pcmpSavings: number
  annualSolarSavings: number
}

export function CalculatorsSection({
  pcmpEmployees,
  setPcmpEmployees,
  solarUsage,
  setSolarUsage,
  solarSavings,
  setSolarSavings,
  pcmpSavings,
  annualSolarSavings
}: CalculatorsSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="calculators" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-accent/20 text-accent">
            <Calculator className="w-3 h-3 mr-2" />
            Interactive Calculators
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Calculate Your <span className="gradient-text">Potential Savings</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Use our interactive calculators to see exactly how much you could save
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          
          {/* PCMP Calculator */}
          <Card className="overflow-hidden bg-gradient-to-br from-white to-blue-50/50 border-blue-200">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white">
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <Calculator className="h-4 w-4" />
                </div>
                PCMP Savings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Number of Employees
                    </label>
                    <span className="text-sm font-bold text-blue-600">
                      {pcmpEmployees[0]} employees
                    </span>
                  </div>
                  <Slider
                    value={pcmpEmployees}
                    onValueChange={setPcmpEmployees}
                    max={100}
                    min={1}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1</span>
                    <span>100</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/10 to-cyan-600/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    ${pcmpSavings.toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Estimated Annual Savings
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-green-600">
                        ${(pcmpSavings / 12).toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Monthly</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">
                        $620
                      </div>
                      <div className="text-xs text-muted-foreground">Per Employee</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>Includes free telehealth and prescriptions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>24/7 mental health support included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    <span>No setup costs or hidden fees</span>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:opacity-90"
                >
                  Get Free PCMP Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Solar Calculator */}
          <Card className="overflow-hidden bg-gradient-to-br from-white to-green-50/50 border-green-200">
            <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white">
              <CardTitle className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                  <TrendUp className="h-4 w-4" />
                </div>
                Solar Savings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Monthly kWh Usage
                    </label>
                    <span className="text-sm font-bold text-green-600">
                      {solarUsage[0].toLocaleString()} kWh
                    </span>
                  </div>
                  <Slider
                    value={solarUsage}
                    onValueChange={setSolarUsage}
                    max={5000}
                    min={100}
                    step={50}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>100 kWh</span>
                    <span>5,000 kWh</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium text-foreground">
                      Estimated Savings
                    </label>
                    <span className="text-sm font-bold text-green-600">
                      {solarSavings[0]}%
                    </span>
                  </div>
                  <Slider
                    value={solarSavings}
                    onValueChange={setSolarSavings}
                    max={20}
                    min={5}
                    step={1}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>5%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500/10 to-emerald-600/10 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    ${Math.round(annualSolarSavings).toLocaleString()}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    Estimated Annual Savings
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-blue-600">
                        ${Math.round(annualSolarSavings / 12).toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Monthly</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-purple-600">
                        {solarSavings[0]}%
                      </div>
                      <div className="text-xs text-muted-foreground">Reduction</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>No installation or equipment required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>Available in PA, ME, and IL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    <span>100% renewable energy</span>
                  </div>
                </div>

                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90"
                >
                  Get Solar Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            These calculations are estimates. Actual savings may vary based on specific circumstances.
          </p>
          <Button variant="outline" onClick={scrollToContact}>
            Get Personalized Analysis
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}