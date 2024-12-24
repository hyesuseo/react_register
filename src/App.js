import ReducerCom from './components/ReducerCom';
import { Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";
import RegPage from './pages/RegPages';
import ListPage from './pages/ListPage';
import TestCon from './containers/TestCon';
import { useContext, useEffect } from 'react';
import { AuthContext } from './containers/AuthContext';

function App() {
  const {loginState, auth} = useContext( AuthContext )
  useEffect(()=>{ //이걸 넣어야 오류가 발생안한다고
    if( sessionStorage.getItem("auth") && !auth.isLoggedIn){
      loginState()
      
    }
  })
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/register" element={<RegPage />}></Route>
        <Route path="/list" element={<ListPage />}></Route>
        <Route path="/context" element={<TestCon />}></Route>
      </Routes>
    </>
  );
}

export default App;

