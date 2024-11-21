import {Icon} from './TooltipIcon'

export function Header({title, icons, className}) {
  const defaultClassName = 'text-foreground'
  const headerClassName = className ? className : defaultClassName

  return (
    <header className='flex flex-row items-center justify-between md:px-2 md:text-lg lg:text-2xl 2xl:text-4xl'>
      <h2 className={`${headerClassName} font-bold uppercase tracking-tight`}>{title}</h2>
      <div className='flex gap-[0.2rem] md:gap-2 lg:gap-3 2xl:gap-4'>
        {icons.map((icon, index) => (
          <Icon
            key={index}
            name={icon.name}
            href={icon.href}
            label={icon.label}
            ariaLabel={`Link to my ${icon.label} page`}
            className={icon.className}
          >
            {icon.children}
          </Icon>
        ))}
      </div>
    </header>
  )
}
