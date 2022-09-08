import { Card } from '../../../components/UI/card/Card';
import { Input } from '../../../components/UI/input/Input';
import { Button } from '../../../components/UI/button/Button';
import styles from './thirdStep.module.scss';

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
          <div className={styles.inputs}>
            <Input
              type='authCode'
              id='authCode'
              inputName='authCode'
              autocomlepte='on'
              autofocus={true}
              placholder='XXX XXX'
              value={''}
              label='Authentication Code'
              onChange={handleChange}
              // onBlur={handleBlur}
              // hasError={!!errors && touched}
              // error={errors}
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
