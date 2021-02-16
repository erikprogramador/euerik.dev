import React from 'react'
import GoToButton from '../../components/GoToButton'

function Hero() {
  return (
    <section
      className='flex items-center h-screen bg-right bg-no-repeat bg-cover md:bg-center'
      style={{ backgroundImage: `url('/static/hero-bg.png')` }}
    >
      <div className='container px-6 mx-auto sm:px-0'>
        <img src='/static/logo.svg' alt='Logo EuErik.dev' className='mb-10' />

        <h1 className='mb-10 text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed sm:text-3xl md:text-4xl text-title'>
          <strong>Desenvolvedor</strong> por paixão, <br />
          <strong>Designer</strong> por curiosidade, <br />
          <strong>Empreendedor</strong> por natureza
        </h1>

        <GoToButton go='apresentacao'>Me apresentando!</GoToButton>
      </div>
    </section>
  )
}

export default Hero
