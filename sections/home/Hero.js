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
          <a
            className="inline-flex itens-center relative justify-center pl-10 pr-16 py-3 outline-none rounded-xl bg-body text-light focus:outline-none"
            href="https://adalov.com"
            target="_blank"
          >
            Conheça a Adalov
            <svg
              class="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
          <a
            className="inline-flex itens-center relative justify-center pl-10 pr-16 py-3 outline-none rounded-xl bg-main text-light focus:outline-none"
            href="https://www.linkedin.com/in/erik-vanderlei-fernandes/"
            target="_blank"
          >
            Meu linkedin
            <svg
              class="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
