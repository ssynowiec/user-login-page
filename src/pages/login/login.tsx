import { Formik } from 'formik';
import { Footer } from '../../components/Layouts/footer/Footer';
import { Card } from '../../components/UI/card/Card';
import { Button } from '../../components/UI/button/Button';
import styles from './login.module.scss';
import { Input } from '../../components/UI/input/Input';
import { useInput } from '../../hooks/useInput';
import logo from '../../logo.svg';
import fbLogo from '../../assets/images/logo/facebook.png';
import googleLogo from '../../assets/images/logo/google.png';
import githubLogo from '../../assets/images/logo/github.png';
import clsx from 'clsx';
import { useState } from 'react';

export const Login = () => {
  const [step, setStep] = useState(1);

  const validateEmail = (email: string | undefined) => {
    const reg = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return reg.test(email || '');
  };

  const secondStep = () => {
    setStep(2);
    console.log('test');
  };

  return (
    <>
      <main className={styles.loginContainer}>
        <Card type='column'>
          <header className={styles.loginHeader}>
            <img src={logo} alt='Company logo' className={styles.logoCompany} />
            <h1 className={styles.loginTitle}>Login</h1>
            <p>Lorem, ipsum dolor sit amet.</p>
          </header>
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
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form className={styles.loginForm} onSubmit={handleSubmit}>
                {step === 1 && (
                  <Input
                    type='email'
                    id='email'
                    inputName='email'
                    autocomlepte='on'
                    autofocus={true}
                    placholder='name@example.com'
                    value={values.email}
                    label='Adres E-mail'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    hasError={!!errors.email}
                    error={errors.email}
                  />
                )}
                {step === 2 && (
                  <Input
                    type='password'
                    id='password'
                    inputName='password'
                    autocomlepte='on'
                    placholder='************'
                    value={values.password}
                    label='Password'
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                )}

                {step === 1 && (
                  <Button
                    type='button'
                    customClass={styles.button}
                    value='continue'
                    isDisabled={!!errors.email}
                    onClick={secondStep}
                  />
                )}

                {step === 2 && (
                  <Button
                    type='submit'
                    customClass={styles.button}
                    value='login'
                    isDisabled={!!errors.password && !values.password}
                  />
                )}
                {step === 1 && (
                  <>
                    <hr className={styles.hr} data-content='or' />
                    <section className={styles.socialLogin}>
                      <Button
                        type='button'
                        customClass={clsx(styles.button, styles.googleButton)}
                      >
                        <div className='left'>
                          <img
                            alt='Google sign-in'
                            src={googleLogo}
                            className={styles.socialLogo}
                          />
                        </div>
                        Login with Google
                      </Button>

                      <Button
                        type='button'
                        customClass={clsx(styles.button, styles.facebookButton)}
                      >
                        <div className='left'>
                          <img
                            alt='Facebook sign-in'
                            src={fbLogo}
                            className={styles.socialLogo}
                          />
                        </div>
                        Login with Facebook
                      </Button>

                      <Button
                        type='button'
                        customClass={clsx(styles.button, styles.githubButton)}
                      >
                        <div className='left'>
                          <img
                            alt='GitHub sign-in'
                            src={githubLogo}
                            className={styles.socialLogo}
                          />
                        </div>
                        Login with GitHub
                      </Button>
                    </section>
                  </>
                )}
              </form>
            )}
          </Formik>
        </Card>
      </main>
      <Footer />
    </>
  );
};
