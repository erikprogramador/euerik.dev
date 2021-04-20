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
              const path = page
                .replace('pages', '')
                .replace('.js', '')
                .replace('.md', '')
              const route = path === '/index' ? '' : path
              const url = `${process.env.BASE_DOMAIN}/${route}`
                .replace('//', '/')
                .replace('//blog', '/blog')
                .replace('_projects', 'projetos')
                .replace('_posts', 'blog')
                .replace(':/', '://')
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

  fs.writeFileSync('public/sitemap.xml', formatedSitemap)
}

generateSiteMap()
