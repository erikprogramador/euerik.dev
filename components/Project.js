import React from 'react'
import NextLink from 'next/link'

function Project({ project }) {
  return (
    <NextLink href={`/projetos/${project.metadata.slug}`}>
      <a
        className={`flex flex-col items-center justify-center h-48 p-10 text-center sm:h-64 text-light rounded-xl shadow-lg ${project.metadata.color}`}
      >
        <div className='mb-3'>
          <img
            src={project.metadata.logo}
            alt={`Logo ${project.metadata.title}`}
            className='w-16'
          />
        </div>

        <h3 className='text-xl font-semibold'>{project.metadata.title}</h3>
      </a>
    </NextLink>
  )
}

export default Project
