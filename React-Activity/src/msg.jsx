function Msg({userName, textColor}){
    
      
    return (
        
        <div>
            <h3 style={{color:textColor}}>Hello, {userName} </h3>
            <h5>What's up?</h5>
        </div>
    )

}
export default Msg;