import NextLink from 'next/link'

function Header() {
  return (
    <header className='absolute inset-x-0 top-0 z-30'>
      <div className='flex items-baseline justify-between max-w-3xl px-8 py-4 mx-auto space-x-6'>
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
            <a className='text-lg'>Página inicial</a>
          </NextLink>
          <NextLink href='/blog'>
            <a className='text-lg'>Blog</a>
          </NextLink>
          <NextLink href='/projetos'>
            <a className='text-lg'>Projetos</a>
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
