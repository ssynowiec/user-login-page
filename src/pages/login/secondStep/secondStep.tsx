import { Card } from '../../../components/UI/card/Card';
import { Button } from '../../../components/UI/button/Button';
import { Input } from '../../../components/UI/input/Input';
import styles from './secondStep.module.scss';
import profile from '../../../assets/images/profile-photo.jpg';

import { ChangeEvent } from 'react';
interface props {
  password: string;
  email: string;
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent) => void;
  handleBlur: (e: FocusEvent) => void;
  errors: string | undefined;
  goToSecondStep: () => void;
}

export const SecondStep = ({
  password,
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
        <img src={profile} alt='Company logo' className={styles.profilePhoto} />
        <h1 className={styles.loginTitle}>Witaj ponownie!</h1>
        <p>{email}</p>
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
