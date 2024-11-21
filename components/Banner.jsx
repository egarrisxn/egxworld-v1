import Image from 'next/image'

const bannerInfo = {
  welcome: {
    className: 'bg-yellow-400 dark:bg-yellow-300',
    src: '/banners/WELCOME.svg',
    alt: 'welcome',
  },
  about: {className: 'bg-green-400 dark:bg-green-300', src: '/banners/ABOUT.svg', alt: 'about'},
  projects: {
    className: 'bg-blue-400 dark:bg-blue-300',
    src: '/banners/PROJECTS.svg',
    alt: 'projects',
  },
  contact: {
    className: 'bg-red-400 dark:bg-red-300',
    src: '/banners/CONTACT.svg',
    alt: 'contact',
  },
}

export function Banner({title}) {
  const {className, src, alt} = bannerInfo[title] || {}
  if (!className || !src || !alt) {
    return null
  }
  return (
    <div
      className={`${className} flex w-full justify-center border-b py-8 shadow-md shadow-muted-foreground/80`}
      role='banner'
    >
      <Image src={src} width={2560} height={200} alt={`Banner for the ${alt} page`} />
    </div>
  )
}
