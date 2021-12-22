import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMeWhMlqMhECAinPzCLycT2i4fQxrIcjI",
  authDomain: "app-e-commerce-cursoreact-vega.firebaseapp.com",
  projectId: "app-e-commerce-cursoreact-vega",
  storageBucket: "app-e-commerce-cursoreact-vega.appspot.com",
  messagingSenderId: "789586947592",
  appId: "1:789586947592:web:e7a67462da53fe4960ebbd",
  measurementId: "G-PMMGP5VZZM"
};

const app = initializeApp(firebaseConfig)

// esta constante servira para hacer referencia a la base de datos
export const database = getFirestore(app)