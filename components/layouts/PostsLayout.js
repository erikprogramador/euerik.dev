import NextLink from 'next/link'
import DefaultLayout from '@layouts/DefaultLayout'

function ProjectLayout({ children, title, description, banner }) {
  return (
    <DefaultLayout title={`${title} | EuErik.dev`} description={description}>
      <div
        className='relative px-4 bg-center bg-no-repeat bg-cover bg-main text-light'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 opacity-75 bg-dark'></div>
        <div className='absolute inset-x-0 top-0 z-30'>
          <div className='flex items-baseline max-w-3xl py-4 mx-auto space-x-6'>
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
              <a
                href='https://www.youtube.com/channel/UCmnImNyVL1wwb4f7MpG8VIg'
                target='_blank'
                className='text-lg'
              >
                Youtube
              </a>
            </nav>
          </div>
        </div>
        <div className='relative flex flex-col justify-center max-w-3xl mx-auto h-96'>
          <h1 className='mb-2 text-5xl font-semibold'>{title}</h1>
          <p className='text-lg'>{description}</p>
        </div>
      </div>

      <div className='container pt-10 pb-20 mx-auto'>{children}</div>
    </DefaultLayout>
  )
}

export default ProjectLayout
