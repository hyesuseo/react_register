import { Link } from "react-router-dom"
const HeaderCom = ({isLoggedIn, user, onLogout}) => {
    return (<>

        <Link to="/list"> 목록 </Link>&nbsp;
        {isLoggedIn ? 
            <>
            <Link to="/logout" onClick={onLogout}>로그아웃</Link>&nbsp;
            {user}님 로그인 중<br></br>
            </>
            : 
            <>
        <Link to="/login"> 로그인 </Link>&nbsp;
        <Link to="/register"> 회원가입 </Link>&nbsp;
        </>
        }
        
        <Link to="/context"> context </Link>&nbsp;
        <hr></hr>

        </>
    )
}
export default HeaderCom