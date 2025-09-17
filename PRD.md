# Small Business Help Group Website PRD

A comprehensive business services website that positions Small Business Help Group as a trusted partner for reducing expenses and accelerating growth through cost savings and strategic business services.

**Experience Qualities**:
1. **Professional** - Clean, trustworthy design that establishes credibility with business decision-makers
2. **Results-oriented** - Interactive calculators and clear value propositions that demonstrate tangible ROI
3. **Accessible** - User-friendly interface that works seamlessly across all devices and accessibility needs

**Complexity Level**: Light Application (multiple features with basic state)
- Interactive savings calculators with real-time updates, contact forms with validation, and dynamic content sections that respond to user input while maintaining straightforward navigation

## Essential Features

### Cost Savings Calculators
- **Functionality**: Interactive sliders for PCMP ($620/employee savings) and Community Solar (5-20% savings based on kWh usage)
- **Purpose**: Demonstrate immediate value proposition and encourage lead generation
- **Trigger**: User visits homepage or services section
- **Progression**: View calculator → Adjust sliders → See savings estimate → Call-to-action to contact
- **Success criteria**: Users engage with calculators and conversion to contact form increases

### Contact Form with Lead Capture
- **Functionality**: Comprehensive form with validation, spam protection, IP/location tracking, and PHPMailer integration
- **Purpose**: Convert visitors into qualified leads while gathering necessary contact information
- **Trigger**: User clicks contact buttons throughout site or fills out forms
- **Progression**: Fill form → Validate required fields → Consent checkboxes → Submit → Confirmation
- **Success criteria**: Form submissions are delivered successfully with all required data captured

### Service Portfolio Showcase
- **Functionality**: Detailed sections for expense reduction services (credit card processing, solar, energy, PCMP) and growth services (web design, marketing, SEO, call center)
- **Purpose**: Educate prospects on full service offering and establish expertise
- **Trigger**: Navigation to services or scrolling through homepage
- **Progression**: Browse services → Learn details → View benefits → Contact for consultation
- **Success criteria**: Users understand service offerings and proceed to contact

### Free eBook Lead Magnet
- **Functionality**: Email capture form offering valuable business content with PHPMailer delivery
- **Purpose**: Generate leads at different stages of buyer journey
- **Trigger**: User shows interest in cost-saving content
- **Progression**: Enter email → Consent to contact → Receive eBook → Follow-up marketing
- **Success criteria**: Email capture rate increases and leads are properly nurtured

## Edge Case Handling
- **Form Validation Errors**: Clear inline error messages with specific guidance for correction
- **Mobile Navigation**: Hamburger menu with smooth transitions and touch-friendly interactions
- **Calculator Edge Cases**: Input validation for unrealistic values with helpful range suggestions
- **Slow Connections**: Progressive loading with skeleton states and optimized images
- **Accessibility**: Full keyboard navigation, screen reader support, and high contrast compliance
- **Spam Prevention**: Honeypot fields, rate limiting, and CAPTCHA integration for form security

## Design Direction
The design should feel professional and trustworthy while remaining approachable - think "sophisticated business consultant" rather than "corporate intimidating" - with a clean, modern interface that prioritizes information hierarchy and conversion optimization.

## Color Selection
Complementary (opposite colors) - Using professional blue-orange palette to convey trust and energy, creating visual contrast that guides user attention to key actions and value propositions.

- **Primary Color**: Deep Professional Blue (oklch(0.4 0.15 240)) - Communicates trust, stability, and corporate reliability
- **Secondary Colors**: Neutral Grays (oklch(0.95 0 0) to oklch(0.2 0 0)) - Supporting content hierarchy and readability
- **Accent Color**: Energetic Orange (oklch(0.7 0.2 50)) - Attention-grabbing highlight for CTAs and savings highlights
- **Foreground/Background Pairings**:
  - Background White (oklch(1 0 0)): Dark Gray text (oklch(0.2 0 0)) - Ratio 16.7:1 ✓
  - Primary Blue (oklch(0.4 0.15 240)): White text (oklch(1 0 0)) - Ratio 8.2:1 ✓
  - Accent Orange (oklch(0.7 0.2 50)): White text (oklch(1 0 0)) - Ratio 4.9:1 ✓
  - Card Gray (oklch(0.98 0 0)): Dark Gray text (oklch(0.2 0 0)) - Ratio 15.8:1 ✓

## Font Selection
Typography should convey modern professionalism with excellent readability for business content - Inter for its clean corporate appeal and optimal screen legibility.

- **Typographic Hierarchy**:
  - H1 (Hero Title): Inter Bold/48px/tight letter spacing
  - H2 (Section Headers): Inter SemiBold/36px/normal spacing  
  - H3 (Subsections): Inter Medium/24px/normal spacing
  - Body Text: Inter Regular/16px/1.6 line height
  - CTA Buttons: Inter SemiBold/16px/wide letter spacing
  - Small Text: Inter Regular/14px/1.5 line height

## Animations
Subtle and purposeful animations that enhance credibility rather than distract - smooth transitions that feel responsive and professional, avoiding anything that might seem unprofessional to business decision-makers.

- **Purposeful Meaning**: Motion reinforces the brand's reliability and attention to detail while guiding users through conversion funnels
- **Hierarchy of Movement**: Calculator updates and form interactions receive priority, with gentle hover effects on secondary elements

## Component Selection
- **Components**: Cards for service sections, Form components for contact/email capture, Button variants for different CTAs, Slider for calculators, Dialog for privacy/terms, Alert for form feedback
- **Customizations**: Custom calculator components with real-time updates, testimonial carousel, stats counter animation
- **States**: Buttons with distinct hover/active states, form fields with validation states, loading states for form submissions
- **Icon Selection**: Phosphor icons for professional business context - Calculator, Users, Shield, TrendUp for services
- **Spacing**: Consistent 8px base unit with generous section padding (80px desktop, 40px mobile)
- **Mobile**: Responsive grid that stacks vertically, collapsible navigation, touch-optimized form controls and calculator sliders