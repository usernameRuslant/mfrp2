import { ErrorMessage, Field, Form, Formik, type FormikHelpers } from 'formik';
import { useId } from 'react';
import css from './MyFormik.module.css';
import * as Yup from 'yup';

interface OrderFormValues {
  username: string;
  email: string;
  deliverytime: string;
  delivery: string;
  restrictions: string[];
  message: string;
}
const initialValues: OrderFormValues = {
  username: '',
  email: '',
  deliverytime: '',
  delivery: 'pickup',
  restrictions: [],
  message: '',
};
const MyFormik = () => {
  const fieldId = useId();
  const handleSubmit = (
    values: OrderFormValues,
    actions: FormikHelpers<OrderFormValues>
  ) => {
    console.log('Order data:', values);
    actions.resetForm();
  };
  const OrderFormSchema = Yup.object().shape({
    username: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(30, 'Name is too long')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),

    delivery: Yup.string()
      .oneOf(['pickup', 'courier', 'drone'], 'Invalid delivery method')
      .required('Delivery method is required'),
    restrictions: Yup.array().of(Yup.string()),
    deliveryTime: Yup.string().required('Select delivery time'),
    message: Yup.string()
      .min(5, 'Message too short')
      .max(300, 'Message too long'),
  });
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={OrderFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>

          <label htmlFor={`${fieldId}-username`} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={`${fieldId}-username`}
            className={css.input}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
          <label htmlFor={`${fieldId}-email`} className={css.label}>
            Email
          </label>

          <Field
            type="email"
            name="email"
            id={`${fieldId}-email`}
            className={css.input}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method</legend>

          <label className={css.option}>
            <Field type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>
          <ErrorMessage
            name="delivery"
            component="span"
            className={css.error}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions</legend>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
        </fieldset>

        <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
          Preferred delivery time
        </label>
        <Field
          as="select"
          name="deliveryTime"
          id={`${fieldId}-deliveryTime`}
          className={css.input}
        >
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00–12:00)</option>
          <option value="afternoon">Afternoon (12:00–16:00)</option>
          <option value="evening">Evening (16:00–20:00)</option>
        </Field>
        <ErrorMessage
          name="deliveryTime"
          component="span"
          className={css.error}
        />
        <label htmlFor={`${fieldId}-message`} className={css.label}>
          Additional message
        </label>
        <Field
          as="textarea"
          name="message"
          rows={4}
          id={`${fieldId}-message`}
          className={css.textarea}
        />
        <ErrorMessage name="message" component="span" className={css.error} />
        <button type="submit" className={css.button}>
          Place order
        </button>
      </Form>
    </Formik>
  );
};

export default MyFormik;
