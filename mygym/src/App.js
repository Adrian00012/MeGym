// App.js
import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import './App.css';
import Login from './components/Login'; // Adjusted the path to match the likely folder structure

const firebaseConfig = {
  apiKey: "AIzaSyB-mn2X65YcSjmnDmrX_fJkfkqmidn3iCw",
  authDomain: "mygym-501d0.firebaseapp.com",
  projectId: "mygym-501d0",
  storageBucket: "mygym-501d0.firebasestorage.app",
  messagingSenderId: "403536924581",
  appId: "1:403536924581:web:109fb6b678aeeb741de24c",
  measurementId: "G-VSYB9PE441"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      <Login />
    </div>
  );
}

export default App;
