import {TooltipProvider, Tooltip, TooltipTrigger, TooltipContent} from './ui/tooltip'
import {socialIcons} from '@/lib/data/icons'

export const Icon = ({name, href, alt, label, className, children}) => {
  const defaultClassName =
    'hover:text-green-400 transition-all focus:border-2 foocus:rounded-full duration-150 ease-in-out'
  const iconClassName = className ? className : defaultClassName

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <a href={href} target='_blank' rel='noopener noreferrer'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='1.2em'
              height='1.2em'
              viewBox='0 0 24 24'
              title={name}
              alt={alt}
              aria-label={label}
              className={iconClassName}
            >
              {children || socialIcons[name]}
            </svg>
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}
