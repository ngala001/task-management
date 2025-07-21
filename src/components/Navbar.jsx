"use client"
import  Link  from "next/link"
import { usePathname } from "next/navigation"

const Navbar = () => {

  const pathname = usePathname();

  const links = [
      {name: "Home", href: '/' },
      {name: "Login", href: '/login' },
  ] 

  return (
    <header className='bg-accent py-3 text-white'>
        <nav className='flex items-center px-3 container mx-auto'>
            <a href="/">PORSHTECH</a>
            <ul className='flex items-center ml-auto space-x-4'>
              {
                links.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href && link.href !== '/')
                  return (
                    <li key={link.name}>
                      <Link 
                        className={isActive ? 'btn': 'btn btn-ghost'} 
                        href={link.href}>{link.name}
                      </Link>
                    </li>
                  )
                })
              }
                <li className='btn btn-ghost'>Logout</li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar