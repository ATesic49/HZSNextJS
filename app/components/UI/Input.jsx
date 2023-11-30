function Input(props) {
  const { heading, placeholder, type, name, value, onChange, validationError } =
    props

  return (
    <div>
      <label htmlFor={name} className="text-l">
        {heading}
      </label>
      <input
        className={`mt-2 text-black py-2 border-red-50 border-[.2px] radius-sm rounded-[.5em] px-3 text-l w-full focus-visible:outline-none ${
          validationError ? 'border-red-500' : ''
        }`}
        placeholder={placeholder}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
      {validationError && (
        <span className="text-red-500">{validationError}</span>
      )}
    </div>
  )
}

export default Input
