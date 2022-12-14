import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import { Home } from './Home';
import { Page404 } from './pages/404';
import { Login } from './pages/login/login';
import { Dashboard } from './pages/dashboard/dashboard';
import reportWebVitals from './reportWebVitals';
import { PrivateRoute } from './components/PrivateRoute';
import { AuthContextProvider } from './context/autchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route
            path='/dashboard'
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path='*' element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
