import {
  BarChart3,
  Bot,
  Box,
  Code2,
  Crosshair,
  Diamond,
  Eye,
  Handshake,
  Headphones,
  Lightbulb,
  Mail,
  PenTool,
  Puzzle,
  Rocket,
  Search,
  ShieldCheck,
  Star,
  Target,
  Trophy,
  Users,
} from 'lucide-react'

import Button from '../components/Button'
import GlassCard from '../components/GlassCard'
import SectionBadge from '../components/SectionBadge'

const heroCards = [
  {
    title: 'Digital Strategy',
    text: 'Smart plans for sustainable growth.',
    icon: BarChart3,
    className: 'left-[49%] top-[4%] -translate-x-1/2',
  },
  {
    title: 'Web & Tech',
    text: 'High-performance web experiences.',
    icon: Code2,
    className: 'left-[90%] top-15 -translate-x-1/2',
  },
  {
    title: 'Creative Design',
    text: 'Stunning visuals that build strong brands.',
    icon: PenTool,
    className: 'left-[9%] top-2 -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Marketing Growth',
    text: 'Data-driven marketing ',
    icon: BarChart3,
    className: 'left-[80%] top-40 -translate-x-1/2 -translate-y-1/2',
  },
  {
    title: 'Automation',
    text: 'Streamline. Automate. Scale efficiently.',
    icon: Bot,
    className: 'left-40 bottom-20 -translate-x-1/2',
  },
]

const values = [
  {
    title: 'Innovation',
    text: 'We embrace new ideas and technologies to build future-ready solutions.',
    icon: Lightbulb,
  },
  {
    title: 'Trust',
    text: 'We believe in transparency, honesty, and long-term relationships.',
    icon: ShieldCheck,
  },
  {
    title: 'Quality',
    text: 'We deliver high-quality work that exceeds expectations.',
    icon: Diamond,
  },
  {
    title: 'Creativity',
    text: 'We combine creativity with strategy to craft unique experiences.',
    icon: PenTool,
  },
  {
    title: 'Strategy',
    text: 'Every decision is backed by data, research, and business goals.',
    icon: Trophy,
  },
  {
    title: 'Client Success',
    text: 'Your success is our success. We grow together.',
    icon: Users,
  },
]

const differentiators = [
  {
    title: 'Holistic Approach',
    text: 'Strategy, design, technology, and marketing all under one roof.',
    icon: Box,
  },
  {
    title: 'Custom Solutions',
    text: 'Tailored strategies designed to solve your unique business challenges.',
    icon: Puzzle,
  },
  {
    title: 'Data-Driven Results',
    text: 'We rely on data, insights, and analytics to deliver measurable growth.',
    icon: BarChart3,
  },
  {
    title: 'Agile & Transparent',
    text: 'We stay agile, communicate clearly, and keep you involved at every step.',
    icon: Target,
  },
  {
    title: 'Long-Term Partnership',
    text: 'We build lasting relationships focused on long-term success.',
    icon: Handshake,
  },
]

const process = [
  {
    number: '01',
    title: 'Discover',
    text: 'We learn about your business, audience, and goals.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Strategy',
    text: 'We craft a data-driven strategy aligned with your objectives.',
    icon: Crosshair,
  },
  {
    number: '03',
    title: 'Design & Develop',
    text: 'We design, build, and develop with precision and creativity.',
    icon: Code2,
  },
  {
    number: '04',
    title: 'Launch & Optimize',
    text: 'We launch, test, and optimize for the best performance.',
    icon: Rocket,
  },
  {
    number: '05',
    title: 'Grow Together',
    text: 'We analyze, refine, and scale for sustainable growth.',
    icon: BarChart3,
  },
]

const stats = [
  { value: '200+', label: 'Projects Completed', icon: Rocket },
  { value: '98%', label: 'Client Satisfaction', icon: Trophy },
  { value: '5+', label: 'Years of Experience', icon: Users },
  { value: '50+', label: 'Happy Clients', icon: Star },
  { value: '100%', label: 'Commitment to Quality', icon: ShieldCheck },
  { value: '24/7', label: 'Support & Partnership', icon: Headphones },
]

const leaders = [
  { name: 'Aarav Mehta', role: 'Founder & CEO', tone: 'from-cyan-300 to-blue-700' },
  { name: 'Priya Sharma', role: 'Head of Strategy', tone: 'from-fuchsia-300 to-violet-800' },
  { name: 'Rohan Verma', role: 'Head of Design', tone: 'from-sky-300 to-indigo-800' },
  { name: 'Neha Iyer', role: 'Marketing Director', tone: 'from-violet-300 to-purple-900' },
  { name: 'Vikram Singh', role: 'Head of Technology', tone: 'from-blue-300 to-violet-800' },
]

const trustItems = ['Strategy First', 'Results Driven', 'Long-Term Partner']

function MiniIconCard({ icon: Icon, title, text, className }) {
  return (
    <GlassCard
      className={`absolute z-20 w-[150px] p-4 max-sm:relative max-sm:left-auto max-sm:right-auto max-sm:top-auto max-sm:bottom-auto max-sm:w-full max-sm:translate-x-0 max-sm:translate-y-0 ${className}`}
      glow
    >
      <Icon className="mb-3 h-8 w-8 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.9)]" />
      <h3 className="text-sm font-black text-white">{title}</h3>
      <p className="mt-1 text-[11px] leading-5 text-[#B9C2DA]">{text}</p>
    </GlassCard>
  )
}

function AboutHeroGraphic() {
  return (
    <div className="relative min-h-[590px] overflow-visible max-sm:grid max-sm:min-h-0 max-sm:grid-cols-2 max-sm:gap-3">
      <div className="pointer-events-none absolute -right-24 top-5 h-[500px] w-[500px] rounded-[48%] bg-[radial-gradient(circle,rgba(87,97,255,0.9)_1px,transparent_1.6px)] bg-[length:13px_13px] opacity-45 [animation:waveDrift_9s_ease-in-out_infinite_alternate] [mask-image:radial-gradient(circle,black_0_54%,transparent_74%)] max-sm:hidden" />
      <div className="absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(47,128,255,0.25),transparent_64%)] blur-2xl max-sm:hidden" />
      <div className="absolute left-1/2 top-[47%] h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-300/35 shadow-[inset_0_0_38px_rgba(47,128,255,0.22),0_0_45px_rgba(47,128,255,0.22)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[47%] h-[245px] w-[245px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-400/50 shadow-[inset_0_0_35px_rgba(124,58,237,0.25),0_0_60px_rgba(124,58,237,0.28)] max-sm:hidden" />
      <div className="absolute left-1/2 top-[47%] grid h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-[radial-gradient(circle_at_28%_20%,rgba(0,229,255,0.42),transparent_30%),radial-gradient(circle_at_75%_70%,rgba(139,92,246,0.5),transparent_34%),rgba(9,14,42,0.86)] shadow-[0_0_42px_rgba(0,229,255,0.35),0_0_90px_rgba(124,58,237,0.48),inset_0_0_30px_rgba(255,255,255,0.12)] max-sm:hidden">
        <span className="font-['Sora'] text-[7rem] font-black leading-none tracking-[-0.13em] text-white drop-shadow-[0_0_22px_rgba(0,229,255,0.8)]">
          N
        </span>
      </div>
      <div className="pointer-events-none absolute inset-x-[13%] top-[47%] h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent max-sm:hidden" />
      <div className="pointer-events-none absolute left-1/2 top-[47%] h-[430px] w-px -translate-x-1/2 -translate-y-1/2 rotate-60 bg-gradient-to-b from-transparent via-violet-400/55 to-transparent max-sm:hidden" />

      {heroCards.map((card) => (
        <MiniIconCard key={card.title} {...card} />
      ))}
    </div>
  )
}

function CityIllustration() {
  const towers = [
    'h-[112px]',
    'h-[170px]',
    'h-[84px]',
    'h-[142px]',
    'h-[102px]',
    'h-[128px]',
  ]

  return (
    <div className="relative min-h-[215px] overflow-hidden rounded-[18px] border border-cyan-300/18 bg-[radial-gradient(circle_at_50%_75%,rgba(0,229,255,0.24),transparent_35%),linear-gradient(180deg,rgba(47,128,255,0.13),rgba(2,5,18,0.6))] p-5">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.1)_1px,transparent_1px)] bg-[length:34px_34px] [mask-image:linear-gradient(to_top,black,transparent_80%)]" />
      <div className="absolute bottom-8 left-8 right-8 flex items-end justify-center gap-3">
        {towers.map((height, index) => (
          <div
            key={height + index}
            className={`${height} w-8 rounded-t-[18px] border border-cyan-300/35 bg-gradient-to-b from-cyan-300/25 to-blue-950/70 shadow-[0_0_24px_rgba(0,229,255,0.28)]`}
          />
        ))}
      </div>
      <div className="absolute bottom-7 left-6 right-6 h-px bg-cyan-300/55 shadow-[0_0_22px_rgba(0,229,255,0.8)]" />
    </div>
  )
}

function SectionTitle({ eyebrow, title, text }) {
  return (
    <div>
      <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8EA2FF]">
        {eyebrow}
      </p>
      {title && (
        <h2 className="mt-2 text-2xl font-black leading-tight tracking-[-0.03em] text-white sm:text-3xl">
          {title}
        </h2>
      )}
      {text && <p className="mt-3 text-sm leading-6 text-[#B8C1D8]">{text}</p>}
    </div>
  )
}

function IconPanel({ icon: Icon, title, text }) {
  return (
    <GlassCard className="p-5 text-center">
      <Icon className="mx-auto h-10 w-10 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.75)]" />
      <h3 className="mt-3 text-sm font-black text-white">{title}</h3>
      <p className="mt-2 text-xs leading-5 text-[#B9C2DA]">{text}</p>
    </GlassCard>
  )
}

function LeaderCard({ leader }) {
  return (
    <GlassCard className="p-4 text-center">
      <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border border-cyan-300/30 bg-[#070b20] shadow-[0_0_30px_rgba(47,128,255,0.25)]">
        <div
          className={`mx-auto mt-4 h-24 w-20 rounded-[50%_50%_42%_42%] bg-gradient-to-br ${leader.tone} opacity-95 shadow-[0_0_34px_rgba(0,229,255,0.35)] [clip-path:polygon(50%_0,75%_11%,86%_38%,72%_74%,94%_100%,6%_100%,28%_74%,14%_38%,25%_11%)]`}
        />
      </div>
      <h3 className="mt-4 text-sm font-black text-white">{leader.name}</h3>
      <p className="text-xs text-[#AAB2C8]">{leader.role}</p>
      <div className="mt-3 flex justify-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/12 bg-white/[0.05] text-[10px] font-bold text-cyan-200">
          in
        </span>
        <span className="grid h-7 w-7 place-items-center rounded-lg border border-white/12 bg-white/[0.05] text-cyan-200">
          <Mail className="h-3.5 w-3.5" />
        </span>
      </div>
    </GlassCard>
  )
}

function AboutPage() {
  return (
    <div className="relative z-10 mx-auto max-w-[1280px] px-5 pb-8 pt-32 lg:px-8">
      <section className="grid min-h-[650px] items-center gap-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div>
          <SectionBadge className="normal-case tracking-normal">
            About Our Company
          </SectionBadge>
          <h1 className="mt-5 text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-[4.85rem]">
            About{' '}
            <span className="bg-gradient-to-r from-[#8B5CF6] via-[#2F80FF] to-[#00E5FF] bg-clip-text text-transparent">
              Novara
            </span>
            <span className="block bg-gradient-to-r from-[#00E5FF] via-[#2F80FF] to-[#8B5CF6] bg-clip-text text-transparent">
              Digital Services
            </span>
          </h1>
          <p className="mt-4 max-w-[560px] text-2xl font-extrabold leading-tight text-white">
            Your Growth-Focused Digital Partner for Modern Brands.
          </p>
          <p className="mt-5 max-w-[585px] text-lg leading-8 text-[#D6DCF1]">
            We combine strategy, creativity, and technology to build powerful
            digital experiences that drive growth, engagement, and long-term
            success.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href="/contact">Book a Free Consultation</Button>
            <Button href="/services" variant="secondary">
              Explore Our Services
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-9 gap-y-4">
            {trustItems.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="grid h-6 w-6 place-items-center rounded-full border border-cyan-300/35 bg-cyan-300/10 text-cyan-200 shadow-[0_0_14px_rgba(0,229,255,0.35)]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                <span className="text-sm font-bold text-white/82">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <AboutHeroGraphic />
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.08fr_1fr]">
        <GlassCard className="grid gap-6 p-5 md:grid-cols-[0.74fr_1fr]">
          <CityIllustration />
          <div className="self-center">
            <SectionTitle
              eyebrow="Our Story"
              title="Driven by Passion. Focused on Your Growth."
            />
            <div className="mt-4 space-y-3 text-sm leading-6 text-[#B8C1D8]">
              <p>
                Novara Digital Services was founded with a simple belief: great
                digital experiences can transform businesses.
              </p>
              <p>
                From day one, we have partnered with startups, SMBs, and
                enterprises to turn ideas into powerful brands and scalable
                digital solutions.
              </p>
              <p>
                Today, we continue to innovate, adapt, and deliver measurable
                results in a digital world that never stands still.
              </p>
            </div>
          </div>
        </GlassCard>

        <GlassCard className="p-5">
          <SectionTitle eyebrow="Mission & Vision" />
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <GlassCard className="p-7">
              <Target className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.8)]" />
              <h3 className="mt-5 text-xl font-black text-white">Our Mission</h3>
              <p className="mt-5 text-sm leading-7 text-[#C1C9DD]">
                To empower businesses with innovative digital solutions that
                drive growth, efficiency, and meaningful impact.
              </p>
            </GlassCard>
            <GlassCard className="p-7">
              <Eye className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_16px_rgba(0,229,255,0.8)]" />
              <h3 className="mt-5 text-xl font-black text-white">Our Vision</h3>
              <p className="mt-5 text-sm leading-7 text-[#C1C9DD]">
                To be the most trusted digital partner for modern brands,
                recognized for creativity, technology, and results.
              </p>
            </GlassCard>
          </div>
        </GlassCard>
      </section>

      <GlassCard className="mt-5 p-5">
        <SectionTitle eyebrow="Core Values" />
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {values.map((value) => (
            <IconPanel key={value.title} {...value} />
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-5 grid gap-5 p-5 lg:grid-cols-[0.92fr_4fr]">
        <SectionTitle
          eyebrow="Why Choose Novara"
          title="What Makes Us Different"
          text="We go beyond services. We become your growth partner."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {differentiators.map((item) => (
            <IconPanel key={item.title} {...item} />
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-5 p-5">
        <SectionTitle eyebrow="Our Process" />
        <div className="relative mt-4 grid gap-5 lg:grid-cols-5">
          <div className="pointer-events-none absolute left-[10%] right-[10%] top-6 hidden h-px bg-cyan-300/70 shadow-[0_0_20px_rgba(0,229,255,0.7)] lg:block" />
          {process.map((step) => {
            const Icon = step.icon

            return (
              <div key={step.number} className="relative z-10 grid gap-3 sm:grid-cols-[72px_1fr] lg:block">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-cyan-300/55 bg-[#121852] text-lg font-black text-white shadow-[0_0_24px_rgba(47,128,255,0.65)]">
                  {step.number}
                </div>
                <div className="mt-4 flex gap-4 lg:mt-6">
                  <Icon className="h-9 w-9 shrink-0 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.75)]" />
                  <div>
                    <h3 className="text-sm font-black text-white">{step.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-[#B9C2DA]">
                      {step.text}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </GlassCard>

      <GlassCard className="mt-5 p-5">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          {stats.map((item) => {
            const Icon = item.icon

            return (
              <div key={item.label} className="flex items-center gap-4">
                <Icon className="h-11 w-11 text-cyan-300 drop-shadow-[0_0_14px_rgba(0,229,255,0.85)]" />
                <div>
                  <div className="text-3xl font-black text-white">{item.value}</div>
                  <p className="text-xs font-semibold text-[#B8C1D8]">{item.label}</p>
                </div>
              </div>
            )
          })}
        </div>
      </GlassCard>

      <GlassCard className="mt-5 grid gap-5 p-5 lg:grid-cols-[0.9fr_4.1fr]">
        <SectionTitle
          eyebrow="Our Leadership"
          title="The Minds Behind Your Success"
          text="A passionate team of strategists, creatives, and technologists committed to your growth."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {leaders.map((leader) => (
            <LeaderCard key={leader.name} leader={leader} />
          ))}
        </div>
      </GlassCard>

      <GlassCard className="mt-7 overflow-hidden p-5 sm:p-7">
        <div className="relative grid items-center gap-5 md:grid-cols-[130px_1fr_auto]">
          <div className="grid h-24 w-24 place-items-center rounded-[18px] border border-white/12 bg-[radial-gradient(circle_at_30%_20%,rgba(0,229,255,0.35),transparent_35%),linear-gradient(135deg,rgba(47,128,255,0.34),rgba(124,58,237,0.3))] shadow-[0_0_35px_rgba(47,128,255,0.28)]">
            <span className="font-['Sora'] text-6xl font-black leading-none tracking-[-0.13em] text-white">
              N
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-black tracking-[-0.03em] text-white sm:text-3xl">
              Let's Build Something Exceptional Together
            </h2>
            <p className="mt-2 text-base text-[#D6DCF1]">
              Ready to take your brand to the next level? We're here to help.
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

export default AboutPage
