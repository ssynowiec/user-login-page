import { createContext, useEffect, useState } from 'react';

type AuthContextState = {
  isLogged: boolean;
  loggedUser: undefined | string;
  onLogin: (email: string, password: string) => void;
  onLogout: () => void;
};

export const AuthContext = createContext<AuthContextState | null>(null);

interface AuthContextProviderProps {
  children: JSX.Element;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [loggedUser, setLoggedUser] = useState('');

  useEffect(() => {
    const storedUserLogged = localStorage.getItem('isLogged');
    // const storedUserLoggedData = localStorage.getItem('loggedUser');

    if (storedUserLogged) {
      setIsLogged(true);
      // setLoggedUser(storedUserLoggedData);
    }
  }, []);

  const loginHandler = (email: string, password: string) => {
    // localStorage.setItem('isLogged', true);
    // localStorage.setItem('loggedUser', email);
    setIsLogged(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLogged');
    localStorage.removeItem('loggedUser');
    setLoggedUser('');
    setIsLogged(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLogged: isLogged,
        loggedUser: loggedUser,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
