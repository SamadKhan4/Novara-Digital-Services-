import { BarChart3, Code2, Megaphone, PenTool, Rocket, Trophy } from 'lucide-react'

export const portfolioStats = [
  { value: '200+', label: 'Projects Delivered', icon: Rocket },
  { value: '98%', label: 'Client Satisfaction', icon: Trophy },
  { value: '6', label: 'Digital Capabilities', icon: BarChart3 },
]

export const portfolioCategories = [
  'All Projects',
  'Website',
  'Branding',
  'E-commerce',
  'Automation',
  'Marketing',
]

export const projectDetails = {
  startup: {
    icon: Code2,
    summary: 'A polished SaaS-style website concept built for clarity, credibility, and conversion.',
    outcomes: ['Conversion-led layout', 'Responsive UI system', 'Fast launch-ready structure'],
  },
  branding: {
    icon: PenTool,
    summary: 'A complete identity direction for a hospitality brand with premium visual presence.',
    outcomes: ['Logo direction', 'Visual language', 'Digital-ready assets'],
  },
  ecommerce: {
    icon: Rocket,
    summary: 'A product-focused landing page designed to turn visitors into buyers.',
    outcomes: ['Product storytelling', 'Trust-building sections', 'Mobile-first flow'],
  },
  dashboard: {
    icon: BarChart3,
    summary: 'A business automation interface for tracking workflows, leads, and performance.',
    outcomes: ['Workflow visibility', 'CRM-friendly layout', 'Actionable metrics'],
  },
  campaign: {
    icon: Megaphone,
    summary: 'A social campaign system designed for consistent brand recall across channels.',
    outcomes: ['Campaign concept', 'Post series direction', 'Engagement-focused design'],
  },
}
