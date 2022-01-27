import DefaultLayout from '@components/layouts/DefaultLayout'
import NextLink from 'next/link'

function FourOhFour({ projects }) {
  return (
    <DefaultLayout
      title="Erik Vanderlei Fernandes - EuErik.dev"
      description="Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza"
    >
      <section
        className="flex items-center h-screen bg-right bg-no-repeat bg-cover md:bg-center"
        style={{ backgroundImage: `url('/static/hero-bg.png')` }}
      >
        <div className="container px-6 mx-auto sm:px-0">
          <h1 className="mb-5 text-9xl text-main">404</h1>
          <h2 className="mb-10 text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed sm:text-3xl md:text-4xl text-title">
            <strong>Ops,</strong> se você porcurou por um <br />
            <strong>Desenvolvedor</strong> por paixão, <br />
            <strong>Designer</strong> por curiosidade, <br />
            <strong>Empreendedor</strong> por natureza
          </h2>

          <NextLink href="/">
            <a className="px-10 py-3 font-semibold outline-none rounded-xl bg-main text-light focus:outline-none">
              Você encontra aqui!
            </a>
          </NextLink>
        </div>
      </section>
    </DefaultLayout>
  )
}

export default FourOhFour
