import { useFormik } from 'formik';
import { Footer } from '../../components/Layouts/footer/Footer';
import { useContext, useState } from 'react';
import { FirstStep } from './firstStep/firstStep';
import { SecondStep } from './secondStep/secondStep';
import styles from './login.module.scss';
import { ThirdStep } from './thirdStep/thirdStep';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

import { usersData } from './users';
import { AuthContext } from '../../context/autchContext';

export const Login = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const AuthCtx = useContext(AuthContext);

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address!')
      .required('Email is required!'),
    password: Yup.string().required('Password is required!'),
  });

  const secondStep = () => {
    setStep(2);
  };

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: LoginSchema,
    onSubmit: values => {
      const user = usersData.find(
        user =>
          user.email === values.email && user.password === values.password,
      );
      if (!user) {
        setStep(1);
        formik.setErrors({
          email: 'Invalid email or password',
          password: 'Invalid email or password',
        });
        return;
      }
      if (user.twoStepLogin) {
        setStep(3);
      } else {
        AuthCtx?.onLogin(user.email, user.password);
        navigate('/dashboard');
      }
    },
  });

  return (
    <>
      <main className={styles.loginContainer}>
        <>
          {step === 1 && (
            <FirstStep
              email={formik.values.email}
              handleSubmit={formik.handleSubmit}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              errors={formik.errors.email}
              goToSecondStep={secondStep}
            />
          )}
          {step === 2 && (
            <SecondStep
              password={formik.values.password}
              email={formik.values.email}
              handleSubmit={formik.handleSubmit}
              handleChange={formik.handleChange}
              handleBlur={formik.handleBlur}
              errors={formik.errors.password}
              touched={formik.touched.password}
            />
          )}
          {step === 3 && <ThirdStep email={formik.values.email} />}
        </>
      </main>
      <Footer />
    </>
  );
};
