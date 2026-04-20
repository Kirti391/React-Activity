import Msg from "./msg"
function MsgBox(){
    
    return (
        <div>
           <Msg userName="Alice" textColor="pink"/>
           <Msg userName="Bob" textColor="yellow"/>
           <Msg userName="Casey" textColor="cadetblue"/>
        </div>
    )
}
export default MsgBox;