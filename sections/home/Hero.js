import BaseButton from '@components/BaseButton'

function Hero() {
  return (
    <section
      className="flex items-center h-screen bg-right bg-no-repeat bg-cover md:bg-center"
      style={{ backgroundImage: `url('/static/hero-bg.png')` }}
    >
      <div className="container px-6 mx-auto sm:px-0">
        <h1 className="mb-2 text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed sm:text-3xl md:text-4xl text-title">
          Graduado em <strong>Marketing</strong>, <br />
          <strong>Desenvolvedor</strong> por paixão, <br />
          <strong>Designer</strong> por curiosidade, <br />
          <strong>Empreendedor</strong> por natureza
        </h1>

        <p className="mb-10 text-body max-w-lg">
          Sou <strong>Erik Vanderlei Fernandes</strong> sócio e diretor de
          tecnologia da <strong>Adalov</strong>. Estou na área da tecnologia
          desde 2010, sempre buscando auxiliar negocios no{' '}
          <strong>melhor uso de seus recursos.</strong>
        </p>

        <div className="flex itens-center justify-start space-y-4 md:space-y-0 md:space-x-4 flex-col md:flex-row">
          <BaseButton color="body" href="https://adalov.com" target="_blank">
            Conheça a Adalov
          </BaseButton>
          <BaseButton
            href="https://www.linkedin.com/in/erik-vanderlei-fernandes/"
            target="_blank"
          >
            Meu linkedin!
          </BaseButton>
        </div>
      </div>
    </section>
  )
}

export default Hero
