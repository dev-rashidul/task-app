import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../../firebase/firebase.config";

export const AuthContext = createContext();

// Firebase Auth
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  // User State
  const [user, setUser] = useState("");

  // Loading State
  const [loading, setLoading] = useState(true);

  // Create User / Register Function
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login Function
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update User Profile
  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  // Logout Function
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  // User Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  // AuthInfo Object
  const authInfo = {
    user,
    loading,
    createUser,
    userLogin,
    updateUserProfile,
    logOut,
  };

  return <AuthContext.Provider value={authInfo}> {children} </AuthContext.Provider>;
};

export default AuthProvider;
