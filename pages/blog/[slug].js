import PostsLayout from '../../components/layouts/PostsLayout'
import { getPostBySlug, getPosts } from '../../lib/posts'

function Blog({ post }) {
  return (
    <PostsLayout
      title={post.metadata.title}
      description={post.metadata.description}
      banner={post.metadata.banner}
    >
      <div
        className='px-4 mx-auto prose prose-xl prose-main'
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></div>
    </PostsLayout>
  )
}

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug)

  return {
    props: {
      post,
    },
  }
}

export async function getStaticPaths() {
  const post = (await getPosts()).map(post => post.metadata.slug)

  return {
    paths: post.map(postSlug => {
      return {
        params: {
          slug: postSlug,
        },
      }
    }),
    fallback: false,
  }
}

export default Blog
