function BaseButton(props) {
  return (
    <button
      className='px-10 py-3 font-semibold outline-none rounded-xl bg-main text-light focus:outline-none'
      {...props}
    >
      {props.children}
    </button>
  )
}

export default BaseButton
