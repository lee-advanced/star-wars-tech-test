import { PropsWithChildren } from 'react'
import Link from 'next/link'

interface Props extends PropsWithChildren {
  asLink: boolean
  href?: string
}

const Button = ({ children, asLink, href }: Props) => {
  const sharedStyles =
    'bg-yellow-400 min-w-fit w-1/2 p-4 text-center rounded-2xl hover:cursor-pointer hover:no-underline hover:bg-red-600'

  return asLink ? (
    <Link href={href ?? '/'}>
      <div className={sharedStyles}>{children}</div>
    </Link>
  ) : (
    <button type="button" className={sharedStyles}>
      {children}
    </button>
  )
}

export default Button
