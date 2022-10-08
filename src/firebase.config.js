
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyCz5In3KDLM2dYl-FFWCb4Dv9Iv8C824V0",
  authDomain: "ulina-shop.firebaseapp.com",
  projectId: "ulina-shop",
  storageBucket: "ulina-shop.appspot.com",
  messagingSenderId: "627344159301",
  appId: "1:627344159301:web:f9ddd97ef64cae859fa92c"
};


const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export default app