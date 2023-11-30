import { twMerge } from 'tailwind-merge'
function Button({ children, onClick, className = '' }) {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `
        text-white py-3 px-4 rounded flex items-center
        
        `,
        className,
      )}
    >
      {children}
    </button>
  )
}

export default Button
