import {
  CalendarCheck,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react'

export const contactMethods = [
  {
    title: 'Email Us',
    text: 'Send your project details and we will reply with the next best steps.',
    value: 'samad04.in@gmail.com',
    icon: Mail,
  },
  {
    title: 'Call Us',
    text: 'Speak directly with our team for project fit and timelines.',
    value: '+91 9096345086',
    icon: Phone,
  },
  {
    title: 'WhatsApp',
    text: 'Quick questions, consultation booking, and project updates.',
    value: 'Chat with Novara',
    icon: MessageCircle,
  },
  {
    title: 'Location',
    text: 'Serving brands globally with remote-first digital delivery.',
    value: 'India and worldwide',
    icon: MapPin,
  },
]

export const projectTypes = [
  'Website Design',
  'Branding',
  'Social Media',
  'SEO Growth',
  'Automation',
  'UI/UX Design',
]

export const consultationSteps = [
  {
    title: 'Tell Us Your Goal',
    text: 'Share where your brand is today and what you want to improve.',
    icon: Target,
  },
  {
    title: 'Get a Clear Direction',
    text: 'We recommend the right digital solution, timeline, and priorities.',
    icon: Sparkles,
  },
  {
    title: 'Start With Confidence',
    text: 'You get a practical roadmap before we begin design, build, or growth work.',
    icon: CalendarCheck,
  },
]

export const trustNotes = [
  { label: 'Response within 24 hours', icon: Clock3 },
  { label: 'Strategy-first consultation', icon: ShieldCheck },
  { label: 'Built for long-term partnership', icon: Users },
]
