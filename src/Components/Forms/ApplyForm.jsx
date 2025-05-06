import { Formik, Form, Field, ErrorMessage } from 'formik';
import s from './Forms.module.css';
import * as Yup from 'yup';

const ApplyForm = () => {
  const handleSubmit = (values, options) => {
    console.log(values);
    options.resetForm();
  };
  const initialValues = {
    ownerName: '',
    ownerEmail: '',
    ownerPhone: '',
    petName: '',
    petAge: '',
    petGender: 'male',
    summary: '',
    type: 'cat',
    agree: false,
  };
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

  const applySchema = Yup.object().shape({
    ownerName: Yup.string()
      .trim()
      .min(3, 'Min 3 символи')
      .max(20, 'Max 20 символів')
      .required(),
    ownerEmail: Yup.string().matches(re, 'Is not email!').required(),
    ownerPhone: Yup.string().required(),
    petAge: Yup.number().min(1, 'Min 1').max(40, 'Max 40').required(),
    type: Yup.string().oneOf([
      'cat',
      'dog',
      'crocodile',
      'racoon',
      'elephant',
      'rat',
    ]),
  });
  return (
    <div className={s.formWrapper}>
      <Formik
        validationSchema={applySchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            <span>Owner name</span>
            <Field name="ownerName" placeholder="Owner Name" />
            <ErrorMessage name="ownerName" className="error" component="div" />
          </label>
          <label>
            <span>Owner email</span>
            <Field name="ownerEmail" type="email" placeholder="Email" />
            <ErrorMessage name="ownerEmail" className="error" component="div" />
          </label>
          <label>
            <span>Owner phone</span>
            <Field name="ownerPhone" placeholder="Phone" />
            <ErrorMessage name="ownerPhone" className="error" component="div" />
          </label>
          <label>
            <span>Pet name</span>
            <Field name="petName" placeholder="Pet name" />
            <ErrorMessage name="petName" className="error" component="div" />
          </label>
          <label>
            <span>Pet age</span>
            <Field name="petAge" type="number" placeholder="Pet age" />
            <ErrorMessage name="petAge" className="error" component="div" />
          </label>
          <div className={s.gender}>
            <label>
              <Field name="petGender" type="radio" value="male" />
              Male
            </label>
            <label>
              <Field name="petGender" type="radio" value="female" />
              Female
            </label>
          </div>
          <label>
            <span>Select pet type:</span>
            <Field name="type" as="select">
              <option value="cat">Cat</option>
              <option value="dog">Dog</option>
              <option value="crocodile">Crocodile</option>
              <option value="python">Python</option>
              <option value="racoon">Racoon</option>
              <option value="elephant">Elephant</option>
              <option value="rat">Rat</option>
            </Field>
            <ErrorMessage name="type" className="error" component="div" />
          </label>
          <label>
            <span>Summary:</span>
            <Field name="summary" as="textarea" rows={5} />
            <ErrorMessage name="summary" className="error" component="div" />
          </label>
          <div>
            <label>
              <Field name="agree" type="checkbox" /> I agree with rules!
            </label>
          </div>

          <button type="submit">Apply</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ApplyForm;
