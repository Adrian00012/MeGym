// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-mn2X65YcSjmnDmrX_fJkfkqmidn3iCw",
  authDomain: "mygym-501d0.firebaseapp.com",
  projectId: "mygym-501d0",
  storageBucket: "mygym-501d0.firebasestorage.app",
  messagingSenderId: "403536924581",
  appId: "1:403536924581:web:109fb6b678aeeb741de24c",
  measurementId: "G-VSYB9PE441"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app; // Exporta la instancia de Firebase para usarla en otros archivos
export { analytics }; // Exporta analytics si lo necesitas en otros archivos
export { firebaseConfig }; // Exporta la configuración de Firebase si lo necesitas en otros archivos