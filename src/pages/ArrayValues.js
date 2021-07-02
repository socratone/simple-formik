import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';

const ArrayValues = () => {
  const initialValues = {
    friends: [
      {
        name: '',
        email: '',
      },
    ],
  };

  return (
    <section>
      <h2>Array Values</h2>
      <main>
        <Formik
          initialValues={initialValues}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 200));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ values }) => (
            <Form>
              <FieldArray name="friends">
                {({ insert, remove, push }) => (
                  <div>
                    {values.friends.length > 0 &&
                      values.friends.map((friend, index) => (
                        <div key={index}>
                          <Field
                            name={`friends.${index}.name`}
                            placeholder="name"
                            type="text"
                          />
                          <ErrorMessage name={`friends.${index}.name`} />
                          <Field
                            name={`friends.${index}.email`}
                            placeholder="email"
                            type="text"
                          />
                          <ErrorMessage name={`friends.${index}.name`} />
                          <button type="button" onClick={() => remove(index)}>
                            X
                          </button>
                        </div>
                      ))}
                    <button
                      type="button"
                      onClick={() => push({ name: '', email: '' })}
                    >
                      Add Friend
                    </button>
                  </div>
                )}
              </FieldArray>
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      </main>
    </section>
  );
};

export default ArrayValues;
