import { Card } from '../../../components/UI/card/Card';
import { Input } from '../../../components/UI/input/Input';
import { Button } from '../../../components/UI/button/Button';
import styles from './thirdStep.module.scss';
import logo from '../../../logo.svg';
import clsx from 'clsx';

export const ThirdStep = () => {
  let i = 0;
  const handleChange = () => {
    i++;
  };
  const handleBlur = () => {
    console.log('');
  };
  return (
    <Card type='column'>
      <header className={styles.loginHeader}>
        <img src={logo} alt='Company logo' className={styles.logoCompany} />
        <h1 className={styles.loginTitle}>Login</h1>
        <p>Lorem, ipsum dolor sit amet.</p>
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
