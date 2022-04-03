import DefaultLayout from '@components/layouts/DefaultLayout';
import NextLink from 'next/link';

function FourOhFour({ projects }) {
  return (
    <DefaultLayout
      title="Erik Vanderlei Fernandes - EuErik.dev"
      description="Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza"
    >
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="h-screen flex justify-center flex-col items-start">
            <h1 className="text-9xl text-main font-bold">404</h1>

            <p className="max-w-xl mb-4 text-dark text-lg">
              Fique tranquilo, somente não encontramos a página que você
              procurava. Retorne para a página incial e veja todo o conteúdo
              disponível.
            </p>

            <NextLink href="/">
              <a className="px-10 py-3 font-semibold outline-none rounded-md bg-main text-light focus:outline-none">
                <span>Página inicial</span>
              </a>
            </NextLink>
          </div>

          <div className="hidden md:flex items-center justify-center">
            <img src="/static/not-found.svg" alt="" />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}

export default FourOhFour;
