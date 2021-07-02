import { Formik } from 'formik';
import DatePicker from '../components/DatePicker';

const CustomInput = () => {
  return (
    <section>
      <h2>Custom Input</h2>
      <main>
        <Formik
          initialValues={{ date: '' }}
          validate={(values) => {
            const errors = {};
            if (!values.date) {
              errors.date = 'Required';
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <DatePicker
                  name="date"
                  value={values.date}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
              <div>
                <span>error : </span>
                <span>{errors.date}</span>
              </div>
              <div>
                <span>touched : </span>
                <span>{touched.date ? 'true' : 'false'}</span>
              </div>
            </form>
          )}
        </Formik>
      </main>
    </section>
  );
};

export default CustomInput;
