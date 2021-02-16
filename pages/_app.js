import '../styles/index.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <link
          rel='shortcut icon'
          href='/static/favicon.png'
          type='image/x-icon'
        />

        <title>EuErik.dev</title>

        <meta
          name='description'
          content='Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza'
        />

        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}
