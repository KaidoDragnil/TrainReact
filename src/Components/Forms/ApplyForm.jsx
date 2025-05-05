import { Formik, Form, Field } from 'formik';
import s from './Forms.module.css';

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
  return (
    <div className={s.formWrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <label>
            <span>Owner name</span>
            <Field name="ownerName" placeholder="Owner Name" />
          </label>
          <label>
            <span>Owner email</span>
            <Field name="ownerEmail" type="email" placeholder="Email" />
          </label>
          <label>
            <span>Owner phone</span>
            <Field name="ownerPhone" placeholder="Phone" />
          </label>
          <label>
            <span>Pet name</span>
            <Field name="petName" placeholder="Pet name" />
          </label>
          <label>
            <span>Pet age</span>
            <Field name="petAge" type="number" placeholder="Pet age" />
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
          </label>
          <label>
            <span>Summary:</span>
            <Field name="summary" as="textarea" rows={5} />
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
