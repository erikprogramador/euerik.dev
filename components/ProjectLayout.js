import React from 'react'
import DefaultLayout from './DefaultLayout'

function ProjectLayout({ children, title, description }) {
  return (
    <DefaultLayout
      title={`EuErik.dev - Projeto ${title}`}
      description={description}
    >
      {children}
    </DefaultLayout>
  )
}

export default ProjectLayout
