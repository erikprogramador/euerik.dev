import GoToButton from '@components/GoToButton'

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
              Sou <strong>Erik Vanderlei Fernandes</strong>, estou na área da
              tecnologia desde 2010, sempre buscando auxiliar negocios no melhor
              uso de seus recursos. Com o objetivo de auxiliar meus clientes e
              parceiros busco estudar diversas áreas...{' '}
              <strong>sério, diversas mesmo</strong>... Desde desenvolvimento de
              sistemas, marketing, audivisual, até mecânica de autos.
            </p>

            <p className='mb-6 leading-10 text-body'>
              Cada disciplina nova que aprendo, busco sempre trazer e aplicar no
              meu dia a dia, meus negócios, e para meus clientes.
            </p>

            <p className='mb-10 leading-10 text-body'>
              Hoje sou sócio da Adalov, empresa onde o nosso objetivo é{' '}
              <strong>“Resolver o problema do cliente”</strong>. Por isso estou
              sempre buscando me atualizar, e olhar outros pontos de vista fora
              da tecnologia. Para que eu consiga resolver o problema do cliente!
            </p>

            <GoToButton go='projetos'>Meus projetos!</GoToButton>
          </div>

          <div className='order-0 md:order-1'>
            <img
              src='/static/eu.jpg'
              alt='Arte com uma foto do Erik no centro e icones de uma câmera, html5, logo do excel, negociação'
              className='object-cover w-full shadow-xl rounded-xl'
              width='728'
              height='430'
              loading='lazy'
            />

            <ul className='grid grid-cols-1 gap-6 mt-6 md:grid-cols-3'>
              <li className='flex flex-col items-center justify-center h-40 text-white shadow-xl bg-main rounded-xl text-light'>
                <svg
                  className='w-12 h-12'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
                  ></path>
                </svg>
                <h3 className='mt-2 text-lg font-semibold text-white'>
                  Desenvolvedor
                </h3>
              </li>
              <li className='flex flex-col items-center justify-center h-40 text-white shadow-xl bg-main rounded-xl text-light'>
                <svg
                  className='w-12 h-12'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01'
                  ></path>
                </svg>
                <h3 className='mt-2 text-lg font-semibold text-white'>
                  Designer
                </h3>
              </li>
              <li className='flex flex-col items-center justify-center h-40 text-white shadow-xl bg-main rounded-xl text-light'>
                <svg
                  className='w-12 h-12'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
                  ></path>
                </svg>
                <h3 className='mt-2 text-lg font-semibold text-white'>
                  Empreendedor
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Presentation
