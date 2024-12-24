import LoginCom from "../components/LoginCom"
import { useState, useReducer, useContext } from "react"
import { initialState, reducer } from "./modules/members_red"
import { loginCheck } from "../service/member_ser"
import { AuthContext } from "./AuthContext"
import { useNavigate } from "react-router-dom"



const LoginCon = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {successLogin} = useContext(AuthContext)
    const navigate = useNavigate()
    console.log("login con state: ", state)
    const onSubmit= (event) => {
        event.preventDefault();
        dispatch({type:"LOADING"})
        try{
            const result = loginCheck(state.login.id, state.login.pwd);
            dispatch({type:"FINISHED"})
            if (result ==0 ){
                alert("인증 성공")
                successLogin(state.login.id)
                navigate("/list")
            }else {
                alert("인증 실패")
            }
        }catch{
            dispatch({type: "ERROR", msg: event.toString})
        }
    }
    const onChange = (event) => {
        console.log ("event.target", event.target)
        const {value, name} = event.target;
        dispatch({type: "CHANGE_INPUT", value: value, name, form:"login"})// key, value 형식으로
        //key와 value를 같은 이름으로 쓸 경우에는 하나로 써도 되고, 다른 이름으로 쓸 경우에는 위와 같이 작성 
    }
    return(<>    <LoginCom username={state.login.id} password={state.login.pwd} onChange={onChange} onSubmit={onSubmit} error={state.error}
    flag={state.flag} />     </>)
}

export default LoginCon