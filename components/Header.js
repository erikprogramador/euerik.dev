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
            rel='noopener'
            className='text-lg text-branding-youtube'
            alt='Youtube'
          >
            <svg className='w-8 h-8' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'
              />
            </svg>
          </a>
          <a
            href='https://www.linkedin.com/in/erik-vanderlei-fernandes-a88790b3/'
            target='_blank'
            rel='noopener'
            className='text-lg text-branding-linkedin'
            alt='LinkedIn'
          >
            <svg className='w-8 h-8' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'
              />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
