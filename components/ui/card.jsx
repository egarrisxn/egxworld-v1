import * as React from 'react'
import {cn} from '@/lib/utils'

const Card = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('text-card-foreground', className)} {...props} />
))
Card.displayName = 'Card'

const CardHeader = React.forwardRef(({className, ...props}, ref) => (
  <div
    ref={ref}
    className={cn('lg:pg-6 flex flex-col space-y-1.5 p-2 sm:p-4', className)}
    {...props}
  />
))
CardHeader.displayName = 'CardHeader'

const CardTitle = React.forwardRef(({className, ...props}, ref) => (
  <h3 ref={ref} className={cn('font-semibold leading-none tracking-tight', className)} {...props} />
))
CardTitle.displayName = 'CardTitle'

const CardDescription = React.forwardRef(({className, ...props}, ref) => (
  <h4 ref={ref} className={cn('text-muted-foreground', className)} {...props} />
))
CardDescription.displayName = 'CardDescription'

const CardContent = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('p-2 sm:px-6 sm:pb-6 lg:pt-0', className)} {...props} />
))
CardContent.displayName = 'CardContent'

const CardFooter = React.forwardRef(({className, ...props}, ref) => (
  <div ref={ref} className={cn('p-2 sm:p-6 sm:px-6 sm:pb-6 sm:pt-0', className)} {...props} />
))
CardFooter.displayName = 'CardFooter'

export {Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent}
