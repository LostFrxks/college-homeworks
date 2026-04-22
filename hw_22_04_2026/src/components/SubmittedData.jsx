function SubmittedData({ submittedUser }) {
  return (
    <section className="result">
      <h2 className="result__title">Отправленные данные</h2>
      {submittedUser ? (
        <div className="result__list">
          <div className="result__row">
            <span className="result__label">Имя</span>
            <span className="result__value">{submittedUser.name}</span>
          </div>
          <div className="result__row">
            <span className="result__label">Email</span>
            <span className="result__value">{submittedUser.email}</span>
          </div>
          <div className="result__row">
            <span className="result__label">Пароль</span>
            <span className="result__value">{submittedUser.password}</span>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default SubmittedData
