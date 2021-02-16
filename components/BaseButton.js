import React from 'react'

function BaseButton(props) {
  return (
    <button
      className='px-10 py-3 font-semibold rounded-full outline-none bg-main text-light focus:outline-none'
      {...props}
    >
      {props.children}
    </button>
  )
}

export default BaseButton
