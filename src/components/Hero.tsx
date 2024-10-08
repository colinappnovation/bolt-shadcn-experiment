import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  text: string;
  variant?: 'default' | 'outline';
  icon?: React.ReactNode;
}

interface HeroProps {
  imageOnLeft?: boolean;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  primaryButton: ButtonProps;
  secondaryButton?: ButtonProps;
}

export function Hero({
  imageOnLeft = true,
  imageSrc,
  imageAlt,
  title,
  description,
  primaryButton,
  secondaryButton,
}: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`flex flex-col md:flex-row items-center gap-12 ${
            imageOnLeft ? '' : 'md:flex-row-reverse'
          }`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src={imageSrc}
              alt={imageAlt}
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 text-left">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {description}
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button size="lg" variant={primaryButton.variant || 'default'}>
                {primaryButton.text}
                {primaryButton.icon}
              </Button>
              {secondaryButton && (
                <Button
                  size="lg"
                  variant={secondaryButton.variant || 'outline'}
                >
                  {secondaryButton.text}
                  {secondaryButton.icon}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
}
