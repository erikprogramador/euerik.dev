import Hero from '../sections/home/Hero'
import Projects from '../sections/home/Projects'
import Community from '../sections/home/Community'
import Presentation from '../sections/home/Presentation'
import { getProjects } from '../lib/projects'
import DefaultLayout from '../components/DefaultLayout'
import ContentCreated from '../sections/home/ContentCreated'

export default function Home({ projects }) {
  return (
    <DefaultLayout
      title='Erik Vanderlei Fernandes - EuErik.dev'
      description='Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza'
    >
      <Hero />
      <div className='relative' id='base-offset'>
        <img
          src='/static/logo.svg'
          alt='Logo EuErik.dev'
          className='sticky w-12 mb-10 top-4 left-4'
        />
        <Presentation />
        <Projects projects={projects} />
        <Community />
        <ContentCreated />
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
