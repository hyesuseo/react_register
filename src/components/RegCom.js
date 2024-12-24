
const RegCom =({flag, error, onSubmit, onChange, username, pwd, name, addr}) => {
    return (<>
    {flag ?<h3>Register Loading...</h3>  //flag가 참이라면 
    : error ?  <h3>{error}</h3> 
    : <form onSubmit={onSubmit}> 
    <input type="text" name="id" value={username} onChange={onChange} ></input><br />
    <input type="text" name="pwd" value={pwd} onChange={onChange}></input><br />
    <input type="text" name="name" value={name} onChange={onChange}></input><br />
    <input type="text" name="addr" value={addr} onChange={onChange}></input><br />
    <button>회원가입</button>
    </form>
     }
    

    </>)
}

export default RegCom