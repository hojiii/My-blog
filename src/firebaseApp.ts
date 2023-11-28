import { initializeApp, FirebaseApp, getApp } from "firebase/app";
import 'firebase/auth'

export let app: FirebaseApp
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_API_AUTHDOMAIN,
  projectId: process.env.REACT_APP_API_PROJECTID,
  storageBucket: process.env.REACT_APP_API_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_API_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_API_APPID
};

try{
  app=getApp("app")
}catch(e){
  app = initializeApp(firebaseConfig,"app")
}

const firebase = initializeApp(firebaseConfig);

export default firebase