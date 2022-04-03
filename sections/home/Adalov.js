import AdalovBtn from '@components/AdalovBtn';

export default function Adalov() {
  return (
    <section
      className="py-48 bg-adalov transform -rotate-6 w-full"
      style={{ width: '110%', '--tw-translate-x': '-5%' }}
    >
      <div className="w-full transform rotate-6">
        <div className="container mx-auto grid grid-cols-12 gap-10">
          <div className="text-dark col-span-8">
            <h2 className="font-bold text-4xl mb-10">Me conheça melhor</h2>
            <div className="space-y-4 leading-8 mb-6">
              <p>
                <strong>Usamos tecnologia para resolver problemas.</strong>{' '}
                <br />
                Não importa a categoria, pode ser uma simples página de vendas
                para um lançamento ou um mega projeto de integração; a migração
                de um banco de dados ou um ERP completo criado do zero; a
                automatização de relatórios ou um aplicativo mobile…
              </p>
              <p>
                Sério, aqui <strong>não fugimos de desafios.</strong>
              </p>
              <p>
                Nosso diferencial? Na sinceridade e sem rodeios? <br />
                <strong>Nós entregamos como ninguém!</strong> É isso. Escopo,
                tempo, custo e qualidade. Pode não parecer lá um grande
                diferencial, mas se você já trabalhou com outras empresas ou
                desenvolvedores freelancers, sabe bem do que estamos falando.
                Nós entregamos muito!
              </p>
            </div>

            <AdalovBtn />
          </div>

          <div className="flex items-center justify-center col-span-4">
            <img
              src="/static/condessa.png"
              alt="Adalov condessa"
              className="h-96"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
