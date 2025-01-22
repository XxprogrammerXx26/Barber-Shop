
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAamXUYGrFoVeBNuvBi4EyjXQ5ZoIDyYFg",
  authDomain: "barber-shop-3d373.firebaseapp.com",
  projectId: "barber-shop-3d373",
  storageBucket: "barber-shop-3d373.firebasestorage.app",
  messagingSenderId: "14772732008",
  appId: "1:14772732008:web:f27055a9847adfc7e93bdd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const db = firebase.firestore();


export { auth };
