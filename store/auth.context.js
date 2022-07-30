import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../components/firebase/firebase-config';
import { onAuthStateChanged, User } from 'firebase/auth';

const initialUser  = null;

const AuthContext = createContext({
  user: initialUser,
  loading: true
})

export function AuthContextProvider({children}) {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unsubscribe;

    unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{user, loading}}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext;