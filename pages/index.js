import Hero from '@sections/home/Hero'
import DefaultLayout from '@layouts/DefaultLayout'

function Home() {
  return (
    <DefaultLayout
      title="Erik Vanderlei Fernandes - EuErik.dev"
      description="Desenvolvedor por paixão, Designer por curiosidade, Empreendedor por natureza"
    >
      <Hero />
    </DefaultLayout>
  )
}

export default Home
