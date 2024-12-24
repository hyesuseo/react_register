import { useReducer } from "react"

const myReducer = (state,action) => {
    //console.log("reducer 실행 action : ", action)
    console.log("reducer 실행 state : ", state)

    //if( action.type === "up" ) 이렇게 변동에 따른 작동 방식을 넣음. 근데? 이제 switch를 더 많이 씀

    switch(action.type){
        case "up" : return {value : state.value+1}
        case "down" : return {value : state.value-1}
        default : return state

        // 프론트에서 건든 값을 백에 전달하는 방식이라고 보자
    }

    //return state //마지막 state 값이 무조건 return 되어야 함
}

const intialState = { value:0 }

const ReducerCom = () => {
    const [state, dispatch] = useReducer(myReducer, intialState)//변수라서 상관 없음. 지금은 보편적인 변수 이름
    //const [num, setNum] = useState(0)
    //setNum(1);

    //console.log("reducer com 동작 : ", state)
    
    const up = () => {
        dispatch({type:"up"}) // key의 의미를 가지고 있지만, 보통 type을 씀
    }

    const down = () => {
        dispatch({type:"down"})
    }

    return (<>
    <div>{state.value}</div>
    <button onClick={up}>up</button>
    <button onClick={down}>down</button>
    </>)
}

export default ReducerCom