import React from 'react'
import GoToButton from '../../components/GoToButton'

function Projects() {
  return (
    <section
      className='relative flex flex-col min-h-screen py-16 justify-evenly'
      id='projetos'
    >
      <div className='container px-6 mx-auto sm:px-0'>
        <div className='w-full max-w-xl mx-auto text-center'>
          <h2 className='mb-4 text-3xl font-semibold text-title'>
            Me apresentando!
          </h2>

          <p className='mb-6 leading-10 text-body'>
            Todos nós temos projetos, alguns que funcionam muito bem, outros que
            nem tanto, mas servem de aprendizado para que a gente consiga
            evoluir e corrigir nossos erros.
          </p>
        </div>
      </div>

      <div className='container px-6 py-8 mx-auto sm:px-0'>
        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4'>
          <a
            href='https://adalov.com'
            target='_blank'
            className='flex flex-col items-center text-center'
          >
            <div className='flex items-center justify-center w-32 h-32 mb-3 rounded-full bg-branding-adalov text-light'>
              <img
                src='/static/adalov.png'
                alt='Logo Adalov'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold text-title'>Adalov</h3>
          </a>

          <div className='flex flex-col items-center text-center'>
            <div className='flex items-center justify-center w-32 h-32 mb-3 rounded-full bg-branding-simulaimob text-light'>
              <img
                src='/static/simulaimob.png'
                alt='Logo SimulaImob'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold text-title'>Simulaimob</h3>
          </div>

          <a
            href='https://planoeplanosimulador.com.br'
            target='_blank'
            className='flex flex-col items-center text-center'
          >
            <div className='flex items-center justify-center w-32 h-32 mb-3 rounded-full bg-branding-simulaplano text-light'>
              <img
                src='/static/planoeplano.png'
                alt='Logo Plano&amp;Planop'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold text-title'>
              Plano&amp;PlanoSimulador
            </h3>
          </a>

          <div className='flex flex-col items-center text-center'>
            <div className='flex items-center justify-center w-32 h-32 mb-3 rounded-full bg-branding-salescity text-light'>
              <img
                src='/static/salescity.png'
                alt='Logo Sales City'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold text-title'>Sales City</h3>
          </div>
        </div>
      </div>

      <div className='container px-6 mx-auto text-center sm:px-0'>
        <GoToButton go='comunidade'>Eu na comunidade!</GoToButton>
      </div>
    </section>
  )
}

export default Projects
