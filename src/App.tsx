import './App.css';
import { app } from 'firebaseApp';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import Router from './components/Router';
function App() {
  const auth = getAuth(app)
  const [isAuthenticated, setIsAuthenicated] = useState<boolean>(!!auth?.currentUser);//currentUser는 firebase의 app 속성 중 하나로 사용자의 로그인 여보의 정보를 갖고 있음
  
  return (
    <>
    <ToastContainer/>
    <Router isAuthenticated={isAuthenticated}/>
    </>
  );
}

export default App;
