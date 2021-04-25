import DefaultLayout from '@layouts/DefaultLayout'
import Header from '@components/Header'
import BreadCrumbs from '@components/BreadCrumbs'

function ProjectLayout({ children, title, description, banner }) {
  return (
    <DefaultLayout title={`${title} | EuErik.dev`} description={description}>
      <div className='max-w-3xl px-8 mx-auto'>
        <div style={{ height: '100px' }}></div>

        <h1 className='text-2xl font-semibold text-title'>{title}</h1>
        <time className='text-xs text-muted'>20/04/2021</time>

        <div className='mt-1 mb-2'>
          <BreadCrumbs />
        </div>

        <img
          src={banner}
          alt={title}
          className='object-cover w-full rounded-xl max-h-80'
        />
      </div>

      <div className='container pt-6 pb-20 mx-auto'>{children}</div>
    </DefaultLayout>
  )
}

export default ProjectLayout
