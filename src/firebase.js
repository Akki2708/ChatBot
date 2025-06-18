import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDxBR8XJ0IyJfnJ_h-73cCC0PQ--_Eje5k",
  authDomain: "healthcare-19bed.firebaseapp.com",
  projectId: "healthcare-19bed",
  storageBucket: "healthcare-19bed.firebasestorage.app",
  messagingSenderId: "868516778840",
  appId: "1:868516778840:web:3f3ea3094e5856a1408b2d",
  measurementId: "G-S8PR5HH38L",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
