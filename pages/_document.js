import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  render() {
    return (
      <Html lang='pt-BR'>
        <Head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'scrip','dataLayer','${process.env.GTM_KEY}');
              `,
            }}
          />
        </Head>
        <body>
          <noscript>
            <iframe
              src='https://www.googletagmanager.com/ns.html?id=GTM-PSCBJ57'
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
