import { Button } from "@/components/ui/button"

interface FullWidthCTAProps {
  title: string
  description: string
  buttonText: string
  onButtonClick: () => void
  backgroundImage?: string
}

export function FullWidthCTA({
  title,
  description,
  buttonText,
  onButtonClick,
  backgroundImage
}: FullWidthCTAProps) {
  return (
    <div className="relative bg-primary py-16 sm:py-24">
      {backgroundImage && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={backgroundImage}
            alt="Background"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-primary/75 mix-blend-multiply" />
        </div>
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-8 text-primary-foreground/80">
            {description}
          </p>
          <div className="mt-10 flex items-center justify-center">
            <Button
              size="lg"
              onClick={onButtonClick}
              className="bg-background text-foreground hover:bg-background/90"
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}