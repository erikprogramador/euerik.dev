import LinkedinBtn from '@components/LinkedinBtn';
import AdalovBtn from '@components/AdalovBtn';

export default function Hero() {
  return (
    <section
      className="flex items-center bg-right bg-no-repeat bg-contain"
      style={{ backgroundImage: `url('/static/hero.svg')`, height: '700px' }}
    >
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

        <div className="flex items-center justify-start space-x-6">
          <LinkedinBtn />
          <AdalovBtn />
        </div>
      </div>
    </section>
  );
}
