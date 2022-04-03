import Footer from '@components/Footer';
import Header from '@components/Header';
import Head from 'next/head';

function DefaultLayout({ children, title, description }) {
  return (
    <>
      <Head>
        <link
          rel="shortcut icon"
          href="/static/favicon.png"
          type="image/x-icon"
        />

        <title>{title}</title>

        <meta name="description" content={description} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content="@erikvfernandes" key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content="https://euerik.dev/" key="ogurl" />
        <meta
          property="og:image"
          content="https://euerik.dev/static/preview.png"
          key="ogimage"
        />
        <meta property="og:site_name" content="EuErik.dev" key="ogsitename" />
        <meta property="og:title" content={title} key="ogtitle" />
        <meta property="og:description" content={description} key="ogdesc" />
      </Head>

      <Header />

      <div class="w-screen overflow-x-hidden">{children}</div>

      <Footer />
    </>
  );
}

export default DefaultLayout;
