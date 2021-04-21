const fs = require('fs')
const globby = require('globby')
const prettier = require('prettier')

async function generateSiteMap() {
  const pages = await globby([
    'pages/**/*.js',
    '!pages/_*.js',
    '!pages/**/[id].js',
    '!pages/**/[slug].js',
    '!pages/api',
    '_posts/*.md',
    '_projects/*.md',
  ])

  const sitemap = `
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          ${pages
            .map(page => {
              const path = `/${page}`
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
                .replace('/index', '')
                .replace('//', '/')
                .replace('//blog', '/blog')
                .replace('//projetos', '/blog')
                .replace('_projects', 'projetos')
                .replace('_posts', 'blog')
              return path.replace('/', '')
            })
            .map(path => {
              const url = `${process.env.BASE_DOMAIN}/${path}`
              return `
                      <url>
                          <loc>${url}</loc>
                      </url>
                  `
            })
            .join('')}
      </urlset>
  `

  const formatedSitemap = prettier.format(sitemap, {
    plugins: [require('@prettier/plugin-xml')],
  })

  fs.writeFileSync('public/sitemap.xml', formatedSitemap.replace(';', ''))
}

generateSiteMap()
