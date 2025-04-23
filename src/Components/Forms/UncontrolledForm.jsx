import s from './Forms.module.css';

// Это закинуть в Апп
//
// const register = credentials => {
//   console.log('Data received!');
//   setTimeout(() => {
//     console.log('Send data...');
//   }, 1000);
//   setTimeout(() => {
//     console.log('User was registered successfully!');
//     console.log(credentials);
//   }, 2000);
// };

const UncontrolledForm = ({ register }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
    const form = e.target;
    const name = form.elements.name.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    register({ email, name, password });
    form.reset();
  };
  return (
    <section className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
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
