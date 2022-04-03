import LinkedinBtn from '@components/LinkedinBtn';
import AdalovBtn from '@components/AdalovBtn';

export default function Hero() {
  return (
    <section
      className="flex items-center justify-center md:justify-start flex-col md:flex-row relative"
      style={{ height: '70vh' }}
    >
      <img
        src="/static/hero.svg"
        alt="Ilustração de conexões"
        className="hidden md:block md:absolute md:right-0 md:top-0"
      />
      <div className="container px-6 mx-auto sm:px-0">
        <span className="font-bold text-primary">
          Olá, meu nome é Erik Vanderlei Fernandes
        </span>
        <h1 className="mb-2 text-2xl leading-relaxed sm:leading-relaxed md:leading-relaxed sm:text-3xl md:text-5xl text-title">
          Graduado em <strong>Marketing</strong>, <br />
          <strong>Desenvolvedor</strong> por paixão, <br />
          <strong>Designer</strong> por curiosidade, <br />
          <strong>Empreendedor</strong> por natureza
        </h1>

        <div className="flex items-start justify-start space-y-6 mt-6 md:items-center md:space-y-0 md:space-x-6 flex-col md:flex-row">
          <LinkedinBtn />
          <AdalovBtn />
        </div>
      </div>
    </section>
  );
}
