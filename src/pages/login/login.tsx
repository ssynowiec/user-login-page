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

export const Login = () => {
  const validateEmail = (email: string | undefined) => {
    const reg = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return reg.test(email || '');
  };

  const {
    value: email,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value: string | undefined) => validateEmail(value));

  const {
    value: password,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((value: string | undefined) => validateEmail(value));

  return (
    <>
      <main className={styles.loginContainer}>
        <Card type='column'>
          <header className={styles.loginHeader}>
            <img src={logo} alt='Company logo' className={styles.logoCompany} />
            <h1 className={styles.loginTitle}>Login</h1>
            <p>Lorem, ipsum dolor sit amet.</p>
          </header>
          <form className={styles.loginForm}>
            <div>
              <Input
                type='email'
                id='email'
                inputName='email'
                autocomlepte='on'
                autofocus={true}
                placholder='name@example.com'
                value={email}
                label='Adres E-mail'
                onChange={emailChangeHandler}
                onBlur={emailBlurHandler}
                hasError={emailHasError}
                error='Please enter a valid email address!'
              />
              <Button
                type='button'
                customClass={styles.button}
                value='continue'
                isDisabled={!emailIsValid || emailHasError}
              />
              <hr className={styles.hr} data-content='or' />
              <section className={styles.socialLogin}>
                <Button
                  type='button'
                  customClass={clsx(styles.button, styles.googleButton)}
                >
                  <div className='left'>
                    <img
                      width='23px'
                      height='23px'
                      alt='Google sign-in'
                      src={googleLogo}
                      className={styles.socialLogo}
                    />
                  </div>
                  &nbsp;Login with Google
                </Button>

                <Button
                  type='button'
                  customClass={clsx(styles.button, styles.facebookButton)}
                >
                  <div className='left'>
                    <img
                      width='23px'
                      height='23px'
                      alt='Facebook sign-in'
                      src={fbLogo}
                      className={styles.socialLogo}
                    />
                  </div>
                  &nbsp;Login with Facebook
                </Button>

                <Button
                  type='button'
                  customClass={clsx(styles.button, styles.githubButton)}
                >
                  <div className='left'>
                    <img
                      width='23px'
                      height='23px'
                      alt='GitHub sign-in'
                      src={githubLogo}
                      className={styles.socialLogo}
                    />
                  </div>
                  &nbsp;Login with GitHub
                </Button>
              </section>
            </div>
            <div>
              <Input
                type='password'
                id='password'
                inputName='password'
                autocomlepte='on'
                placholder='************'
                value={password}
                label='Password'
                onChange={passwordChangeHandler}
                onBlur={passwordBlurHandler}
              />
            </div>
          </form>
        </Card>
      </main>
      <Footer />
    </>
  );
};
