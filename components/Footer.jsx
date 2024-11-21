import {SocialList} from './SocialList'

export function Footer() {
  return (
    <footer className='flex items-center justify-between p-3 sm:p-3 md:p-4 lg:p-5 xl:p-6 2xl:p-7'>
      <p className='bg-gradient-to-tl from-zinc-400 via-zinc-600 to-zinc-900 bg-clip-text text-transparent shadow-foreground drop-shadow-2xl sm:text-base lg:text-lg xl:text-xl 2xl:text-3xl dark:from-zinc-200 dark:via-zinc-400 dark:to-zinc-700'>
        <span className='text-foreground'>EG</span>|2024
      </p>
      <section className='flex gap-2 shadow-foreground drop-shadow-2xl sm:text-base lg:text-lg xl:text-xl 2xl:gap-3 2xl:text-3xl'>
        <SocialList />
      </section>
    </footer>
  )
}
