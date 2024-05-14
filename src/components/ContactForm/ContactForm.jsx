import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { useId } from 'react';
import { addContact } from '../../redux/contactsOps';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const UserSchema = Yup.object().shape({
  name: Yup.string()
    .trim()
    .min(3, 'Too short.')
    .max(50, 'Too long')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Invalid phone number format.Use xxx-xx-xx format.'
    )
    .required('Required'),
});

export default function ContactForm() {
  const usernameId = useId();
  const numberId = useId();

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const newContact = {
      name: values.name,
      number: values.number,
    };
    dispatch(addContact(newContact));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.group}>
          <label className={css.title} htmlFor={usernameId}>
            Name
          </label>
          <Field
            className={css.input}
            name="name"
            type="text"
            id={usernameId}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="name"
            component="span"
          ></ErrorMessage>
        </div>

        <div className={css.group}>
          <label className={css.title} htmlFor={numberId}>
            Number
          </label>
          <Field
            className={css.input}
            name="number"
            type="text"
            id={numberId}
          ></Field>
          <ErrorMessage
            className={css.error}
            name="number"
            component="span"
          ></ErrorMessage>
        </div>

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
