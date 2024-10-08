import React from 'react';
import { Stat } from './Stat';
import { LucideIcon } from 'lucide-react';

interface StatItem {
  icon: LucideIcon;
  value: string | number;
  label: string;
}

interface StatRowProps {
  stats: StatItem[];
}

export function StatRow({ stats }: StatRowProps) {
  return (
    <div className="bg-slate-900 py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          {stats.map((stat, index) => (
            <Stat key={index} icon={stat.icon} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </div>
  );
}