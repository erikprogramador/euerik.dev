import React from 'react'
import GoToButton from '../../components/GoToButton'

function Presentation() {
  return (
    <section
      className='relative flex items-center justify-center min-h-screen py-16'
      id='apresentacao'
    >
      <div className='container px-6 mx-auto sm:px-0'>
        <div className='flex flex-col items-center gap-20 md:grid md:grid-cols-2'>
          <div className='order-1 md:order-0'>
            <h2 className='mb-10 text-3xl font-semibold text-title'>
              Me apresentando!
            </h2>

            <p className='mb-6 leading-10 text-body'>
              Sou Erik Vanderlei Fernandes, estou na área da tecnologia desde
              2010, sempre buscando auxiliar negocios no melhor uso de seus
              recursos. Com o objetivo de auxiliar meus clientes e parceiros
              busco estudar diversas áreas... sério, diversas mesmo... Desde
              desenvolvimento de sistemas, marketing, audivisual, até mecânica
              de autos.
            </p>

            <p className='mb-6 leading-10 text-body'>
              Cada disciplina nova que aprendo, busco sempre trazer e aplicar no
              meu dia a dia, meus negócios, e para meus clientes.
            </p>

            <p className='mb-10 leading-10 text-body'>
              Hoje sou sócio da Adalov, empresa onde o objetivo é “Resolver o
              problema do cliente”. Por isso estou sempre buscando me atualizar,
              e olhar outros pontos de vista fora da tecnologia. Para que eu
              consiga resolver o problema do cliente!
            </p>

            <GoToButton go='projetos'>Meus projetos!</GoToButton>
          </div>

          <div className='order-0 md:order-1'>
            <img
              src='/static/eu.png'
              alt='Arte com uma foto do Erik no centro e icones de uma câmera, html5, logo do excel, negociação'
              className='w-full'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
