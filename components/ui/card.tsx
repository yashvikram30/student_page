import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import Image from "next/image"

const cardVariants = cva(
  "rounded-2xl transition-all duration-300 overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white border shadow-sm hover:shadow-md",
        gradient:
          "bg-gradient-to-br from-white to-slate-50 border-none shadow-md hover:shadow-xl",
        glass:
          "bg-white/80 backdrop-blur-sm border shadow-sm hover:shadow-md",
        elevated:
          "bg-white shadow-lg hover:shadow-xl transform hover:-translate-y-1",
      },
      padding: {
        default: "p-6",
        large: "p-8",
        none: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

interface CardImageProps {
  src: string
  alt: string
  height?: number
  width?: number
  className?: string
}

const CardImage = ({ src, alt, height = 300, width = 600, className }: CardImageProps) => (
  <div className="relative overflow-hidden rounded-t-2xl">
    <Image
      src={src || "/placeholder.svg"}
      alt={alt}
      width={width}
      height={height}
      className={cn("h-full w-full object-cover transition-transform duration-300 hover:scale-105", className)}
    />
  </div>
)

interface CardBadgeProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "outline"
  className?: string
}

const CardBadge = ({ children, variant = "primary", className }: CardBadgeProps) => {
  const badgeStyles = {
    primary: "bg-primary/10 text-primary",
    secondary: "bg-secondary/10 text-secondary",
    outline: "border border-primary/20 text-primary",
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        badgeStyles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ElementType
}

const CardContent = ({ icon: Icon, className, children, ...props }: CardContentProps) => {
  return (
    <div className={cn("p-6", className)} {...props}>
      {Icon && (
        <div className="mb-4 inline-block rounded-lg bg-primary/10 p-3 text-primary">
          <Icon className="h-6 w-6" />
        </div>
      )}
      {children}
    </div>
  )
}

interface CustomCardProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
  image?: CardImageProps
  badge?: React.ReactNode
  title?: string
  subtitle?: string
  icon?: React.ElementType
}

const CustomCard = React.forwardRef<HTMLDivElement, CustomCardProps>(
  ({ className, variant, padding, image, badge, title, subtitle, icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "group relative overflow-hidden border-none bg-gradient-to-br from-white to-slate-50 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl",
          cardVariants({ variant, padding, className })
        )}
        {...props}
      >
        {image && <CardImage {...image} />}
        <CardContent icon={icon}>
          {badge && <div className="mb-4">{badge}</div>}
          {title && <h3 className="mb-2 text-xl font-semibold">{title}</h3>}
          {subtitle && <p className="mb-4 text-sm text-muted-foreground">{subtitle}</p>}
          {children}
          <div className="mt-4 flex items-center text-primary">
            <span className="text-sm font-medium">Learn more</span>
            <svg
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </div>
        </CardContent>
      </div>
    )
  }
)
CustomCard.displayName = "CustomCard"

export { CustomCard, CardImage, CardBadge, CardContent, cardVariants }
