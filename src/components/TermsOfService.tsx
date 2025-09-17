import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

interface TermsOfServiceProps {
  onBack: () => void
}

export function TermsOfService({ onBack }: TermsOfServiceProps) {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Button variant="outline" onClick={onBack} className="mb-4">
              ← Back to Home
            </Button>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: {new Date().getFullYear()}</p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Acceptance of Terms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  By accessing and using the services of Small Business Help Group ("Company", "we", "us", or "our"), 
                  you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Use License</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Permission is granted to temporarily use our services for personal, non-commercial transitory viewing only. 
                    This is the grant of a license, not a transfer of title, and under this license you may not:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>modify or copy the materials</li>
                    <li>use the materials for any commercial purpose or for any public display</li>
                    <li>attempt to reverse engineer any software contained on our website</li>
                    <li>remove any copyright or other proprietary notations from the materials</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Service Agreement</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Our services including but not limited to PCMP programs, community solar, credit card processing, 
                    energy supply, web design, SEO, social media marketing, and call center services are subject to 
                    separate service agreements.
                  </p>
                  <p>
                    All savings estimates are based on industry averages and historical data. Actual savings may vary 
                    based on individual circumstances, usage patterns, and market conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Privacy and Data Collection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect 
                  your information when you use our services. By using our services, you agree to the collection 
                  and use of information in accordance with our Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Disclaimer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    The information on this website is provided on an 'as is' basis. To the fullest extent permitted by law, 
                    this Company excludes all representations, warranties, conditions and terms whether express or implied, 
                    statutory or otherwise.
                  </p>
                  <p>
                    Small Business Help Group shall not be held accountable for any decisions made based on the information 
                    provided on this website or through our services.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  In no event shall Small Business Help Group or its suppliers be liable for any damages (including, 
                  without limitation, damages for loss of data or profit, or due to business interruption) arising out 
                  of the use or inability to use our services, even if Small Business Help Group or an authorized 
                  representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground">
                  <p>If you have any questions about these Terms of Service, please contact us at:</p>
                  <div className="mt-4 space-y-1">
                    <p>Small Business Help Group</p>
                    <p>170 West State St, Sharon, PA 16146</p>
                    <p>Phone: (724) 418-2284</p>
                    <p>Email: info@sbhelpgroup.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}