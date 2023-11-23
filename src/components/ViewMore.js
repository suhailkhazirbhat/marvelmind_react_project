const ViewMore=(props)=>{
    console.log(props?.data)
    // props?.data.map((i,k)=>console.log(,k))
    return<>
    <div>{props?.data.map((i,k)=><div key={k}>{i?.cardData?.name}</div>)}</div>
    </>
}
 export default  ViewMore