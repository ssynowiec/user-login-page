import { Formik } from 'formik';
import { Footer } from '../../components/Layouts/footer/Footer';
import { useState } from 'react';
import { FirstStep } from './firstStep/firstStep';
import { SecondStep } from './secondStep/secondStep';
import styles from './login.module.scss';
import { ThirdStep } from './thirdStep/thirdStep';

export const Login = () => {
  const [step, setStep] = useState(1);

  const validateEmail = (email: string | undefined) => {
    const reg = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return reg.test(email || '');
  };

  const secondStep = () => {
    setStep(2);
  };

  const thirdStep = () => {
    setStep(3);
  };

  return (
    <>
      <main className={styles.loginContainer}>
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={values => {
            interface errorsType {
              email?: string;
              password?: string;
            }
            const errors: errorsType = {};
            if (!values.email) {
              errors.email = 'Email is required!';
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address!';
            }

            if (!values.password) {
              errors.password = `Password can't be empty`;
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            console.log(values);
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, errors }) => (
            <>
              {step === 1 && (
                <FirstStep
                  email={values.email}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.email}
                  goToSecondStep={secondStep}
                />
              )}
              {step === 2 && (
                <SecondStep
                  password={values.password}
                  email={values.email}
                  handleSubmit={handleSubmit}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  errors={errors.password}
                  goToSecondStep={secondStep}
                />
              )}
              {step === 3 && <ThirdStep />}
            </>
          )}
        </Formik>
      </main>
      <Footer />
    </>
  );
};
