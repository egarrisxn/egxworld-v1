export function AnimatedName() {
  return (
    <>
      <div className='group relative overflow-hidden'>
        <div
          className='transition-transform duration-300 group-hover:-translate-y-32'
          aria-hidden='true'
        >
          <h3 className='pointer-events-none bg-gradient-to-br from-zinc-300 via-zinc-500 to-zinc-700 bg-clip-text text-4xl font-bold leading-loose text-transparent shadow-foreground drop-shadow-md min-[320px]:text-6xl min-[460px]:text-7xl md:text-[5rem] lg:text-8xl xl:text-[6.5rem] 2xl:text-[8rem]'>
            Ethan G.
          </h3>
        </div>
        <div className='absolute left-0 top-0 translate-y-32 transition-transform duration-300 group-hover:translate-y-0'>
          <h3 className='pointer-events-none bg-gradient-to-br from-zinc-800 via-zinc-500 to-zinc-300 bg-clip-text text-4xl font-bold text-transparent shadow-foreground drop-shadow-md min-[320px]:text-6xl min-[460px]:text-7xl md:text-[5rem] lg:text-8xl xl:text-[6.5rem] 2xl:text-[8rem]'>
            Ethan G.
          </h3>
        </div>
      </div>

      <div className='group relative ml-1.5 overflow-hidden'>
        <div
          className='transition-transform duration-300 group-hover:-translate-y-16 motion-reduce:transform-none'
          aria-hidden='true'
        >
          <h4 className='flex cursor-default bg-gradient-to-tl from-yellow-500 via-yellow-600 to-yellow-700 bg-clip-text leading-tight tracking-tight text-transparent shadow-foreground drop-shadow-md delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
            Full Stack Developer.
          </h4>
        </div>
        <div className='absolute left-0 top-0 translate-y-16 shadow-foreground drop-shadow-md transition-transform duration-300 group-hover:translate-y-0 motion-reduce:transform-none'>
          <h4 className='flex cursor-default bg-gradient-to-tl from-yellow-800 via-yellow-600 to-yellow-400 bg-clip-text leading-tight tracking-tight text-transparent delay-75 min-[320px]:text-lg min-[385px]:text-xl min-[460px]:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl'>
            Digital Product Designer.
          </h4>
        </div>
      </div>
    </>
  )
}
