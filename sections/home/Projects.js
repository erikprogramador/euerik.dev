import GoToButton from '@components/GoToButton'
import Project from '@components/Project'

function Projects({ projects }) {
  return (
    <section
      className='relative flex flex-col min-h-screen py-16 justify-evenly'
      id='projetos'
    >
      <div className='container grid grid-cols-1 gap-20 px-6 mx-auto sm:px-0 md:grid-cols-2'>
        <div className='flex flex-col justify-center mx-auto'>
          <h2 className='mb-10 text-3xl font-semibold text-title'>
            Meus projetos!
          </h2>

          <p className='mb-6 leading-10 text-body'>
            Todos nós temos projetos, alguns que funcionam muito bem, outros que
            nem tanto, mas servem de aprendizado para que a gente consiga
            evoluir e melhorar para os proximos.
          </p>

          <div>
            <GoToButton go='comunidade'>Eu na comunidade!</GoToButton>
          </div>
        </div>

        <div className='grid grid-cols-1 gap-4 overflow-hidden sm:grid-cols-2'>
          {projects &&
            projects.map(project => (
              <Project project={project} key={project.slug} />
            ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
