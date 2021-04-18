import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import remarkHTML from 'remark-html'

export async function getPosts() {
  const postFiles = fs.readdirSync('./_posts')
  return await Promise.all(
    postFiles.map(async postFile => {
      const post = fs.readFileSync(`./_posts/${postFile}`, 'utf-8')
      const { data: metadata, content: markdownContent } = matter(post)
      const remarkContent = await remark()
        .use(remarkHTML)
        .process(markdownContent)
      const content = remarkContent.toString()
      return {
        metadata: {
          ...metadata,
          slug: postFile.replace('.md', ''),
        },
        content,
      }
    })
  )
}

export async function getPostBySlug(slug) {
  const postFiles = fs.readdirSync('./_posts')
  const postFile = postFiles.find(file => file.replace('.md', '') === slug)
  const post = fs.readFileSync(`./_posts/${postFile}`, 'utf-8')
  const { data: metadata, content: markdownContent } = matter(post)
  const remarkContent = await remark().use(remarkHTML).process(markdownContent)
  const content = remarkContent.toString()
  return {
    metadata: {
      ...metadata,
      slug: postFile.replace('.md', ''),
    },
    content,
  }
}
