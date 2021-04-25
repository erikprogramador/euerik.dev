import NextLink from 'next/link'
import React, { useEffect, useState } from 'react'
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
    <ul className='flex items-center space-x-2'>
      {paths.map(({ title, path }, index) => (
        <React.Fragment key={path}>
          <li>
            <NextLink href={path}>
              <a
                className={
                  isLastIndex(paths, index)
                    ? 'capitalize text-xs text-body'
                    : 'capitalize text-xs text-main'
                }
              >
                {title}
              </a>
            </NextLink>
          </li>
          {isLastIndex(paths, index) && (
            <li className='text-xs text-muted'>/</li>
          )}
        </React.Fragment>
      ))}
    </ul>
  )
}

export default BreadCrumbs
