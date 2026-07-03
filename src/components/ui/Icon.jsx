import {
  BadgeCheck,
  Car,
  Landmark,
  Rocket,
  RefreshCw,
  Users,
  Wrench,
  Sparkles,
  Calculator,
  ShieldCheck,
  Zap,
  Building2,
  FileCheck,
  Gift,
  Fuel,
  Gauge,
  Smartphone,
  Mountain,
  Package,
} from 'lucide-react'

/** Maps the icon-name strings used in data files to Lucide components. */
const ICONS = {
  BadgeCheck,
  Car,
  Landmark,
  Rocket,
  RefreshCw,
  Users,
  Wrench,
  Sparkles,
  Calculator,
  ShieldCheck,
  Zap,
  Building2,
  FileCheck,
  Gift,
  Fuel,
  Gauge,
  Smartphone,
  Mountain,
  Package,
}

export default function Icon({ name, ...rest }) {
  const Cmp = ICONS[name] || Sparkles
  return <Cmp {...rest} />
}
