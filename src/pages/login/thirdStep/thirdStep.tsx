import { Card } from '../../../components/UI/card/Card';
import { Button } from '../../../components/UI/button/Button';
import styles from './thirdStep.module.scss';
import clsx from 'clsx';

import { usersData } from '../users';
interface ThirdStepProps {
  email: string;
}

export const ThirdStep = ({ email }: ThirdStepProps) => {
  const user = usersData.find(user => user.email === email);
  let i = 0;

  const handleChange = () => {
    i++;
    console.log(i);
  };

  return (
    <Card type='column'>
      <header className={styles.loginHeader}>
        <img
          src={user?.profilePhoto}
          alt={`User's profile photo`}
          className={styles.profilePhoto}
        />
        <h1 className={styles.loginTitle}>Witaj ponownie!</h1>
        <p>{user?.name}</p>
      </header>
      <form className={styles.loginForm}>
        <div className={styles.inputContainer}>
          <label htmlFor='code' className={styles.inputLabel}>
            Authentication Code
          </label>
          <div className={styles.inputs}>
            <input
              type='text'
              id='code'
              maxLength={1}
              minLength={1}
              required
              autoFocus
              onChange={handleChange}
              className={clsx(styles.input, 'code')}
            />
            <input
              type='text'
              id='number2'
              maxLength={1}
              minLength={1}
              required
              onChange={handleChange}
              className={clsx(styles.input, 'code')}
            />
            <input
              type='text'
              id='number3'
              maxLength={1}
              minLength={1}
              required
              onChange={handleChange}
              className={clsx(styles.input, 'code')}
            />
            <input
              type='text'
              id='number4'
              maxLength={1}
              minLength={1}
              required
              onChange={handleChange}
              className={clsx(styles.input, 'code')}
            />
            <input
              type='text'
              id='number5'
              maxLength={1}
              minLength={1}
              required
              onChange={handleChange}
              className={clsx(styles.input, 'code')}
            />
            <input
              type='text'
              id='number6'
              maxLength={1}
              minLength={1}
              required
              onChange={handleChange}
              className={clsx(styles.input, 'code')}
            />
          </div>
        </div>
        <Button
          type='submit'
          customClass={styles.button}
          value='verify code'
          isDisabled={true}
        />
      </form>
    </Card>
  );
};
