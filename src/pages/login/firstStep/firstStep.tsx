import { Card } from '../../../components/UI/card/Card';
import { Button } from '../../../components/UI/button/Button';
import styles from './firstStep.module.scss';
import { Input } from '../../../components/UI/input/Input';
import logo from '../../../logo.svg';
import fbLogo from '../../../assets/images/logo/facebook.png';
import googleLogo from '../../../assets/images/logo/google.png';
import githubLogo from '../../../assets/images/logo/github.png';
import clsx from 'clsx';

import { ChangeEvent } from 'react';
interface props {
  email: string;
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
  errors: string | undefined;
  goToSecondStep: () => void;
}

export const FirstStep = ({
  email,
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  goToSecondStep,
}: props) => {
  return (
    <Card type='column'>
      <header className={styles.loginHeader}>
        <img src={logo} alt='Company logo' className={styles.logoCompany} />
        <h1 className={styles.loginTitle}>Login</h1>
        <p>Lorem, ipsum dolor sit amet.</p>
      </header>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <Input
          type='email'
          id='email'
          inputName='email'
          autocomlepte='on'
          autofocus={true}
          placholder='name@example.com'
          value={email}
          label='Adres E-mail'
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={!!errors}
          error={errors}
        />

        <Button
          type='button'
          customClass={styles.button}
          value='continue'
          isDisabled={!!errors && !email}
          onClick={goToSecondStep}
        />

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
      </form>
    </Card>
  );
};
