'use client';

import { Eye, Users, Clock, MousePointer2, type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, LucideIcon> = {
  eye: Eye,
  users: Users,
  clock: Clock,
  'mouse-pointer': MousePointer2,
};

interface StatsCardProps {
  title: string;
  value: string | number;
  iconName: keyof typeof iconMap;
  description?: string;
  color: 'gold' | 'navy' | 'coral' | 'green';
}

export function StatsCard({ title, value, iconName, description, color }: StatsCardProps) {
  const Icon = iconMap[iconName];
  
  const colorMap = {
    gold: 'bg-gold/10 text-gold',
    navy: 'bg-navy/10 text-navy',
    coral: 'bg-coral/10 text-coral',
    green: 'bg-green-100 text-green-600',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
    >
      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${colorMap[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
        <div>
          <p className="text-sm text-slate font-medium">{title}</p>
          <h3 className="text-2xl font-bold text-charcoal">{value}</h3>
          {description && <p className="text-xs text-slate mt-1">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
}
