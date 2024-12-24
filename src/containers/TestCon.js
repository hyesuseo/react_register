import { useContext } from "react"
import HeaderCon from "./HeaderCon";
import { TestContext } from "./TestContext";

const TestCon = () =>{
    // const context = useContext (TestContext)
    // console.log("context", context)
    const {clickPlus, clickSub, data } = useContext( TestContext )
    const onPlus = () => {
        clickPlus();
    }
    const onSub = () => {
        clickSub();
    }
    return (<><HeaderCon />
    {data.number}<br></br>
    <button onClick={onPlus}>onPlus</button>
    <button onClick={onSub}>onSub</button>
    </>)
}
export default TestCon