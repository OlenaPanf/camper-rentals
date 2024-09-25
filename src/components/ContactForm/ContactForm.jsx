import { Formik, Form, Field } from 'formik';
// import { ErrorMessage } from 'formik';
import * as Yup from 'yup';
//import toast from 'react-hot-toast';

export default function ContactForm() {
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Please confirm your password'),
  });

  return (
    <div>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{ name: '', email: '', data: '', message: '' }}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <div>
                <Field type="name" name="name" id="name" placeholder="Name*" />
              </div>
              {/* <ErrorMessage name="password" component="div" /> */}
            </div>
            <div>
              <div>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email*"
                />
              </div>
              {/* <ErrorMessage name="password" component="div" /> */}
            </div>
            <div>
              <div>
                <Field
                  type="date"
                  name="date"
                  id="date"
                  placeholder="Booking date*"
                />
              </div>
              {/* <ErrorMessage name="password" component="div" /> */}
            </div>
            <div>
              <Field
                as="textarea"
                name="message"
                id="message"
                rows="5"
                placeholder="Comment*"
              />
            </div>

            <button type="submit" aria-label="Submit">
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
