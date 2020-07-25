export default function Home() {
  return (
    <>
      <header className='fixed inset-x-0 top-0 py-12'>
        <div className='container mx-auto'>
          <img src='/static/logo.svg' alt='EuErik.dev logo' />
        </div>
      </header>

      <div className='h-screen w-screen flex items-center justify-center flex-col'>
        <div className='mb-6'>
          <h1 className='text-6xl text-gray-900 text-center'>
            <strong>Olá,</strong> <br /> Eu sou Erik o Dev
          </h1>
          <h2 className='text-center text-xl text-gray-700 uppercase tracking-wider'>
            Desenvolvedor, Designer, Empreendedor
          </h2>
        </div>

        <div className='rounded bg-gray-900 py-6 px-8 text-white flex items-center space-x-2 text-lg shadow-md'>
          <span className='text-indigo-500'>const</span>
          <span className=''>saberMais</span>
          <span className='text-indigo-500'>=</span>
          <span className='text-yellow-500'>await</span>

          <div>
            <span>construirSite</span>
            <span className='text-indigo-500'>()</span>
          </div>
        </div>
      </div>
    </>
  )
}
