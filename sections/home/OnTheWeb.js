import AdalovBtn from '@components/AdalovBtn';
import LinkedinBtn from '@components/LinkedinBtn';
import OnTheWebItem from '@components/OnTheWebItem';

export default function OnTheWeb() {
  return (
    <section className="py-28">
      <div className="container mx-auto">
        <h2 className="font-bold text-4xl mb-10">Na Web</h2>
        <p className="text-dark max-w-4xl mb-8">
          Acredito muito que o conhecimento é a base do crescimento de qualquer
          pessoa, por isso estou sempre procurando formas de compartilhar. Desde
          participar da organização da comunidade PHPSP, palestras e até ter
          participado de um artigo no Canaltech. Isso tudo você vai conseguir
          conferir abaixo.
        </p>
        <div className="grid grid-cols-3 gap-10 mb-16">
          <OnTheWebItem
            image="/static/laraconf-brasil-2018.jpeg"
            title="Laravel e seu ecossistema v1.0"
            event="Laraconf Brasil 2018"
            link="https://www.youtube.com/watch?v=ZV5IcfT15GI"
            linkLabel="Assistir palestra"
          />
          <OnTheWebItem
            image="/static/php-community-summit-2020.jpeg"
            title="Laravel e seu ecossistema v2.0"
            event="PHP Community Summit 2020"
            link="https://www.youtube.com/watch?v=5bvwsA1lVmo"
            linkLabel="Assistir palestra"
          />
          <OnTheWebItem
            image="/static/canaltech-desenvolvedor-frontend.jpeg"
            title="Quer se tornar um desenvolvedor front-end?"
            event="Canaltech 2022"
            link="https://canaltech.com.br/mercado/quer-se-tornar-um-desenvolvedor-front-end-confira-essas-dicas-208986/"
            linkLabel="Artigo completo"
          />
        </div>

        <div className="flex items-center justify-center space-x-6">
          <LinkedinBtn />
          <AdalovBtn />
        </div>
      </div>
    </section>
  );
}
