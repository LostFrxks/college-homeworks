function FormField({
  id,
  label,
  type,
  placeholder,
  register,
  rules,
  error,
}) {
  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`form__input ${error ? 'form__input--error' : ''}`}
        aria-invalid={Boolean(error)}
        {...register(id, rules)}
      />
      <p className="form__error">{error?.message || ''}</p>
    </div>
  )
}

export default FormField
