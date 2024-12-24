

const ListCom = ({error, list, flag}) => {
    return (
        <>
         {/*flag가 true라면 로딩중, flag가 false라면 아래가 실행되도록  */}
        {/* list 조건이 참이면-> 존재한다면 list.map을 실행하라는 연산 */}
        { flag ? <h3>loading</h3> 
        : error ===null
        
        ?(
            list && list.map( d => (
            <div key={d.id}>
                id: {d.id}, name:{d.name}, addr: {d.addr}
            </div>
        ))) :
            <h3>{error}</h3>}
        
        </>
    )
}
export default ListCom