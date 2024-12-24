let data_set = [
    {id:"aaa", pwd:"aaa", name:"홍길동", addr : "산골짜기"},
    {id:"bbb", pwd:"bbb", name:"김개똥", addr : "개똥별"},
    {id:"ccc", pwd:"ccc", name:"고길동", addr : "마포구"},
]

export const getList = ()=> data_set
export const register = (user) => {
    data_set = data_set.concat( user )
    return 1;     
    //성공은1 실패는 0
} 
export const loginCheck = (id, pwd) =>{
    const data = data_set.filter(data=> data.id===id) //filter는 
    //if 문은 나중에 container에 사용하면 됨
    if (data.length !==0){
        if(data[0].pwd === pwd){
            return 0; //인증 통과
        }else{
            return 1; //비밀번호 틀림
        }
    }else{
        return -1; //존재하지 않는 데이터 
    }
}

// export {register, getList, loginCheck}