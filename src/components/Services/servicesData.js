import {
  BadgeCheck,
  BarChart3,
  Bot,
  Boxes,
  Code2,
  Crown,
  Diamond,
  FileCode2,
  Gauge,
  Megaphone,
  MonitorCog,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Target,
  Trophy,
} from 'lucide-react'

export const orbitServices = [
  {
    title: 'Website Design & Dev',
    icon: MonitorCog,
    className: 'left-1/2 top-[0%] -translate-x-1/2',
  },
  {
    title: 'Branding & Identity',
    icon: PenTool,
    className: 'left-[79%] top-[15%] -translate-x-1/2',
  },
  {
    title: 'Social Media Marketing',
    icon: Megaphone,
    className: 'left-[82%] top-[48%] -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Business Automation',
    icon: Bot,
    className: 'left-1/2 top-[74%] -translate-x-1/2',
  },
  {
    title: 'SEO & Online Growth',
    icon: BarChart3,
    className: 'left-[18%] top-[48%] -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    className: 'left-[21%] top-[15%] -translate-x-1/2',
  },
]

export const heroHighlights = [
  'Strategic Approach',
  'Result Focused',
  'Scalable Solutions',
]

export const coreServices = [
  {
    title: 'Website Design & Development',
    text: 'High-performance websites that are beautiful, responsive, and built to convert.',
    icon: MonitorCog,
  },
  {
    title: 'Branding & Identity',
    text: 'Memorable brand identities that connect, inspire, and set you apart.',
    icon: PenTool,
  },
  {
    title: 'Social Media Marketing',
    text: 'Creative strategies that grow your brand and engage your audience.',
    icon: Megaphone,
  },
  {
    title: 'SEO & Online Growth',
    text: 'Data-driven SEO strategies that boost rankings and drive organic growth.',
    icon: BarChart3,
  },
  {
    title: 'Business Automation',
    text: 'Smart workflows and automations to save time, reduce costs, and increase efficiency.',
    icon: Bot,
  },
  {
    title: 'UI/UX Design',
    text: 'Clean, user-friendly experiences that improve engagement and conversions.',
    icon: MonitorCog,
  },
]

export const serviceBreakdown = [
  {
    title: 'Website Design & Development',
    text: 'Custom websites that combine stunning design with powerful functionality.',
    icon: Code2,
    visual: MonitorCog,
    points: [
      'Responsive & mobile-first design',
      'Fast loading & SEO optimized',
      'CMS integration (WordPress, Webflow, etc.)',
      'E-commerce & custom development',
    ],
  },
  {
    title: 'Branding & Identity',
    text: 'Create a strong, consistent brand identity that leaves a lasting impression.',
    icon: PenTool,
    visual: Diamond,
    points: [
      'Logo & visual identity design',
      'Brand guidelines & style system',
      'Brand strategy & positioning',
      'Print & digital brand assets',
    ],
  },
  {
    title: 'Social Media Marketing',
    text: 'Engage your audience and grow your brand across all major platforms.',
    icon: Megaphone,
    visual: Megaphone,
    points: [
      'Content strategy & planning',
      'Social media management',
      'Paid ads & campaign management',
      'Analytics & performance reporting',
    ],
  },
  {
    title: 'SEO & Online Growth',
    text: 'Rank higher, get found, and grow your organic traffic consistently.',
    icon: BarChart3,
    visual: BarChart3,
    points: [
      'On-page & technical SEO',
      'Keyword research & content strategy',
      'Link building & authority growth',
      'SEO analytics & reporting',
    ],
  },
  {
    title: 'Business Automation',
    text: 'Automate repetitive tasks and streamline your business operations.',
    icon: Bot,
    visual: Bot,
    points: [
      'Workflow automation (Zapier, Make)',
      'CRM & integration setup',
      'Lead generation & nurturing',
      'Reporting & process optimization',
    ],
  },
  {
    title: 'UI/UX Design',
    text: 'Design intuitive experiences that users love and businesses benefit from.',
    icon: FileCode2,
    visual: MonitorCog,
    points: [
      'User research & wireframing',
      'UI design & prototyping',
      'Usability testing & iteration',
      'Design systems & style guides',
    ],
  },
]

export const workflow = [
  {
    number: '01',
    title: 'Discover',
    text: 'We learn about your business, audience, and goals to define the right strategy.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Plan & Strategize',
    text: 'We research, analyze, and create a tailored plan for measurable success.',
    icon: Target,
  },
  {
    number: '03',
    title: 'Design & Develop',
    text: 'Our team designs, builds, and brings your vision to life with precision.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Test & Optimize',
    text: 'We test rigorously and optimize for performance, speed, and quality.',
    icon: ShieldCheck,
  },
  {
    number: '05',
    title: 'Launch & Grow',
    text: 'We launch your project and support you in scaling for long-term growth.',
    icon: Rocket,
  },
]

export const resultCards = [
  {
    title: 'Strategic & Data-Driven',
    text: 'Every decision is backed by data and aligned with your business goals.',
    icon: Target,
  },
  {
    title: 'Experienced Specialists',
    text: 'Our team brings deep expertise across design, development, and marketing.',
    icon: Gauge,
  },
  {
    title: 'End-to-End Solutions',
    text: 'From strategy to execution, we handle everything under one roof.',
    icon: Boxes,
  },
  {
    title: 'Transparent & Reliable',
    text: 'Clear communication, regular updates, and complete transparency.',
    icon: BadgeCheck,
  },
  {
    title: 'Results That Matter',
    text: 'We focus on what moves the needle: growth, leads, and revenue.',
    icon: Trophy,
  },
]

export const packages = [
  {
    name: 'Starter',
    text: 'Perfect for startups and small businesses',
    icon: Star,
    items: ['Website Design', 'Basic SEO', 'Social Media Setup', 'Email Support'],
  },
  {
    name: 'Growth',
    text: 'Ideal for growing businesses',
    icon: Star,
    popular: true,
    items: [
      'Custom Website',
      'SEO & Content Strategy',
      'Social Media Management',
      'Analytics & Reporting',
    ],
  },
  {
    name: 'Premium',
    text: 'For established brands aiming higher',
    icon: Crown,
    items: [
      'Advanced Website',
      'SEO & Paid Campaigns',
      'Full Automation',
      'Priority Support',
    ],
  },
]

export const faqs = [
  'What services do you offer?',
  'How long does a typical project take?',
  'Will my website be mobile-friendly?',
  'Do you offer ongoing support?',
  'Can you work with existing websites or brands?',
  'How do we get started?',
]
