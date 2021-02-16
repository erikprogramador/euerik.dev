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

        {/* Twitter */}
        <meta name='twitter:card' content='summary' key='twcard' />
        <meta name='twitter:creator' content='@erikvfernandes' key='twhandle' />

        {/* Open Graph */}
        <meta property='og:url' content='https://euerik.dev/' key='ogurl' />
        <meta
          property='og:image'
          content='https://euerik.dev/static/preview.png'
          key='ogimage'
        />
        <meta property='og:site_name' content='EuErik.dev' key='ogsitename' />
        <meta property='og:title' content='EuErik.dev' key='ogtitle' />
        <meta
          property='og:description'
          content='Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza'
          key='ogdesc'
        />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}
