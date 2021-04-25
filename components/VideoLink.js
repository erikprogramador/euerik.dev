function VideoLink({ link, title, cover, event }) {
  return (
    <a
      href={link}
      target='_blank'
      className='relative flex items-center justify-center overflow-hidden rounded-xl'
      rel='noreferrer'
    >
      <div className='absolute inset-0 opacity-60 bg-main'></div>

      <img
        src={cover}
        alt={`Link da palestra ${title}`}
        className='object-cover w-full h-52'
        width='640'
        height='192'
        loading='lazy'
      />

      <div className='absolute flex items-center text-light'>
        <svg
          className='w-12 h-12 mr-2'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z'
            clipRule='evenodd'
          ></path>
        </svg>
        <div>
          <h3 className='font-semibold text-white'>{title}</h3>
          <span className='text-sm text-white'>{event}</span>
        </div>
      </div>
    </a>
  )
}

export default VideoLink
