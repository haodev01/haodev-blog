import headerNavLinks from "@/data/headerNavLink"
import Link from "next/link"


const Header = () => {
  return (
    <header className="flex items-center justify-between container mx-auto py-10">
     <div>Logo</div>
     <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
      {
        headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            {link.title}
          </Link>
        ))
      }
     </div>
    </header>
  )
}

export default Header