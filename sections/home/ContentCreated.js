import NextLink from 'next/link'

function ContentCreated() {
  return (
    <section
      className='relative flex items-center justify-center min-h-screen py-16'
      id='conteudo'
    >
      <div className='container px-6 mx-auto sm:px-0'>
        <div className='flex flex-col items-center gap-20 md:grid md:grid-cols-2'>
          <div className='order-1 md:order-0'>
            <h2 className='mb-10 text-3xl font-semibold text-title'>
              Meu conteúdo!
            </h2>

            <p className='mb-6 leading-10 text-body'>
              Sabemos que hoje em dia todos temos algo à compartilhar, com isso
              vou criar conteúdo com o objetivo de compartilhar meus
              conhecimentos, e poder ajudar para que as pessoas possam evoluir
              com ele.
            </p>
          </div>

          <div className='order-0 md:order-1'>
            <h3 className='mb-2 text-xl font-semibold text-title'>
              Últimos conteúdos
            </h3>

            <p className='text-lg leading-10 text-body'>
              Aguarde! Estou trabalhando para produzir o melhor conteúdo para
              você!
            </p>

            <h3 className='mt-6 text-xl font-semibold text-title'>
              Encontre meu conteúdo
            </h3>

            <div className='grid grid-cols-1 gap-6 mt-2 md:grid-cols-3'>
              <a
                href='https://www.linkedin.com/in/erik-vanderlei-fernandes-a88790b3/'
                target='_blank'
                className='flex flex-col items-center justify-center h-40 text-white shadow-xl bg-branding-linkedin rounded-xl text-light'
                rel='noopener'
              >
                <svg className='w-12 h-12 fill-current' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'
                  />
                </svg>
                <h4 className='mt-2 text-lg font-semibold text-white'>
                  LinkedIn
                </h4>
              </a>
              <a
                href='https://www.youtube.com/channel/UCmnImNyVL1wwb4f7MpG8VIg'
                target='_blank'
                className='flex flex-col items-center justify-center h-40 text-white shadow-xl bg-branding-youtube rounded-xl text-light'
                rel='noopener'
              >
                <svg className='w-12 h-12' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'
                  />
                </svg>
                <h4 className='mt-2 text-lg font-semibold text-white'>
                  Youtube
                </h4>
              </a>
              <NextLink href='/blog'>
                <a className='flex flex-col items-center justify-center h-40 text-white shadow-xl bg-main rounded-xl text-light'>
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
                      d='M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
                    ></path>
                  </svg>
                  <h4 className='mt-2 text-lg font-semibold text-white'>
                    Blog
                  </h4>
                </a>
              </NextLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContentCreated
