import NextLink from 'next/link'
import DefaultLayout from '@components/layouts/DefaultLayout'
import Header from '@components/Header'
import { getProjects } from '@lib/projects'
import Project from '@components/Project'

function Projetos({ projects }) {
  return (
    <DefaultLayout
      title='Projetos | EuErik.dev'
      description='Projectos EuErik.dev. Aqui tem uma lista com alguns dos meus projetos favoritos!'
    >
      <Header />

      <div style={{ height: '80px' }}></div>

      <div className='max-w-3xl py-10 mx-auto'>
        <h1 className='mb-2 text-4xl font-semibold'>Meus projetos!</h1>
        <p>Aqui tem uma lista com alguns dos meus projetos favoritos</p>
      </div>

      <div className='max-w-3xl pb-12 mx-auto'>
        <ul className='grid gap-6 md:grid-cols-2'>
          {projects.map(project => (
            <Project key={project.slug} project={project} />
          ))}
        </ul>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const projects = await getProjects()

  return {
    props: {
      projects: mapProjects(projects),
    },
  }
}

function mapProjects(projects) {
  return projects.map(({ metadata }) => {
    return {
      title: metadata.title,
      slug: metadata.slug,
      logo: metadata.logo,
      color: metadata.color,
    }
  })
}

export default Projetos
