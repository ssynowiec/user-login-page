import { Card } from '../../../components/UI/card/Card';
import { Button } from '../../../components/UI/button/Button';
import { Input } from '../../../components/UI/input/Input';
import logo from '../../../logo.svg';
import styles from './secondStep.module.scss';

import { ChangeEvent } from 'react';
interface props {
  password: string;
  email: string;
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
  errors: string | undefined;
  touched: boolean | undefined;
}

export const SecondStep = ({
  password,
  handleSubmit,
  handleChange,
  handleBlur,
  errors,
  touched,
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
          type='password'
          id='password'
          inputName='password'
          autocomlepte='on'
          autofocus={true}
          placholder='************'
          value={password}
          label='Password'
          onChange={handleChange}
          onBlur={handleBlur}
          hasError={!!errors && touched}
          error={errors}
        />
        <Button
          type='submit'
          customClass={styles.button}
          value='login'
          isDisabled={!!errors && !password}
          style='dark'
        />
      </form>
    </Card>
  );
};
