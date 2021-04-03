import ProjectLayout from '../../components/ProjectLayout'
import { getProjectBySlug, getProjects } from '../../lib/projects'

function Projeto({ project }) {
  return (
    <ProjectLayout
      title={project.metadata.title}
      description={project.metadata.description}
      banner={project.metadata.banner}
    >
      <h1>{project.metadata.title}</h1>
    </ProjectLayout>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const project = await getProjectBySlug(slug)

  return {
    props: {
      project,
    },
  }
}

export async function getStaticPaths() {
  const project = (await getProjects()).map(project => project.metadata.slug)

  return {
    paths: project.map(projectSlug => {
      return {
        params: {
          slug: projectSlug,
        },
      }
    }),
    fallback: false,
  }
}

export default Projeto
