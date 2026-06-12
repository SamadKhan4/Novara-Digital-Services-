import {
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  Code2,
  Crown,
  Diamond,
  Gem,
  Camera,
  MessageCircle,
  Megaphone,
  Network,
  Palette,
  PenTool,
  Rocket,
  Search,
  ShieldCheck,
  Share2,
  Star,
  Target,
  Trophy,
  Users,
  WandSparkles,
} from "lucide-react";

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "About Us", path: "/about" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

export const trustItems = [
  { label: "Modern Design", icon: BadgeCheck },
  { label: "Fast & Secure", icon: ShieldCheck },
  { label: "Results Driven", icon: Target },
];

export const heroServices = [
  { title: "Website Development", icon: Code2, position: "top" },
  { title: "Branding & Identity", icon: PenTool, position: "rightTop" },
  { title: "Social Media Marketing", icon: Megaphone, position: "rightBottom" },
  { title: "Business Automation", icon: Bot, position: "bottom" },
  { title: "SEO & Online Growth", icon: BarChart3, position: "leftBottom" },
  { title: "UI/UX Design", icon: Palette, position: "leftTop" },
];

export const introCards = [
  {
    title: "Strategic Thinking",
    text: "We understand your business goals and create the right digital strategy.",
    icon: BrainCircuit,
  },
  {
    title: "Premium Design",
    text: "We design beautiful, modern, and conversion-focused digital experiences.",
    icon: Diamond,
  },
  {
    title: "Result-Driven Execution",
    text: "We build, optimize, and scale solutions that deliver real business results.",
    icon: Target,
  },
];

export const services = [
  {
    title: "Website Design & Development",
    description:
      "High-performance, responsive websites that convert visitors into customers.",
    icon: Code2,
  },
  {
    title: "Branding & Identity",
    description:
      "Memorable brand identities that make your business stand out from the rest.",
    icon: PenTool,
  },
  {
    title: "Social Media Marketing",
    description:
      "Creative strategies that increase engagement and build brand trust.",
    icon: Megaphone,
  },
  {
    title: "SEO & Online Growth",
    description:
      "Data-driven SEO strategies that help your business rank higher and grow.",
    icon: BarChart3,
  },
  {
    title: "Business Automation",
    description:
      "Smart workflows and automation systems that save time and improve efficiency.",
    icon: Bot,
  },
  {
    title: "UI/UX Design",
    description:
      "Clean, user-friendly interfaces built for better experience and conversions.",
    icon: Palette,
  },
];

export const processSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, audience, market, and brand direction.",
    icon: Search,
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create premium visuals and user experiences aligned with your brand.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build fast, responsive, and scalable digital solutions that perform.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Grow",
    description:
      "We optimize, market, and improve your digital presence continuously.",
    icon: Rocket,
  },
];

export const portfolio = [
  {
    title: "Startup Website Concept",
    category: "Website",
    type: "startup",
  },
  {
    title: "Restaurant Brand Identity",
    category: "Branding",
    type: "branding",
  },
  {
    title: "E-commerce Landing Page",
    category: "E-commerce",
    type: "ecommerce",
  },
  {
    title: "Business Automation Dashboard",
    category: "Automation",
    type: "dashboard",
  },
  {
    title: "Social Media Campaign",
    category: "Marketing",
    type: "campaign",
  },
];

export const stats = [
  { value: "200+", label: "Projects Completed", icon: Rocket },
  { value: "98%", label: "Client Satisfaction", icon: Trophy },
  { value: "100%", label: "Responsive Design", icon: Star },
  { value: "50+", label: "Happy Clients", icon: Crown },
  { value: "5+", label: "Years of Experience", icon: Gem },
];

export const testimonials = [
  {
    text: "Novara transformed our online presence with a clean, professional website that truly represents our brand. Highly recommended!",
    name: "Arjun Mehta",
    role: "Founder, Nexora",
    gradient: "from-cyan-400 to-violet-500",
  },
  {
    text: "Amazing team, great communication, and outstanding results. Our business has grown significantly after their strategies.",
    name: "Priya Sharma",
    role: "Marketing Head, Bloomora",
    gradient: "from-violet-400 to-fuchsia-500",
  },
  {
    text: "From branding to automation, everything was handled professionally. The best digital partner we've worked with.",
    name: "Rohit Verma",
    role: "CEO, BuildCraft",
    gradient: "from-blue-400 to-purple-500",
  },
];

export const footerLinks = {
  quick: ["Home", "About Us", "Portfolio", "Testimonials", "Contact"],
  services: [
    "Website Design & Development",
    "Branding & Identity",
    "Social Media Marketing",
    "SEO & Online Growth",
    "Business Automation",
    "UI/UX Design",
  ],
};

export const socialLinks = [
  { label: "Facebook", icon: Share2 },
  { label: "Instagram", icon: Camera },
  { label: "LinkedIn", icon: Network },
  { label: "WhatsApp", icon: MessageCircle },
];

export const projectIcon = ArrowUpRight;
export const sparkleIcon = WandSparkles;
export const usersIcon = Users;
