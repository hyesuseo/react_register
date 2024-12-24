import { createContext, useState } from "react"

const init = {number: 0}
const TestContext = createContext();
//createContext는 전역에서 사용할 수 있는 저장소
const TestProvider = ( {children} ) => { //childern은 app이다 -> index.js에 보면 app을 감싸고 있음
//app에서 항상 쓸 수 있도록 TestProvider에서 지정할 수 있다.
    const [data, setData] = useState(init)
    const clickPlus = ()=>{
        //alert("click plus")
        setData(data= data.number + 1)
    }
    const clickSub = ()=>{
       // alert("click sub")
       setData(data= data.number - 1)
    }
    const click = {clickPlus: clickPlus, clickSub: clickSub,  data}
    return(
        <>
        <TestContext.Provider value={click}> 
            {children}
        </TestContext.Provider>
        </>
    )

}
export {TestContext, TestProvider}