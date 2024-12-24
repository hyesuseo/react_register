const initialState = { //데이터 초기화된 공간
    login : {id:"", pwd:""},
    register : {id:"", pwd: "", name:"", addr:""},
    data : null,
    flag : false, //데이터 받아오는 중인지, 다 받아왔는지 를 알려주기 위한 변수 설정
    error: null
}
const reducer = (state, action ) => { //행위는 action.type에 들어온다
    switch(action.type){
        case "LIST" : return {...state, data:action.data}
        case "CHANGE_INPUT" :
            console.log("state: ", state)
            console.log("action:", action)
            const form = state[action.form] //form에는 초기화 한 login(id="", pwd="") 값이 들어온다
            form[action.name] = action.value // 사용자가 선택한 id/pwd key 공간에 사용자가 입력한 값이 들어간다
            return {...state, [action.form] : {...form}};
        case "LOADING": return {...state, flag:true, error: null}
        case "FINISHED": return {...state, flag:false, error: null}
        case "ERROR":  return {...state, flag:false, error:action.msg}
        default: return state;
    }
};

export {initialState, reducer}