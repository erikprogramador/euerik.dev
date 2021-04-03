import NextLink from 'next/link'
import DefaultLayout from '../components/DefaultLayout'

export default function Home() {
  return (
    <DefaultLayout
      title='Blog - EuErik.dev'
      description='Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza'
    >
      <div className='container mx-auto'>
        <header className='flex items-center justify-between py-6'>
          <div className='flex items-center'>
            <img
              src='/static/logo.svg'
              alt='Logo EuErik.dev'
              className='w-12 mr-4'
            />
            <h1 className='text-2xl font-semibold text-title mt-6'>
              <span className='text-main'>EuErik.dev</span> meu Blog
            </h1>
          </div>

          <nav className='flex items-center space-x-6'>
            <NextLink href='/'>
              <a className='font-semibold text-title'>Home</a>
            </NextLink>

            <a
              href='https://www.linkedin.com/in/erik-vanderlei-fernandes-a88790b3/'
              target='_blank'
              className='flex items-center justify-center h-10 w-14 text-light bg-branding-linkedin rounded-xl'
            >
              <svg className='w-6 h-6 fill-current' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'
                />
              </svg>
            </a>
            <a
              href='https://www.youtube.com/channel/UCmnImNyVL1wwb4f7MpG8VIg'
              target='_blank'
              className='flex items-center justify-center h-10 w-14 text-light bg-branding-youtube rounded-xl'
            >
              <svg className='w-6 h-6' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z'
                />
              </svg>
            </a>
          </nav>
        </header>

        <p className='text-lg leading-10 text-body'>
          Aguarde! Estou trabalhando para produzir o melhor conteúdo para você!
        </p>
      </div>
    </DefaultLayout>
  )
}
