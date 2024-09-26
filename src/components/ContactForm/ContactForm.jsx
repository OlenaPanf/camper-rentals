import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
//import toast from 'react-hot-toast';

export default function ContactForm() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is required')
      .min(3, 'The name is too short')
      .max(50, 'The name is too long'),

    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),

    bookingDate: Yup.date().required(
      'It`s is not possible to send a review without booking date'
    ),

    comment: Yup.string()
      // .required('Please leave your comment')
      // .min(2, 'he comment must contain at least 2 characters')
      .max(500, 'The comment cannot be longer than 500 characters'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={{ name: '', email: '', data: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <div className={css.input}>
            <Field type="name" name="name" id="name" placeholder="Name*" />
            <ErrorMessage name="name" component="div" className={css.error} />
          </div>
          <div className={css.input}>
            <Field type="email" name="email" id="email" placeholder="Email*" />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.input}>
            <Field
              type="date"
              name="date"
              id="date"
              placeholder="Booking date*"
            />

            <ErrorMessage name="date" component="div" className={css.error} />
          </div>

          <div className={css.comment}>
            <Field
              as="textarea"
              name="comment"
              id="comment"
              rows="5"
              placeholder="Comment*"
            />

            <ErrorMessage
              name="comment"
              component="div"
              className={css.error}
            />
          </div>
          <button type="submit" aria-label="Submit" className={css.button}>
            Send
          </button>
        </Form>
      </Formik>
    </div>
  );
}
