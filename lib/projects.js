import fs from 'fs'
import matter from 'gray-matter'
import remark from 'remark'
import remarkHTML from 'remark-html'

export async function getProjects() {
  const projectFiles = fs.readdirSync('./_projects')
  return await Promise.all(
    projectFiles.map(async projectFile => {
      const project = fs.readFileSync(`./_projects/${projectFile}`, 'utf-8')
      const { data: metadata, content: markdownContent } = matter(project)
      const remarkContent = await remark()
        .use(remarkHTML)
        .process(markdownContent)
      const content = remarkContent.toString()
      return {
        metadata: {
          ...metadata,
          slug: projectFile.replace('.md', ''),
        },
        content,
      }
    })
  )
}

export async function getProjectBySlug(slug) {
  const projectFiles = fs.readdirSync('./_projects')
  const projectFile = projectFiles.find(
    file => file.replace('.md', '') === slug
  )
  const project = fs.readFileSync(`./_projects/${projectFile}`, 'utf-8')
  const { data: metadata, content: markdownContent } = matter(project)
  const remarkContent = await remark().use(remarkHTML).process(markdownContent)
  const content = remarkContent.toString()
  return {
    metadata: {
      ...metadata,
      slug: projectFile.replace('.md', ''),
    },
    content,
  }
}
