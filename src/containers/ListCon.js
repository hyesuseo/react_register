
import { useReducer, useState, useEffect } from "react"
import ListCom from "../components/ListCom"
import { getList } from "../service/member_ser"
import { initialState, reducer } from "./modules/members_red"
const ListCon = () => {
        //const [list, setList] =useState([])
        //데베에 접근할때는 무조건 useEffect를 사용해서 제일 마지막에 처리되도록 한다
        const [state, dispatch] = useReducer(reducer, initialState)
        useEffect(()=> {
           //setList(getList())
           
        try{
            dispatch({type:"LOADING"}) //DB 연동하기 전에 현재상황을 알려줌
            setTimeout(()=>{
                const data = getList()
                dispatch({type: "LIST", data})
                dispatch({type:"FINISHED"}) //DB 연동해서 값을 가져온 후에는 상태를 FINISHED로 호출해서 flag 값을 거짓으로...
                //flag가 거짓이면 컴포넌트에서 자료를 가져온다
          //[]사용해서 한 번만 처리되도록
            }, 2000);//2초정도 있다가 받아오도록       
            // throw new Error("failed to fetch data")     
        }catch(err){
            dispatch({type:"ERROR", msg: err.toString})
        }
        
    },[])

    return (<>
    <ListCom error={state.error} flag={state.flag} list={state.data}/> </>)

}
export default ListCon