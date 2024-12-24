import { createContext, useState } from "react";

export const init = {isLoggedIn : false, user: null}
export const AuthContext = createContext()
export const AuthProvider = ({children}) =>{
    const [auth, setAuth] = useState(init)
    const loginState = () => { //app에서 호출할 예정 > session Storage에 있는 값이 
        const state = JSON.parse(sessionStorage.getItem("auth"))
        setAuth( state )
    }
    const successLogin = (user) => {
        setAuth({isLoggedIn:true, user})
        sessionStorage.setItem("auth", JSON.stringify({isLoggedIn :true, user})) //객체 자체를 저장할 수 없으므로 문자열 형식으로 저장
    }
    const logout = ()=>{
        setAuth(init)
        sessionStorage.clear();
    } //초기화 시켜줌
    const data = {loginState, auth, logout, successLogin}
return (
    <>
    <AuthContext.Provider value={data}>
        {children}
    </AuthContext.Provider>
    </>
)
}
