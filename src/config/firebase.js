
import { initializeApp } from "firebase/app";
import { getFirestore, } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyA4qew5389FtwnKA_yYWSVhcTofERt2VqA",
  authDomain: "tiktok---jornada-9c338.firebaseapp.com",
  projectId: "tiktok---jornada-9c338",
  storageBucket: "tiktok---jornada-9c338.appspot.com",
  messagingSenderId: "616300421696",
  appId: "1:616300421696:web:6943a1f2522712aae8b5a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;