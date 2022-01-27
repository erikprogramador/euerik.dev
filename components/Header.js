import NextLink from 'next/link'

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="container flex items-center justify-between px-6 py-6 mx-auto sm:px-0">
        <NextLink href="/">
          <a className="flex-shrink-0">
            <img
              src="/static/logo.svg"
              alt="Logo EuErik.dev"
              className="sticky w-12 top-4"
            />
          </a>
        </NextLink>
      </div>
    </header>
  )
}

export default Header
