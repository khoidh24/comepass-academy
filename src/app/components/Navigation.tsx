'use client'

// Import Components from ReactJs/NextJs
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Lexend_Deca } from 'next/font/google'
import Link from 'next/link'

//Import Components from Ant Design
import {
  SearchOutlined,
  MenuOutlined,
  HomeOutlined,
  BookOutlined,
  AuditOutlined,
  CloseOutlined
} from '@ant-design/icons'

// Variables defined
const lexendDeca = Lexend_Deca({ subsets: ['latin'] })

interface MenuItems {
  label: string
  key: string
  link: string
  icon: JSX.Element
}

interface ActionItems {
  name: string
  key: string
  link: string
  class: string
}

// Menu Properties
const NAVIGATION_MENU: MenuItems[] = [
  {
    label: 'Home',
    key: 'home',
    link: '/',
    icon: <HomeOutlined />
  },
  {
    label: 'Courses',
    key: 'courses',
    link: '/courses',
    icon: <BookOutlined />
  },
  {
    label: 'Blog',
    key: 'blog',
    link: '/blog',
    icon: <AuditOutlined />
  }
]

const ACTION_MENU: ActionItems[] = [
  { name: 'Sign in', key: 'sign-in', link: '/sign-in', class: 'action--link__signin' },
  { name: 'Sign up', key: 'sign-up', link: '/sign-up', class: 'action--link__signup' }
]

const App: React.FC = () => {
  //NOTE: Declare Hook Components
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [isShowMobileNavigation, setIsShowMobileNavigation] = useState<boolean>(false)
  const [isChosen, setIsChosen] = useState<MenuItems>(NAVIGATION_MENU[0])

  //Handle Search Bar
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value)
  }

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Add your search functionality here
    console.log('Searching for:', searchQuery)
  }

  //Handle Mobile Navigation
  const mobileMenuHandle = () => {
    setIsShowMobileNavigation(!isShowMobileNavigation)
  }
  const navigationSelectedHandler = (menuItem: MenuItems) => {
    setIsChosen(menuItem)
  }

  return (
    <div className='nav--container'>
      <nav className={`nav--pc ${lexendDeca.className}`}>
        {/*PENDING Mobile & Tablet Screen*/}
        <div className='nav--mobile__button'>
          <button onClick={mobileMenuHandle}>
            <MenuOutlined />
          </button>
        </div>
        <div
          className={`overlay transition-opacity duration-500 ${
            isShowMobileNavigation ? 'opacity-50' : 'opacity-0 hidden'
          }`}
        ></div>
        <div
          className={`${
            isShowMobileNavigation == false ? '-translate-x-full' : 'translate-x-0'
          } nav--mobile_container transition-transform transform  ease-linear duration-200`}
        >
          <ul className='nav--mobile__list'>
            {NAVIGATION_MENU.map((item) => (
              <li className='mx-auto my-8' key={item.key}>
                <Link
                  className={`flex ${isChosen === item ? 'bg-slate-100 py-2 rounded-l-xl' : ''}`}
                  href={item.link}
                  onClick={() => navigationSelectedHandler(item)}
                >
                  <span className='nav--mobile__icon'>{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={mobileMenuHandle}>
            <CloseOutlined className='absolute top-0 right-0 px-3 py-3' />
          </button>
        </div>
        {/*COMPLETED: PC Screen*/}
        <div className='nav--link__container'>
          {/*Logo*/}
          <Image src={'/logo.png'} width={100} height={100} alt='Comepass Logo' />
          {/*Navigation Menu Items*/}
          <ul className='nav--link__items'>
            {NAVIGATION_MENU.map((item) => (
              <li className='nav--link' key={item.key}>
                <Link href={item.link}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        {/*TODO: User Profile - WIP*/}
        <div className='empty--thrash'></div>
        {/*Search Bar*/}
        <div className='search--bar__container'>
          <form onSubmit={handleSearchSubmit} className='flex items-center'>
            <input
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={handleSearchChange}
              className='search--bar__input hidden lg:block lg:w-[360px] xl:w-[480px] px-4 py-1 bg-transparent border border-black border-r-0 rounded-l-full focus:outline-none focus:shadow-outline text-gray-600'
            />
            <button
              type='submit'
              className='hidden lg:flex bg-transparent border border-black  border-l-0 text-black px-4 py-2 rounded-r-full transition duration-300 ease-in-out focus:outline-none focus:shadow-outline'
            >
              <SearchOutlined className='' />
            </button>
          </form>
        </div>
        {/*Sign-in and Sign-up */}
        <div className='action--link__container'>
          <ul>
            {ACTION_MENU.map((item) => (
              <li className={`action--link ${item.class}`} key={item.key}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default App
