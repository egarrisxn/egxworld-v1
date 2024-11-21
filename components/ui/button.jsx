import * as React from 'react'
import {Slot} from '@radix-ui/react-slot'
import {cva} from 'class-variance-authority'
import {cn} from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center focus-visible:ring-ring focus-visible:ring-1 justify-center whitespace-nowrap transition-colors duration-150 ease-in-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'shadow-[1px_2px_3px_0px_#01091c] rounded-lg',
        main: 'rounded-lg shadow-[1px_2px_3px_0px_#01091c]',
        badge:
          'rounded-full border border-foreground bg-gradient-to-r from-[#5ebe8d] via-[#66c527] to-[#09860b] shadow-[2px_4px_6px_0px_#01091c] lg:border-2 dark:border-0',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'no-underline hover:underline-2',
        none: 'hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2 w-full',
        sm: 'h-7 sm:h-8 px-6 max-w-72 md:max-w-xs lg:max-w-sm 2xl:text-xl sm:px-7 lg:h-9 lg:px-10 2xl:px-12 2xl:h-10',
        md: 'h-7 sm:h-8 px-6 2xl:text-xl sm:px-7 lg:h-9 lg:px-10 2xl:px-12 2xl:h-10',
        text: 'tracking-tight lg:text-lg xl:text-xl 2xl:text-2xl',
        badge: 'h-8 p-2 w-fit 2xl:h-12 2xl:p-3 ',
        icon: 'size-10 2xl:text-xl',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

const Button = React.forwardRef(({className, variant, size, asChild = false, ...props}, ref) => {
  const Comp = asChild ? Slot : 'button'
  return <Comp className={cn(buttonVariants({variant, size, className}))} ref={ref} {...props} />
})
Button.displayName = 'Button'

export {Button, buttonVariants}
