import React from 'react'
import NextLink from 'next/link'

function Project({ project }) {
  return (
    <NextLink href={`/projetos/${project.slug}`}>
      <a
        className={`flex flex-col items-center justify-center h-48 p-10 text-center sm:h-64 text-light rounded-xl shadow-lg ${project.color}`}
      >
        <div className='mb-3'>
          <img
            src={project.logo}
            alt={`Logo ${project.title}`}
            className='w-16'
          />
        </div>

        <h3 className='text-xl font-semibold'>{project.title}</h3>
      </a>
    </NextLink>
  )
}

export default Project
