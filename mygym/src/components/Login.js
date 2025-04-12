// Login.js
import React from 'react';
import app from '../Config/firebase'; // Importa la instancia de Firebase
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

function Login() {
  const handleSignIn = async () => {
    const auth = getAuth(app); // Pasa la instancia de Firebase a getAuth()
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      console.log("Usuario autenticado con Google:", auth.currentUser);
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSignIn}>
        Iniciar sesión con Google
      </button>
    </div>
  );
}

export default Login;
