import React from 'react'
import GoToButton from '../../components/GoToButton'

function Projects() {
  return (
    <section
      className='relative flex flex-col min-h-screen py-16 justify-evenly'
      id='projetos'
    >
      <div className='container grid grid-cols-1 gap-20 px-6 mx-auto sm:px-0 md:grid-cols-2'>
        <div className='flex flex-col justify-center mx-auto'>
          <h2 className='mb-4 text-3xl font-semibold text-title'>
            Meus projetos!
          </h2>

          <p className='mb-6 leading-10 text-body'>
            Todos nós temos projetos, alguns que funcionam muito bem, outros que
            nem tanto, mas servem de aprendizado para que a gente consiga
            evoluir e corrigir nossos erros.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <a
            href='https://adalov.com'
            target='_blank'
            className='flex flex-col items-center justify-center h-48 p-10 text-center sm:h-64 bg-branding-adalov text-light rounded-tl-3xl rounded-tr-3xl sm:rounded-tr-none sm:rounded-tl-3xl'
          >
            <div className='mb-3'>
              <img
                src='/static/adalov.png'
                alt='Logo Adalov'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold'>Adalov</h3>
          </a>

          <a
            href='https://planoeplanosimulador.com.br'
            target='_blank'
            className='flex flex-col items-center justify-center h-48 p-10 text-center sm:h-64 bg-branding-simulaplano text-light sm:rounded-tr-3xl'
          >
            <div className='mb-3'>
              <img
                src='/static/planoeplano.png'
                alt='Logo Plano&amp;Planop'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold'>Plano&amp;PlanoSimulador</h3>
          </a>

          <div className='flex flex-col items-center justify-center h-48 p-10 text-center sm:h-64 bg-branding-simulaimob text-light sm:rounded-bl-3xl'>
            <div className='mb-3'>
              <img
                src='/static/simulaimob.png'
                alt='Logo SimulaImob'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold'>Simulaimob</h3>
          </div>

          <div className='flex flex-col items-center justify-center h-48 p-10 text-center sm:h-64 rounded-br-3xl rounded-bl-3xl sm:rounded-bl-none sm:rounded-br-3xl bg-branding-salescity text-light'>
            <div className='mb-3'>
              <img
                src='/static/salescity.png'
                alt='Logo Sales City'
                className='w-16'
              />
            </div>

            <h3 className='text-xl font-semibold'>Sales City</h3>
          </div>
        </div>
      </div>

      <div className='container px-6 mx-auto mt-8 text-center sm:px-0'>
        <GoToButton go='comunidade'>Eu na comunidade!</GoToButton>
      </div>
    </section>
  )
}

export default Projects
