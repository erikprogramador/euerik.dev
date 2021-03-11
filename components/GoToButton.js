import React, { useState } from 'react'
import BaseButton from './BaseButton'

function GoToButton({ children, go }) {
  function handleGoToClick(evt) {
    evt.preventDefault()
    const baseOffsetElement = document.querySelector('#base-offset')
    const elementOffset = document.querySelector(`#${go}`)

    window.scrollTo({
      top: baseOffsetElement.offsetTop + elementOffset.offsetTop,
      behavior: 'smooth',
    })
  }

  return <BaseButton onClick={handleGoToClick}>{children}</BaseButton>
}

export default GoToButton
