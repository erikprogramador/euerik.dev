function BaseButton(props) {
  let { color = 'main' } = props
  return (
    <a
      className={`inline-flex itens-center relative justify-center pl-10 pr-16 py-3 outline-none rounded-xl bg-${color} text-light focus:outline-none`}
      {...props}
    >
      {props.children}
      <svg
        class="w-6 h-6 absolute right-4 top-1/2 transform -translate-y-1/2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        ></path>
      </svg>
    </a>
  )
}

export default BaseButton
