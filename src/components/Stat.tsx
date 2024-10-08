import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatProps {
  icon: LucideIcon;
  value: string | number;
  label: string;
}

export function Stat({ icon: Icon, value, label }: StatProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-slate-800 p-3 rounded-lg mb-2">
        <Icon className="w-6 h-6 text-yellow-500" />
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className="text-slate-300">{label}</div>
    </div>
  );
}