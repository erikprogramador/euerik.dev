import NextLink from 'next/link'
import { useEffect, useState } from 'react'

function Header() {
  const [currentPath, setCurrentPath] = useState('/')

  useEffect(() => {
    const pathToCheck = window.location.pathname
      .split('/')
      .filter(path => path != '')
      .shift()
    setCurrentPath('/' + (pathToCheck ? pathToCheck : ''))
  }, [])

  return (
    <header className='absolute inset-x-0 top-0 z-30'>
      <div className='container flex items-baseline justify-between py-4 mx-auto space-x-6'>
        <NextLink href='/'>
          <a>
            <img
              src='/static/logo.svg'
              alt='Logo EuErik.dev'
              className='sticky w-12 top-4'
            />
          </a>
        </NextLink>

        <nav className='flex items-center space-x-6 opacity-80'>
          <NextLink href='/'>
            <a
              className={currentPath === '/' ? 'text-main text-lg' : 'text-lg'}
            >
              Página inicial
            </a>
          </NextLink>
          <NextLink href='/blog'>
            <a
              className={
                currentPath === '/blog' ? 'text-main text-lg' : 'text-lg'
              }
            >
              Blog
            </a>
          </NextLink>
          <NextLink href='/projetos'>
            <a
              className={
                currentPath === '/projetos' ? 'text-main text-lg' : 'text-lg'
              }
            >
              Projetos
            </a>
          </NextLink>
          <a
            href='https://www.youtube.com/channel/UCmnImNyVL1wwb4f7MpG8VIg'
            target='_blank'
            className='text-lg'
          >
            Youtube
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
