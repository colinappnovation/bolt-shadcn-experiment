import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  imageSrc?: string
  buttonText?: string
  onButtonClick?: () => void
}

export function Card({
  title,
  description,
  imageSrc,
  buttonText,
  onButtonClick,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        className
      )}
      {...props}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-semibold leading-none tracking-tight">{title}</h3>
        <p className="text-sm text-muted-foreground mt-2">{description}</p>
        {buttonText && (
          <Button
            onClick={onButtonClick}
            className="mt-4"
          >
            {buttonText}
          </Button>
        )}
      </div>
    </div>
  )
}