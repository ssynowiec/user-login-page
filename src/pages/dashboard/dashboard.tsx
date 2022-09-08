import { Footer } from '../../components/Layouts/footer/Footer';
import { Nav } from '../../components/Layouts/nav/Nav';
import styles from './dashboard.module.scss';

export const Dashboard = () => {
  return (
    <>
      <Nav />
      <main className={'test'}>
        <h1>Dashboard</h1>
      </main>
      <Footer />
    </>
  );
};
