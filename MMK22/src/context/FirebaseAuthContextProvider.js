import React, { createContext, useContext, useState, useEffect } from "react";
import { firebase } from "./FirebaseConfig";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

export const AUTHENTICATION_LOADING = "AUTHENTICATION_LOADING";
export const AUTHENTICATED = "AUTHENTICATED";
export const AUTHENTICATED_ANONYMOUSLY = "AUTHENTICATED_ANONYMOUSLY";
export const UNAUTHENTICATED = "UNAUTHENTICATED";
export const AUTHENTICATION_FAILED = "AUTHENTICATION_FAILED";


const AuthStateContext = createContext({
  user: {},
  state: AUTHENTICATION_LOADING
});

export default function AuthStateProvider({ children }) {

  const [authState, setAuthState] = useState({
    user: undefined,
    state: AUTHENTICATION_LOADING
  });

  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      
      setAuthState({
        user: user,
        state: user ? AUTHENTICATED : UNAUTHENTICATED
      });
    });
    return () => unregisterAuthObserver();
    // eslint-disable-next-line
  }, []);

  const signOut = () => firebase.auth().signOut();
  const signUpWithEmailAndPassword = (
    email,
    password,
    name,
    callback,
    onError
  ) => {
    const expandedOnError = error => {
      // If there is an error with the login we will rollback to the last auth state.
      setAuthState(authState);
      onError && onError(error);
    };
    firebase.auth().signUpWithEmailAndPassword(
      email,
      password,
      name,
      setAuthState,
      callback,
      expandedOnError
    );
  };

  const signInWithEmailAndPassword = (email, password, callback, onError) => {
    const expandedOnError = error => {
      // If there is an error with the login we will rollback to the last auth state.
      setAuthState(authState);
      onError && onError(error);
    };

    firebase.auth().signInWithEmailAndPassword(
      email,
      password,
      setAuthState,
      callback,
      expandedOnError
    );
  };

  const updateDisplayName = (displayName) => {
    return authState.user.updateProfile({
    displayName: displayName,
    photoURL: authState.user.photoURL
  })};
  const updateEmailAddress = (email) => {authState.user.updateEmail(email)};

  const sendPasswordResetEmail = (email, callback, onError) => firebase.auth().sendPasswordResetEmail(email, callback, onError);
  const sendEmailVerification = (callback, onError) => firebase.auth().sendEmailVerification(callback, onError);
  const userHasOnlyEmailProvider = () => firebase.auth().userHasOnlyEmailProvider();

  return (
    <AuthStateContext.Provider
      value={{
        authState,
        signOut,
        signUpWithEmailAndPassword,
        signInWithEmailAndPassword,
        updateDisplayName,
        updateEmailAddress,
        sendPasswordResetEmail,
        sendEmailVerification,
        userHasOnlyEmailProvider
      }}
    >
      {children}
    </AuthStateContext.Provider>
  );
}

export const useAuthStateContext = () => useContext(AuthStateContext);

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  signInSuccessUrl: '/profile',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
};



export const LoginComponent = (callback) => {
  return (
  <div>
    <h1>GI472 PWA Chat App</h1>
    <p>{"Please sign-in:"}</p>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
  </div>
  )
}