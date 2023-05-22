import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAC0dOWTqrUhoEcI1P2LgxPzsF6-xYoyT0",
  authDomain: "discord-clone-22463.firebaseapp.com",
  projectId: "discord-clone-22463",
  storageBucket: "discord-clone-22463.appspot.com",
  messagingSenderId: "841673026633",
  appId: "1:841673026633:web:2d0c9a8931f3de180ca398",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {db, auth, provider}
