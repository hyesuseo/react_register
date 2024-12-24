import { useContext } from "react"
import { TestContext } from "../containers/TestContext"

const LoginCom = ({onChange, username, password, onSubmit, error, flag}) => {
    const { data } = useContext(TestContext)
    return(<>
    {data.number}<br></br>
    {
        flag ? <h3>loading</h3>
        :
        (<form onSubmit={onSubmit}>
        <input type="text" name="id" onChange={onChange} value={username}></input><br></br>
        <input type="text" name="pwd" onChange={onChange} value={password}></input><br></br>
        <button>로그인</button>
        </form>
        )

    }
    
    </>)
}

export default LoginCom