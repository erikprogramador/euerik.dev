import PostsLayout from '../../components/layouts/PostsLayout'
import { getProjectBySlug, getProjects } from '../../lib/projects'

function Projeto({ project }) {
  return (
    <PostsLayout
      title={`Projeto ${project.metadata.title}`}
      description={project.metadata.description}
      banner={project.metadata.banner}
    >
      <div
        className='px-4 mx-auto prose prose-xl prose-main'
        dangerouslySetInnerHTML={{ __html: project.content }}
      ></div>
    </PostsLayout>
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
