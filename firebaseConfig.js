import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcEcG0M9sgqSF7_Hz9fnrxCjz9t-uJnas",
  authDomain: "studentlist-6c1b7.firebaseapp.com",
  projectId: "studentlist-6c1b7",
  storageBucket: "studentlist-6c1b7.firebasestorage.app",
  messagingSenderId: "824348170247",
  appId: "1:824348170247:web:42459f302d3119e708b2a2",
  measurementId: "G-4YEY3BZTBY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth
export const auth = getAuth(app);

export default app;