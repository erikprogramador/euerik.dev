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
      </Head>

      <Component {...pageProps} />
    </div>
  )
}
