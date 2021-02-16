import React, { useState } from 'react'
import BaseButton from './BaseButton'

function GoToButton({ children, go }) {
  const [modalVisible, setModalVisible] = useState(false)
  function handleButtonClick(evt) {
    evt.preventDefault()

    setModalVisible(true)
  }

  return (
    <>
      <BaseButton onClick={handleButtonClick}>{children}</BaseButton>

      <div
        className={classNameOption(
          'fixed inset-0 flex items-center justify-center transition-opacity',
          modalVisible,
          'opacity-0 pointer-events-none',
          'opacity-100 pointer-events-auto'
        )}
      >
        <div
          className='absolute inset-0 opacity-75 bg-main'
          onClick={() => setModalVisible(false)}
        ></div>

        <div className='relative p-6 rounded-lg bg-light'>
          <div>
            <h3 className='mb-4 text-3xl font-semibold text-center text-title'>
              Ops!
            </h3>

            <div className='mb-8 leading-relaxed text-center text-body'>
              <p>Ainda estamos com o site em desenvolvimento!</p>
              <p>
                Enquanto isso você pode me conhecer um pouco no meu linkedin!
              </p>
            </div>

            <div className='text-center'>
              <a
                href='https://www.linkedin.com/in/erik-vanderlei-fernandes-a88790b3/'
                target='_blank'
                className='inline-flex items-center font-semibold text-main'
              >
                <svg className='w-6 h-6 mr-2' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z'
                  />
                </svg>
                <span>Acessar o Linkedin</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function classNameOption(baseClass, state, invalid, valid) {
  return `${baseClass} ${state ? valid : invalid}`
}

export default GoToButton
