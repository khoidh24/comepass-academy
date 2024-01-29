'use client'
import Image from 'next/image'
import Link from 'next/link'

const FOOTER_MENU = [
  {
    categoryName: 'Comepass Academy',
    catalogItem: [
      { name: 'Home', link: '/' },
      { name: 'Get the app', link: '#' },
      { name: 'About us', link: '#' },
      { name: 'Contact us', link: '#' }
    ]
  },
  {
    categoryName: 'Terms and Conditions',
    catalogItem: [
      { name: 'Privacy Policy', link: '#' },
      { name: 'Cookie settings', link: '#' },
      { name: 'Accessibility statement', link: '#' }
    ]
  },
  {
    categoryName: 'Features',
    catalogItem: [
      { name: 'Blog', link: '#' },
      { name: 'Help and Support', link: '#' }
    ]
  }
]

const Footer = () => {
  return (
    <footer className='bg-[#23272F] w-screen z-50 snap-end'>
      <div className='container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col'>
        <div className='w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10'>
          <div className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <Image
              className='w-[200px] cursor-pointer'
              src={'/logo.png'}
              alt='logo'
              width={400}
              height={400}
            />
          </div>
          <p className='mt-6 text-sm text-[#636C80]'>
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className='flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first'>
          {FOOTER_MENU.map((category) => (
            <div className='lg:w-1/4 md:w-1/2 w-full px-4' key={category.categoryName}>
              <h2 className='title-font font-medium text-white tracking-widest text-sm mb-3'>
                {category.categoryName}
              </h2>
              <nav className='list-none mb-10'>
                {category.catalogItem.map((catalog) => (
                  <li key={catalog.name}>
                    <Link
                      href={catalog.link}
                      className='text-[#636C80] hover:text-[#2594d1] cursor-pointer'
                    >
                      {catalog.name}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
