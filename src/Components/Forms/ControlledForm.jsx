import { useState } from 'react';
import s from './Forms.module.css';

const ControlledForm = () => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    age: '',
    summary: '',
    label: '',
    role: 'fullstack',
    accept: false,
  });

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
  };
  const handleChangeInput = e => {
    const { name, value, type, checked } = e.target;
    console.log(name, value);
    if (type === 'checkbox') {
      return setValues({ ...values, [name]: checked });
    }
    setValues({ ...values, [name]: value });
  };
  return (
    <section className={s.formWrapper}>
      <form onSubmit={handleSubmit} className={s.form}>
        <label className={s.label}>
          <span>Username:</span>
          <input
            onChange={handleChangeInput}
            value={values.username}
            className={s.input}
            name="username"
            placeholder="Enter the username:"
          />
        </label>
        <label className={s.label}>
          <span>Email:</span>
          <input
            onChange={handleChangeInput}
            value={values.email}
            className={s.input}
            name="email"
            placeholder="Enter the email:"
          />
        </label>
        <label className={s.label}>
          <span>Age:</span>
          <input
            onChange={handleChangeInput}
            value={values.age}
            className={s.input}
            name="age"
            type="number"
            placeholder="Enter the age:"
          />
        </label>
        <label className={s.label}>
          <span>Summary:</span>
          <textarea
            onChange={handleChangeInput}
            value={values.summary}
            className={s.input}
            name="summary"
            placeholder="Enter the summary:"
          />
        </label>
        <label className={s.label}>
          <span>Label:</span>
          <select
            onChange={handleChangeInput}
            value={values.label}
            className={s.input}
            name="label"
          >
            <option value="junior">junior</option>
            <option value="middle">middle</option>
            <option value="senior">senior</option>
          </select>
        </label>
        <div>
          <label>
            <input
              type="radio"
              checked={values.role === 'backend'}
              onChange={handleChangeInput}
              name="role"
              value="backend"
            />
            Backend
          </label>
          <label>
            <input
              type="radio"
              checked={values.role === 'frontend'}
              onChange={handleChangeInput}
              name="role"
              value="frontend"
            />
            Frontend
          </label>
          <label>
            <input
              type="radio"
              checked={values.role === 'fullstack'}
              onChange={handleChangeInput}
              name="role"
              value="fullstack"
            />
            Fullstack
          </label>
          <label>
            <input
              type="radio"
              checked={values.role === 'devOps'}
              onChange={handleChangeInput}
              name="role"
              value="devOps"
            />
            DevOps
          </label>
          <label>
            <input
              type="checkbox"
              checked={values.accept}
              name="accept"
              onChange={handleChangeInput}
            />
            I want to see this webinar
          </label>
        </div>
        <button disabled={!values.accept} className={s.button}>
          Register
        </button>
      </form>
    </section>
  );
};

export default ControlledForm;
