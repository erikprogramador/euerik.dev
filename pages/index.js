import Hero from '@sections/home/Hero';
import DefaultLayout from '@layouts/DefaultLayout';
import About from '@sections/home/About';
import Adalov from '@sections/home/Adalov';
import OnTheWeb from '@sections/home/OnTheWeb';

function Home() {
  return (
    <DefaultLayout
      title="Erik Vanderlei Fernandes"
      description="Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza"
    >
      <Hero />
      <About />
      <Adalov />
      <OnTheWeb />
    </DefaultLayout>
  );
}

export default Home;
