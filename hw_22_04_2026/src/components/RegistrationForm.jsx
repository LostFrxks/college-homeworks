import { useForm } from 'react-hook-form'
import FormField from './FormField'

function RegistrationForm({ onRegister }) {
  const {
    register,
    handleSubmit,
    getValues,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  })

  const onSubmit = (data) => {
    onRegister(data)
    reset()
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <FormField
        id="name"
        label="Имя"
        type="text"
        placeholder="Введите имя"
        register={register}
        error={errors.name}
        rules={{
          required: 'Введите имя',
        }}
      />

      <FormField
        id="email"
        label="Email"
        type="email"
        placeholder="Введите email"
        register={register}
        error={errors.email}
        rules={{
          required: 'Введите email',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Введите корректный email',
          },
        }}
      />

      <FormField
        id="password"
        label="Пароль"
        type="password"
        placeholder="Введите пароль"
        register={register}
        error={errors.password}
        rules={{
          required: 'Введите пароль',
          minLength: {
            value: 6,
            message: 'Пароль должен содержать минимум 6 символов',
          },
        }}
      />

      <FormField
        id="confirmPassword"
        label="Подтверждение пароля"
        type="password"
        placeholder="Повторите пароль"
        register={register}
        error={errors.confirmPassword}
        rules={{
          required: 'Подтвердите пароль',
          validate: (value) =>
            value === getValues('password') || 'Пароли должны совпадать',
        }}
      />

      <button className="form__button" type="submit">
        Зарегистрироваться
      </button>
    </form>
  )
}

export default RegistrationForm
