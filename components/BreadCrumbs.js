import NextLink from 'next/link'
import { useEffect, useState } from 'react'
function BreadCrumbs() {
  const [paths, setPaths] = useState([])

  useEffect(() => {
    let lastPath = ''
    const extractedPaths = window.location.pathname
      .split('/')
      .filter(path => path != '')
      .map(path => {
        lastPath += `/${path}`
        return {
          path: lastPath,
          title: path.split('-').join(' '),
        }
      })

    setPaths([
      {
        path: '/',
        title: 'Página inicial',
      },
      ...extractedPaths,
    ])
  }, [])

  function isLastIndex(paths, index) {
    return index < paths.length - 1
  }

  return (
    <ul className='flex items-center space-x-4'>
      {paths.map(({ title, path }, index) => (
        <>
          <li key={path}>
            <NextLink href={path}>
              <a
                className={
                  isLastIndex(paths, index)
                    ? 'capitalize text-body'
                    : 'capitalize text-main'
                }
              >
                {title}
              </a>
            </NextLink>
          </li>
          {isLastIndex(paths, index) && <li className='text-muted'>/</li>}
        </>
      ))}
    </ul>
  )
}

export default BreadCrumbs
