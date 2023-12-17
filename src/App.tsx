import './App.css';
import { app } from 'firebaseApp';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect,useState } from 'react';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

import Router from './components/Router';
import Loader from 'components/Loader';
function App() {
  const auth = getAuth(app)
  //auth를 체크하기전에 (intialize)에는 loader를 띄워주는 용도
  const [init,setInit] = useState<boolean>(false);
  //auth에 currentUser가 있으면 authenticated로 변경
  const [isAuthenticated, setIsAuthenicated] = useState<boolean>(!!auth?.currentUser);//currentUser는 firebase의 app 속성 중 하나로 사용자의 로그인 여보의 정보를 갖고 있음
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      if(user){
        setIsAuthenicated(true);
      }else {
        setIsAuthenicated(false);
      }
      setInit(true)
    });
  },[auth]);
  return (
    <>
    <ToastContainer/>
    {init ? <Router isAuthenticated={isAuthenticated}/> : <Loader/>}
    </>
  );
}

export default App;
