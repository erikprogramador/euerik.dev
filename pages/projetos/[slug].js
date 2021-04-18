import ProjectLayout from '../../components/layouts/ProjectLayout'
import { getProjectBySlug, getProjects } from '../../lib/projects'

function Projeto({ project }) {
  return (
    <ProjectLayout
      title={project.metadata.title}
      description={project.metadata.description}
      banner={project.metadata.banner}
    >
      <div
        className='mx-auto prose prose-xl prose-main'
        dangerouslySetInnerHTML={{ __html: project.content }}
      ></div>
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
