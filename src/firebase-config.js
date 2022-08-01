import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlY8NPhkNtKMA4_1-E7CHEJDVfMSEqD3g",
  authDomain: "fir-tutorial-13ecc.firebaseapp.com",
  projectId: "fir-tutorial-13ecc",
  storageBucket: "fir-tutorial-13ecc.appspot.com",
  messagingSenderId: "289482138941",
  appId: "1:289482138941:web:2c8017f6e1d11f6c105154",
  measurementId: "G-23PRTWMDGE",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
