import React from 'react'
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
          </div>

          <div className='flex flex-col -mx-4 sm:flex-row'>
            <div className='w-full mb-4 text-center sm:w-1/2 sm:mx-4'>
              <a
                href='https://www.youtube.com/watch?v=5bvwsA1lVmo'
                target='_blank'
                className='relative flex items-center justify-center overflow-hidden rounded-xl'
              >
                <div className='absolute inset-0 opacity-75 bg-main'></div>

                <img
                  src='https://img.youtube.com/vi/5bvwsA1lVmo/sddefault.jpg'
                  alt='Link da palestra Laravel e seu ecossistema v1.0'
                  className='object-cover w-full h-48'
                />

                <svg
                  className='absolute w-12 h-12 text-light'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>

              <h3 className='mt-2 font-semibold text-title'>
                Laravel e seu ecossistema v1.0
              </h3>
              <span className='text-body'>Laraconf Brasil 2017</span>
            </div>

            <div className='w-full mb-4 text-center sm:w-1/2 sm:mx-4'>
              <a
                href='https://www.youtube.com/watch?v=ZV5IcfT15GI'
                target='_blank'
                className='relative flex items-center justify-center overflow-hidden rounded-xl'
              >
                <div className='absolute inset-0 opacity-75 bg-main'></div>

                <img
                  src='https://img.youtube.com/vi/ZV5IcfT15GI/sddefault.jpg'
                  alt='Link da palestra Laravel e seu ecossistema v2.0'
                  className='object-cover w-full h-48'
                />

                <svg
                  className='absolute w-12 h-12 text-light'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
                    clipRule='evenodd'
                  ></path>
                </svg>
              </a>

              <h3 className='mt-2 font-semibold text-title'>
                Laravel e seu ecossistema v2.0
              </h3>
              <span className='text-body'>PHP Communit summit 2019</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Community
