'use client'
import {useTheme} from 'next-themes'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import {Button} from './ui/button'
import {MoonIcon, SunIcon} from '@radix-ui/react-icons'

export function ThemeSwap() {
  const {setTheme} = useTheme()

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant='none' size='icon'>
            <SunIcon className='size-[1rem] rotate-0 scale-100 transition-all hover:text-slate-500 sm:size-[1.2rem] md:size-[1.3rem] lg:size-[1.5rem] xl:size-[1.8rem] 2xl:size-[2rem] dark:-rotate-90 dark:scale-0' />
            <MoonIcon className='absolute size-[1rem] rotate-90 scale-0 transition-all hover:text-slate-500 sm:size-[1.2rem] md:size-[1.3rem] lg:size-[1.5rem] xl:size-[1.8rem] 2xl:size-[2rem] dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => setTheme('light')}>LIGHT</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('dark')}>DARK</DropdownMenuItem>
          <DropdownMenuItem onClick={() => setTheme('system')}>SYSTEM</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
