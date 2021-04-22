import NextLink from 'next/link'
import DefaultLayout from '@components/layouts/DefaultLayout'
import Header from '@components/Header'
import { getPosts } from '@lib/posts'

function Blog({ posts }) {
  return (
    <DefaultLayout
      title='Blog | EuErik.dev'
      description='Blog EuErik.dev. Conteúdo objetivo e rápido para te ajudar nos problemas especificos de Desenvolvimento, Design, e Empreendedorismo!'
    >
      <Header />

      <div style={{ height: '80px' }}></div>

      <div className='container py-10 mx-auto'>
        <h1 className='mb-2 text-4xl font-semibold'>Blog</h1>
        <p>
          Conteúdo objetivo e rápido para te ajudar nos problemas especificos de
          Desenvolvimento, Design, e Empreendedorismo
        </p>
      </div>

      <div className='container pb-12 mx-auto'>
        <ul className='grid grid-cols-1 gap-10 space-y-10 md:grid-cols-3'>
          {posts.map(post => (
            <li key={post.slug}>
              <NextLink href={`/blog/${post.slug}`}>
                <a className='relative block'>
                  <img
                    src={post.cover}
                    alt={post.title}
                    className='object-cover w-full rounded-md h-72'
                  />

                  <div className='absolute inset-0 flex flex-col justify-end p-6 rounded-lg bg-opacity-60 bg-dark'>
                    <h2 className='mb-1 text-2xl font-semibold text-light'>
                      {post.title}
                    </h2>

                    <span className='text-xs text-muted'>
                      Publicado em {post.published_at}
                    </span>

                    <p className='mt-2 text-light'>{post.excerpt}</p>
                  </div>
                </a>
              </NextLink>
            </li>
          ))}
        </ul>
      </div>
    </DefaultLayout>
  )
}

export async function getStaticProps() {
  const posts = await getPosts()

  return {
    props: {
      posts: mapPosts(posts),
    },
  }
}

function mapPosts(posts) {
  return posts.map(({ metadata }) => {
    return {
      title: metadata.title,
      slug: metadata.slug,
      excerpt: metadata.description,
      cover: metadata.cover,
      published_at: metadata.published_at,
    }
  })
}

export default Blog
