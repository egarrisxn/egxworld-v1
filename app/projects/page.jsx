import {Banner} from '../../components/Banner'
import {Header} from '../../components/Header'
import {CurrentProjectCard} from '../../components/CurrentProjectCard'
import {PastProjectCard} from '../../components/PastProjectCard'
import {currentProjects, pastProjects} from '@/lib/data/projects'

const projectsIcons = [
  {
    name: 'github',
    href: 'https://github.com/egarrisxn',
    label: 'Github',
    className: 'hover:text-blue-400 dark:hover:text-blue-300',
  },
  {
    name: 'twitter',
    href: 'https://x.com/eg__xo',
    label: 'twitter',
    className: 'hover:text-blue-400 dark:hover:text-blue-300',
  },
]

export default function ProjectsPage() {
  return (
    <main className='min-h-full border-2 border-blue-400 pb-16 dark:border-blue-300'>
      <Banner title='projects' />
      <div className='mx-auto mt-12 flex w-full max-w-5xl flex-col gap-12 px-4 sm:mt-16 sm:px-8 xl:max-w-6xl 2xl:mt-24 2xl:max-w-7xl'>
        <Header
          className='text-blue-400 dark:text-blue-300'
          title='2024 - Present'
          icons={projectsIcons}
        />

        <section className='mx-auto flex flex-col pt-4 shadow-foreground drop-shadow-2xl md:mx-12 lg:mx-16 xl:mx-auto'>
          <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
            {currentProjects.map((project, index) => (
              <CurrentProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <h2 className='font-bold uppercase tracking-tight text-blue-400 md:px-2 md:text-lg lg:text-2xl xl:mt-2 2xl:mb-2 2xl:mt-8 2xl:text-4xl dark:text-blue-300'>
          2023
        </h2>

        <section className='mx-auto flex flex-col pt-4 shadow-foreground drop-shadow-2xl md:mx-12 lg:mx-16 xl:mx-auto'>
          <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
            {pastProjects.map((project, index) => (
              <PastProjectCard key={index} project={project} />
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
