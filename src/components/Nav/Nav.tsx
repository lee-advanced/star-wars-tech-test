import Link from 'next/link'

interface LinkType {
  href: string
  text: string
}

interface Props {
  links: LinkType[]
}

const Nav = ({ links }: Props) => {
  return (
    <nav className="w-full h-full flex justify-center items-center uppercase">
      <ul className="flex justify-around w-full text-xl md:w-1/3">
        {links.map((link, index) => (
          <li
            key={`nav-link-${index}`}
            className="hover:text-red-600 hover:border-b hover:border-red-600"
          >
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav
