import {
  ArrowRight,
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
  Plus,
  Rocket,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  WandSparkles,
} from 'lucide-react'

import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import SectionBadge from '../components/SectionBadge'

const orbitServices = [
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

const coreServices = [
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

const serviceBreakdown = [
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

const workflow = [
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

const resultCards = [
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

const packages = [
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

const faqs = [
  'What services do you offer?',
  'How long does a typical project take?',
  'Will my website be mobile-friendly?',
  'Do you offer ongoing support?',
  'Can you work with existing websites or brands?',
  'How do we get started?',
]

function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-xl font-black tracking-[-0.02em] text-white ${className}`}>
      {children}
    </h2>
  )
}

function OrbitCard({ icon: Icon, title, className }) {
  return (
    <GlassCard
      className={`absolute z-20 grid h-[108px] w-[118px] place-items-center p-3 text-center max-sm:relative max-sm:left-auto max-sm:top-auto max-sm:h-full max-sm:w-full max-sm:translate-x-0 max-sm:translate-y-0 ${className}`}
      glow
    >
      <Icon className="h-9 w-9 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.9)]" />
      <h3 className="text-xs font-black leading-tight text-white">{title}</h3>
    </GlassCard>
  )
}

function ServicesHeroGraphic() {
  return (
    <div className="relative min-h-[500px] overflow-visible max-sm:grid max-sm:min-h-0 max-sm:grid-cols-2 max-sm:gap-3">
      <div className="pointer-events-none absolute -right-28 top-10 h-[430px] w-[430px] rounded-[45%] bg-[radial-gradient(circle,rgba(100,80,255,0.9)_1px,transparent_1.6px)] bg-[length:13px_13px] opacity-45 [animation:waveDrift_10s_ease-in-out_infinite_alternate] [mask-image:radial-gradient(circle,black_0_54%,transparent_74%)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35 shadow-[inset_0_0_38px_rgba(47,128,255,0.2),0_0_46px_rgba(47,128,255,0.24)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] h-[250px] w-[250px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/55 shadow-[inset_0_0_35px_rgba(124,58,237,0.25),0_0_60px_rgba(124,58,237,0.3)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] h-[145px] w-[145px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(0,229,255,0.28),transparent_65%)] blur-xl max-sm:hidden" />
      <div className="absolute left-1/2 top-[43%] grid h-[132px] w-[132px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-[34px] border border-white/20 bg-[radial-gradient(circle_at_28%_20%,rgba(0,229,255,0.42),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.55),transparent_34%),linear-gradient(135deg,rgba(47,128,255,0.75),rgba(124,58,237,0.72))] shadow-[0_0_42px_rgba(0,229,255,0.35),0_0_90px_rgba(124,58,237,0.48),inset_0_0_30px_rgba(255,255,255,0.12)] max-sm:hidden">
        <span className="font-['Sora'] text-[6.5rem] font-black leading-none tracking-[-0.13em] text-white drop-shadow-[0_0_22px_rgba(0,229,255,0.8)]">
          N
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-[10%] top-[43%] hidden h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent shadow-[0_0_18px_rgba(0,229,255,0.8)] lg:block" />
      <div className="pointer-events-none absolute left-1/2 top-[43%] hidden h-[410px] w-px -translate-x-1/2 -translate-y-1/2 rotate-90 bg-gradient-to-b from-transparent via-violet-400/45 to-transparent lg:block" />

      {orbitServices.map((service) => (
        <OrbitCard key={service.title} {...service} />
      ))}
    </div>
  )
}

function CoreServiceCard({ service }) {
  const Icon = service.icon

  return (
    <GlassCard className="group flex h-full flex-col p-5 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/55 hover:shadow-[0_0_36px_rgba(47,128,255,0.22)]">
      <div className="flex items-start gap-4">
        <div className="grid h-14 w-14 shrink-0 place-items-center rounded-[14px] border border-cyan-300/25 bg-gradient-to-br from-cyan-300/15 to-violet-500/20 shadow-[0_0_22px_rgba(0,229,255,0.22)]">
          <Icon className="h-8 w-8 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.85)]" />
        </div>
        <div>
          <h3 className="text-sm font-black leading-tight text-white">{service.title}</h3>
          <p className="mt-3 text-xs leading-5 text-[#B9C2DA]">{service.text}</p>
        </div>
      </div>
      <a href="/contact" className="mt-auto inline-flex items-center gap-2 pt-6 text-xs font-black text-[#8EA2FF]">
        Learn More <ArrowRight className="h-3.5 w-3.5" />
      </a>
    </GlassCard>
  )
}

function BreakdownRow({ item }) {
  const Icon = item.icon
  const Visual = item.visual

  return (
    <GlassCard className="grid items-center gap-4 p-4 md:grid-cols-[64px_1.1fr_1.35fr_120px_24px]">
      <div className="grid h-14 w-14 place-items-center rounded-[14px] border border-cyan-300/25 bg-cyan-300/10">
        <Icon className="h-8 w-8 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
      </div>
      <div>
        <h3 className="text-base font-black text-white">{item.title}</h3>
        <p className="mt-2 text-xs leading-5 text-[#AAB2C8]">{item.text}</p>
      </div>
      <ul className="grid gap-1.5 text-xs text-[#B9C2DA] sm:grid-cols-2 md:grid-cols-1">
        {item.points.map((point) => (
          <li key={point} className="flex items-center gap-2">
            <BadgeCheck className="h-3.5 w-3.5 text-violet-300" />
            {point}
          </li>
        ))}
      </ul>
      <div className="hidden justify-self-center md:block">
        <Visual className="h-20 w-20 text-cyan-300 drop-shadow-[0_0_18px_rgba(0,229,255,0.85)]" />
      </div>
      <ArrowRight className="hidden h-6 w-6 text-white/80 md:block" />
    </GlassCard>
  )
}

function WorkflowPanel() {
  return (
    <GlassCard className="h-full p-6">
      <SectionTitle>Our Service Workflow</SectionTitle>
      <div className="relative mt-6 grid gap-6">
        <div className="absolute bottom-10 left-6 top-8 w-px bg-gradient-to-b from-cyan-300 via-violet-500 to-transparent shadow-[0_0_18px_rgba(0,229,255,0.65)]" />
        {workflow.map((step) => {
          const Icon = step.icon

          return (
            <div key={step.number} className="relative grid grid-cols-[56px_1fr_54px] items-center gap-4">
              <div className="relative z-10 grid h-12 w-12 place-items-center rounded-full border border-cyan-300/55 bg-[#10164A] text-lg font-black shadow-[0_0_22px_rgba(47,128,255,0.5)]">
                {step.number}
              </div>
              <div>
                <h3 className="text-sm font-black text-white">{step.title}</h3>
                <p className="mt-1 text-xs leading-5 text-[#AAB2C8]">{step.text}</p>
              </div>
              <div className="grid h-12 w-12 place-items-center rounded-full border border-violet-300/35 bg-violet-500/10">
                <Icon className="h-6 w-6 text-cyan-300 drop-shadow-[0_0_12px_rgba(0,229,255,0.8)]" />
              </div>
            </div>
          )
        })}
      </div>
    </GlassCard>
  )
}

function ResultCard({ card }) {
  const Icon = card.icon

  return (
    <GlassCard className="h-full p-5 text-center">
      <Icon className="mx-auto h-10 w-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
      <h3 className="mt-4 text-sm font-black leading-tight text-white">{card.title}</h3>
      <p className="mt-3 text-xs leading-5 text-[#B9C2DA]">{card.text}</p>
    </GlassCard>
  )
}

function PackageCard({ pack }) {
  const Icon = pack.icon

  return (
    <GlassCard
      className={`relative h-full p-6 ${pack.popular ? 'border-violet-400/70 shadow-[0_0_38px_rgba(124,58,237,0.42)]' : ''}`}
      glow={pack.popular}
    >
      {pack.popular && (
        <span className="absolute right-4 top-3 rounded-full bg-gradient-to-r from-cyan-300 to-violet-500 px-3 py-1 text-[10px] font-black text-white">
          Most Popular
        </span>
      )}
      <Icon className="h-10 w-10 text-cyan-300 drop-shadow-[0_0_15px_rgba(0,229,255,0.85)]" />
      <h3 className="mt-4 text-xl font-black text-white">{pack.name}</h3>
      <p className="mt-2 min-h-[40px] text-xs leading-5 text-[#B9C2DA]">{pack.text}</p>
      <ul className="mt-5 grid gap-2 text-xs text-[#C1C9DD]">
        {pack.items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <BadgeCheck className="h-3.5 w-3.5 text-violet-300" />
            {item}
          </li>
        ))}
      </ul>
      <a href="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#8EA2FF]">
        Get Started <ArrowRight className="h-4 w-4" />
      </a>
    </GlassCard>
  )
}

function Services() {
  return (
    <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-8 pt-32 lg:px-8">
      <section className="grid min-h-[610px] items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionBadge className="normal-case tracking-normal">
            <Sparkles className="h-3.5 w-3.5 text-cyan-200" />
            Services
          </SectionBadge>
          <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.6rem]">
            Our Services
            <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Premium Digital Solutions
            </span>
            for Ambitious Brands
          </h1>
          <p className="mt-5 max-w-[575px] text-lg leading-8 text-[#D6DCF1]">
            End-to-end digital services designed to elevate your brand, drive
            growth, and deliver measurable results in the new era of digital
            excellence.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4">
            {['Strategic Approach', 'Result Focused', 'Scalable Solutions'].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-full border border-cyan-300/25 bg-cyan-300/10 text-cyan-200 shadow-[0_0_16px_rgba(0,229,255,0.26)]">
                  <WandSparkles className="h-4 w-4" />
                </span>
                <span className="text-sm font-bold text-white/82">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <ServicesHeroGraphic />
      </section>

      <section className="mt-2">
        <SectionTitle>Our Core Services</SectionTitle>
        <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {coreServices.map((service) => (
            <CoreServiceCard key={service.title} service={service} />
          ))}
        </div>
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-[1fr_310px]">
        <div>
          <SectionTitle>In-Depth Service Breakdown</SectionTitle>
          <div className="mt-3 grid gap-3">
            {serviceBreakdown.map((item) => (
              <BreakdownRow key={item.title} item={item} />
            ))}
          </div>
        </div>
        <WorkflowPanel />
      </section>

      <section className="mt-6 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <SectionTitle>Why Our Services Deliver Results</SectionTitle>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {resultCards.map((card) => (
              <ResultCard key={card.title} card={card} />
            ))}
          </div>
        </div>
        <div>
          <SectionTitle>Our Packages</SectionTitle>
          <div className="mt-3 grid gap-4 sm:grid-cols-3 lg:grid-cols-3">
            {packages.map((pack) => (
              <PackageCard key={pack.name} pack={pack} />
            ))}
          </div>
        </div>
      </section>

      <section className="mt-6">
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {faqs.map((faq) => (
            <GlassCard key={faq} className="flex items-center justify-between gap-4 px-5 py-3">
              <span className="text-sm font-bold text-white">{faq}</span>
              <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-violet-300/35 bg-violet-500/10 text-cyan-200">
                <Plus className="h-4 w-4" />
              </span>
            </GlassCard>
          ))}
        </div>
      </section>

      <GlassCard className="mt-6 overflow-hidden p-5 sm:p-7" glow>
        <div className="relative grid items-center gap-5 md:grid-cols-[100px_1fr_auto]">
          <div className="grid h-20 w-20 place-items-center rounded-[18px] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/18 to-violet-500/24 shadow-[0_0_30px_rgba(47,128,255,0.28)]">
            <Rocket className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.85)]" />
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
              Ready to Elevate Your Brand?
            </h2>
            <p className="mt-2 text-base text-[#D6DCF1]">
              Let's build something extraordinary together.
            </p>
          </div>
          <Button href="/contact" className="md:px-9">
            Book a Free Consultation
          </Button>
        </div>
      </GlassCard>
    </div>
  )
}

export default Services
