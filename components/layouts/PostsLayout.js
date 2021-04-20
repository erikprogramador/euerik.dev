import DefaultLayout from '@layouts/DefaultLayout'
import Header from '@components/Header'

function ProjectLayout({ children, title, description, banner }) {
  return (
    <DefaultLayout title={`${title} | EuErik.dev`} description={description}>
      <div
        className='relative px-4 bg-center bg-no-repeat bg-cover bg-main text-light'
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 opacity-75 bg-dark'></div>
        <Header />
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
