import s from './Forms.module.css';

const UncontrolledForm = () => {
  return (
    <section className={s.formWrapper}>
      <form className={s.form}>
        <label className={s.label}>
          <span>Name:</span>
          <input className={s.input} name="name" placeholder="Enter the name" />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            className={s.input}
            name="email"
            placeholder="Enter the email"
          />
        </label>
        <label className={s.label}>
          <span>Password:</span>
          <input
            className={s.input}
            type="password"
            name="password"
            placeholder="Enter the password"
          />
        </label>
        <button className={s.button}>Register</button>
      </form>
    </section>
  );
};
export default UncontrolledForm;
