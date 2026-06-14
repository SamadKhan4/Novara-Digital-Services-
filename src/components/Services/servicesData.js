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
    title: 'Website Development',
    icon: Code2,
    className: 'left-1/2 top-25 -translate-x-1/2',
  },
  {
    title: 'Branding & Identity',
    icon: PenTool,
    className: 'left-[84%] top-35 -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Social Media Marketing',
    icon: Megaphone,
    className: 'left-[16%] top-[34%] -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Business Automation',
    icon: Bot,
    className: 'left-[84%] top-30 -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'SEO & Online Growth',
    icon: BarChart3,
    className: 'left-[16%] top-[66%] -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'UI/UX Design',
    icon: Palette,
    className: 'left-1/2 top-[92%] -translate-x-1/2 -translate-y-full',
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
    slug: 'website-design-development',
    text: 'High-performance websites that are beautiful, responsive, and built to convert.',
    icon: MonitorCog,
  },
  {
    title: 'Branding & Identity',
    slug: 'branding-identity',
    text: 'Memorable brand identities that connect, inspire, and set you apart.',
    icon: PenTool,
  },
  {
    title: 'Social Media Marketing',
    slug: 'social-media-marketing',
    text: 'Creative strategies that grow your brand and engage your audience.',
    icon: Megaphone,
  },
  {
    title: 'SEO & Online Growth',
    slug: 'seo-online-growth',
    text: 'Data-driven SEO strategies that boost rankings and drive organic growth.',
    icon: BarChart3,
  },
  {
    title: 'Business Automation',
    slug: 'business-automation',
    text: 'Smart workflows and automations to save time, reduce costs, and increase efficiency.',
    icon: Bot,
  },
  {
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    text: 'Clean, user-friendly experiences that improve engagement and conversions.',
    icon: MonitorCog,
  },
]

export const serviceDetails = {
  'website-design-development': {
    title: 'Website Design & Development',
    eyebrow: 'High-performance web experiences',
    intro:
      'We design and build modern websites that look premium, load fast, and guide visitors toward action.',
    icon: MonitorCog,
    outcomes: ['Stronger brand trust', 'More qualified enquiries', 'Faster user journeys'],
    deliverables: [
      'Responsive website design',
      'Frontend development',
      'CMS or custom setup',
      'Speed and SEO foundation',
      'Conversion-focused sections',
      'Launch support',
    ],
    process: [
      'Audit your goals, audience, and competitors',
      'Create wireframes and visual direction',
      'Build responsive pages with clean structure',
      'Test performance, usability, and launch readiness',
    ],
  },
  'branding-identity': {
    title: 'Branding & Identity',
    eyebrow: 'Memorable brand systems',
    intro:
      'We shape your brand into a consistent visual identity that feels credible, recognizable, and ready for growth.',
    icon: PenTool,
    outcomes: ['Clear market positioning', 'Consistent visual presence', 'Stronger brand recall'],
    deliverables: [
      'Logo direction',
      'Color and typography system',
      'Brand guidelines',
      'Social and digital assets',
      'Visual style direction',
      'Launch-ready brand kit',
    ],
    process: [
      'Understand your positioning and audience',
      'Explore visual directions and moodboards',
      'Design the identity system',
      'Prepare guidelines and usable brand assets',
    ],
  },
  'social-media-marketing': {
    title: 'Social Media Marketing',
    eyebrow: 'Growth-focused content systems',
    intro:
      'We plan and create social media campaigns that improve visibility, engagement, and trust across key platforms.',
    icon: Megaphone,
    outcomes: ['Consistent content presence', 'Higher engagement', 'Better campaign clarity'],
    deliverables: [
      'Content strategy',
      'Monthly content calendar',
      'Creative direction',
      'Post and campaign concepts',
      'Performance reporting',
      'Optimization recommendations',
    ],
    process: [
      'Define audience and content pillars',
      'Plan campaigns around business goals',
      'Create platform-ready content direction',
      'Track performance and refine monthly',
    ],
  },
  'seo-online-growth': {
    title: 'SEO & Online Growth',
    eyebrow: 'Search visibility that compounds',
    intro:
      'We improve your website structure, content, and search presence so customers can find you more easily.',
    icon: BarChart3,
    outcomes: ['Better organic visibility', 'Higher quality traffic', 'Long-term growth foundation'],
    deliverables: [
      'Keyword research',
      'Technical SEO audit',
      'On-page optimization',
      'Content recommendations',
      'Performance tracking',
      'Growth reporting',
    ],
    process: [
      'Audit current rankings and site health',
      'Map keywords to business intent',
      'Optimize pages and technical structure',
      'Review progress and improve continuously',
    ],
  },
  'business-automation': {
    title: 'Business Automation',
    eyebrow: 'Systems that save time',
    intro:
      'We connect your tools and automate repeated workflows so your team spends less time on manual tasks.',
    icon: Bot,
    outcomes: ['Reduced manual work', 'Cleaner lead handling', 'Better operational visibility'],
    deliverables: [
      'Workflow mapping',
      'CRM and tool integrations',
      'Lead capture automation',
      'Notification flows',
      'Reporting dashboards',
      'Testing and documentation',
    ],
    process: [
      'Identify repetitive tasks and bottlenecks',
      'Map the automation journey',
      'Build and connect the workflows',
      'Test reliability and train your team',
    ],
  },
  'ui-ux-design': {
    title: 'UI/UX Design',
    eyebrow: 'Interfaces users understand fast',
    intro:
      'We create intuitive digital interfaces that help users move clearly, confidently, and comfortably.',
    icon: Palette,
    outcomes: ['Better usability', 'Cleaner product flows', 'More confident users'],
    deliverables: [
      'User flow planning',
      'Wireframes',
      'High-fidelity UI design',
      'Clickable prototypes',
      'Design system basics',
      'Developer-ready handoff',
    ],
    process: [
      'Understand users and key tasks',
      'Structure flows and wireframes',
      'Design polished interface screens',
      'Refine with usability and business feedback',
    ],
  },
}

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
  {
    question: 'What services do you offer?',
    answer:
      'We offer website design and development, branding, social media marketing, SEO, business automation, and UI/UX design.',
  },
  {
    question: 'How long does a typical project take?',
    answer:
      'Most small projects take 2-4 weeks. Larger websites, automation systems, or full brand projects can take 4-8 weeks depending on scope.',
  },
  {
    question: 'Will my website be mobile-friendly?',
    answer:
      'Yes. Every website we build is responsive, fast, and designed to work smoothly across mobile, tablet, and desktop screens.',
  },
  {
    question: 'Do you offer ongoing support?',
    answer:
      'Yes. We can support updates, maintenance, performance improvements, SEO, content changes, and ongoing digital growth work.',
  },
  {
    question: 'Can you work with existing websites or brands?',
    answer:
      'Yes. We can improve, redesign, optimize, or extend your existing website or brand system without forcing you to start from zero.',
  },
  {
    question: 'How do we get started?',
    answer:
      'Contact us with your goals, timeline, and current challenges. We will review your needs and suggest the best next step.',
  },
]
