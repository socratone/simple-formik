import { Formik } from 'formik';
import { useQuery } from 'react-query';

const ReactQuery = () => {
  const { data } = useQuery(
    'react-query',
    () =>
      new Promise((resolve) => {
        resolve('이전의 값');
      })
  );

  if (!data) return null;

  return (
    <section>
      <h2>React Query</h2>
      <main>
        <Formik
          initialValues={{ data }}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              resetForm({ values: { data: '새로운 값' } });
              setSubmitting(false);
            }, 200);
          }}
        >
          {({ values, handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <span>data : </span>
                <span>{values.data}</span>
              </div>
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          )}
        </Formik>
      </main>
    </section>
  );
};

export default ReactQuery;
