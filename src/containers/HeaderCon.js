import { useContext } from "react"
import HeaderCom from "../components/HeaderCom"
import { AuthContext } from "./AuthContext"

const HeaderCon = () => {
    const {auth, logout} =useContext( AuthContext )
    console.log("header auth: ", auth)
    const {isLoggedIn, user} = auth
    const onLogout = (event) => {
        event.preventDefault();
        logout()
    }
    return (<>
    <HeaderCom isLoggedIn={isLoggedIn} user={user} onLogout={onLogout} />
    

    </>)
}
export default HeaderCon