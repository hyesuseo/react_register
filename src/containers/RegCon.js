import { useReducer } from "react"
import RegCom from "../components/RegCom"
import { initialState, reducer } from "./modules/members_red"
import { useNavigate } from "react-router-dom"
import { register } from "../service/member_ser"

const RegCon =() => { 
    const [state, dispatch] = useReducer(reducer, initialState)

    const navigate = useNavigate()
    const onSubmit = (event) => {
        event.preventDefault();

        console.log("state", state)
        dispatch({type:"LOADING"})
        try{
            const result = register( state.register )
            if (result ===1){
                navigate("/list")
                }  
            dispatch({type:"FINISHED"})
        }catch(error){
            dispatch({type:"ERROR", msg: error.toString()})
        }
        
    }
    const onChange = (event) => {
        const {value, name} = event.target
        console.log(event.target)
        dispatch({type: "CHANGE_INPUT", value:value, name: name, form: "register"})
    }
    return (<><RegCom flag={state.flag} error={state.error} onSubmit={onSubmit} onChange={onChange} username={state.register.id} password={state.register.pwd} name={state.register.name} addr={state.register.addr} /></>)
}

export default RegCon