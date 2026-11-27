import React from 'react'
import * as Lucide from 'lucide-react'

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string
  className?: string
  size?: number | string
}

const iconMap: Record<string, React.ComponentType<any>> = {
  groups: Lucide.Users,
  precision_manufacturing: Lucide.Cpu,
  verified: Lucide.BadgeCheck,
  verified_user: Lucide.ShieldCheck,
  biotech: Lucide.Dna,
  shield: Lucide.Shield,
  inventory_2: Lucide.Archive,
  science: Lucide.FlaskConical,
  gavel: Lucide.Gavel,
  coronavirus: Lucide.Virus,
  emergency: Lucide.AlertCircle,
  expand_more: Lucide.ChevronDown,
  arrow_forward: Lucide.ArrowRight,
  arrow_back: Lucide.ArrowLeft,
  call: Lucide.Phone,
  mail: Lucide.Mail,
  mark_email_read: Lucide.MailCheck,
  language: Lucide.Globe,
  public: Lucide.Globe2,
  chevron_right: Lucide.ChevronRight,
  check: Lucide.Check,
  check_circle: Lucide.CheckCircle2,
  task_alt: Lucide.CheckCircle,
  schedule: Lucide.Clock,
  location_on: Lucide.MapPin,
  place: Lucide.MapPin,
  location_city: Lucide.Building,
  domain: Lucide.Building,
  corporate_fare: Lucide.Building2,
  person: Lucide.User,
  support_agent: Lucide.Headphones,
  calendar_today: Lucide.Calendar,
  chat: Lucide.MessageSquare,
  share: Lucide.Share2,
  search: Lucide.Search,
  filter_list: Lucide.Filter,
  visibility: Lucide.Eye,
  send: Lucide.Send,
  link: Lucide.Link2,
  badge: Lucide.Award,
  school: Lucide.GraduationCap,
  speed: Lucide.Gauge,
  star: Lucide.Star,
  article: Lucide.FileText,
  clinical_notes: Lucide.ClipboardList,
  rule: Lucide.ClipboardCheck,
  policy: Lucide.ShieldCheck,
  format_quote: Lucide.Quote,
  photo_camera: Lucide.Camera,
  phone_iphone: Lucide.Smartphone,
  alternate_email: Lucide.AtSign,
  build_circle: Lucide.Wrench,
  flag: Lucide.Flag,
  menu: Lucide.Menu,
  close: Lucide.X,
}

export default function Icon({ name, className = '', size = 20, ...props }: IconProps) {
  const Component = iconMap[name.trim()] || Lucide.HelpCircle
  return <Component className={`inline-block ${className}`} size={size} {...props} />
}
