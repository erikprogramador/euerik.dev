import VideoLink from '../../components/VideoLink'
import GoToButton from '../../components/GoToButton'

function Community() {
  return (
    <section
      className='relative flex items-center justify-center min-h-screen py-16'
      id='comunidade'
    >
      <div className='container px-6 mx-auto sm:px-0'>
        <div className='flex flex-col items-center gap-20 md:grid md:grid-cols-2'>
          <div>
            <h2 className='mb-10 text-3xl font-semibold text-title'>
              Eu na comunidade!
            </h2>

            <p className='mb-6 leading-10 text-body'>
              Assim como a comunidade de tecnologia me ensinou muito também
              busco retribuir compartilhando meu conhecimento e auxiliando na
              organização de eventos.
            </p>

            <p className='mb-6 leading-10 text-body'>
              Hoje a comunidade que sou mais ativo é o{' '}
              <a
                href='https://phpsp.org.br/'
                target='_blank'
                className='font-semibold text-main'
                rel='noreferrer'
              >
                PHPSP
              </a>
              . Onde auxilio na organização do <strong>PHPSP + Talks</strong>{' '}
              (infelizmente paralizado por conta da pandemia).
            </p>

            <p className='mb-10 leading-10 text-body'>
              Além disso palestro em eventos para compartilhar o conhecimento.
              <strong>Veja minhas palestras no youtube!</strong>
            </p>

            <GoToButton go='conteudo'>Meu conteúdo!</GoToButton>
          </div>

          <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
            <VideoLink
              link='https://www.youtube.com/watch?v=5bvwsA1lVmo'
              title='Laravel e seu ecossistema v1.0'
              event='Laraconf Brasil 2017'
              cover='https://img.youtube.com/vi/5bvwsA1lVmo/sddefault.jpg'
            />
            <VideoLink
              link='https://www.youtube.com/watch?v=ZV5IcfT15GI'
              title='Laravel e seu ecossistema v2.0'
              event='PHP Communit summit 2019'
              cover='https://img.youtube.com/vi/ZV5IcfT15GI/sddefault.jpg'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
