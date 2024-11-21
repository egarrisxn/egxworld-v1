import Image from 'next/image'

export function PastProjectCard({project}) {
  return (
    <div className='group transition-all duration-300 ease-in-out'>
      <a
        href={project.repositoryLink}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={`Visit ${project.title} website`}
        className='mb-0.5 line-clamp-1 text-center font-semibold leading-tight tracking-tight group-hover:text-blue-400 group-focus:text-blue-600 md:text-base xl:text-lg 2xl:text-xl dark:group-hover:text-blue-600 dark:group-focus:text-blue-400'
      >
        {project.title}
        <div className='relative rounded-lg border border-foreground bg-card dark:border-border'>
          <Image
            src={project.image}
            alt={`Photo of the ${project.alt} project`}
            width={760}
            height={430}
            className='rounded-lg border-2'
          />
          <div className='absolute inset-0 rounded-lg bg-black opacity-0 group-hover:opacity-20 group-focus:opacity-20'></div>
        </div>
      </a>
    </div>
  )
}
