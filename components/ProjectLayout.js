import NextLink from 'next/link'
import DefaultLayout from './DefaultLayout'

function ProjectLayout({ children, title, description, banner }) {
  return (
    <DefaultLayout
      title={`EuErik.dev - Projeto ${title}`}
      description={description}
    >
      <div
        className='relative bg-center bg-no-repeat bg-cover bg-main text-light'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 opacity-50 bg-dark'></div>
        <div className='container relative flex flex-col justify-center mx-auto h-96'>
          <h1 className='text-5xl font-semibold'>{title}</h1>
          <p className='text-lg'>{description}</p>
        </div>
      </div>

      <div className='relative'>
        <NextLink href='/'>
          <a className='absolute bottom-0 top-4 left-4'>
            <img
              src='/static/logo.svg'
              alt='Logo EuErik.dev'
              className='sticky w-12 top-4'
            />
          </a>
        </NextLink>

        <div className='container pt-10 pb-20 mx-auto'>{children}</div>
      </div>
    </DefaultLayout>
  )
}

export default ProjectLayout
