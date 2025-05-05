import { Form, Formik, Field } from 'formik';
import s from './Forms.module.css';

const RegisterFormikForm = () => {
  const onSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form className={s.form}>
          <label className={s.label}>
            <span>Name:</span>
            <Field className={s.input} name="name" />
          </label>
          <label className={s.label}>
            <span>Email:</span>
            <Field className={s.input} name="email" type="email" />
          </label>
          <label className={s.label}>
            <span>Password:</span>
            <Field className={s.input} name="password" type="password" />
          </label>
          <button className={s.button} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterFormikForm;
