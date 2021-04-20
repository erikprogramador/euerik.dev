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

      <div className='max-w-3xl py-10 mx-auto'>
        <h1 className='mb-2 text-4xl font-semibold'>Blog</h1>
        <p>
          Conteúdo objetivo e rápido para te ajudar nos problemas especificos de
          Desenvolvimento, Design, e Empreendedorismo
        </p>
      </div>

      <div className='max-w-3xl pb-12 mx-auto'>
        <ul className='space-y-10'>
          {posts.map(post => (
            <li key={post.slug}>
              <NextLink href={`/blog/${post.slug}`}>
                <a className='block p-4 border rounded-md border-muted hover:border-main'>
                  <h2 className='text-3xl font-semibold text-title'>
                    {post.title}
                  </h2>
                  <span className='text-xs text-muted'>
                    Publicado em {post.published_at}
                  </span>
                  <p className='mt-2 mb-4 text-body'>{post.excerpt}</p>

                  <ul className='flex items-center space-x-3'>
                    {post.tags.map(tag => (
                      <li
                        className='px-3 text-xs rounded-full bg-main text-light'
                        key={tag}
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
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
      published_at: metadata.published_at,
      tags: metadata.tags.split(',').map(tag => tag.trim()),
    }
  })
}

export default Blog
