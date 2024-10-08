import React from 'react';
import { Button } from '@/components/ui/button';

interface ButtonProps {
  text: string;
  variant?: 'default' | 'outline' | 'secondary';
  onClick?: () => void;
}

interface FullWidthHeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  primaryButton?: ButtonProps;
  secondaryButton?: ButtonProps;
}

export function FullWidthHero({
  backgroundImage,
  title,
  description,
  primaryButton,
  secondaryButton
}: FullWidthHeroProps) {
  return (
    <div className="relative h-screen flex items-center justify-center text-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      <div className="relative z-20 max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl mb-8">{description}</p>
        <div className="flex justify-center space-x-4">
          {primaryButton && (
            <Button
              variant={primaryButton.variant || 'default'}
              onClick={primaryButton.onClick}
            >
              {primaryButton.text}
            </Button>
          )}
          {secondaryButton && (
            <Button
              variant={secondaryButton.variant || 'outline'}
              onClick={secondaryButton.onClick}
            >
              {secondaryButton.text}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}