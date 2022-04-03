import LinkedinBtn from '@components/LinkedinBtn';

export default function About() {
  return (
    <section class="py-28">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl mb-10">Me conheça melhor</h2>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-4">
            <img
              src="/static/erik.jpeg"
              alt="Erik Vanderlie Fernandes"
              className="rounded-md"
            />
          </div>
          <div className="col-span-8 flex items-start justify-center flex-col">
            <div className="space-y-4 leading-8 mb-6">
              <p>
                Na área da tecnologia desde 2010, sempre buscando auxiliar
                negócios no melhor uso de seus recursos. Com o objetivo de
                auxiliar meus clientes e parceiros busco estudar diversas
                áreas... sério, diversas mesmo... Desde desenvolvimento de
                sistemas, marketing, audiovisual, até mecânica de autos.
              </p>
              <p>
                Cada disciplina nova que aprendo, busco sempre trazer e aplicar
                no meu dia a dia, meus negócios, e para meus clientes.
              </p>
              <p>
                Hoje sou sócio da Adalov, empresa onde o objetivo é “Resolver o
                problema do cliente”. Por isso estou sempre buscando me
                atualizar, e olhar outros pontos de vista fora da tecnologia.
                Para que eu consiga resolver o problema do cliente!
              </p>
            </div>
            <LinkedinBtn />
          </div>
        </div>
      </div>
    </section>
  );
}
