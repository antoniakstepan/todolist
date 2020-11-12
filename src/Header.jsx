import AddTodo from "./AddTodo";
import Theme from "./Theme";


function Header(props){
return(
   
    <div className="header">
           <AddTodo state={props.state} 
    addTodo={props.addTodo}
     changeInput={props.changeInput}
     changeArea={props.changeArea} 
     input={props.input} 
     textarea={props.textarea}
     clearTodo = {props.clearTodo}/>
    {/* addTodo={props.addTodo} changeNewPostText={props.changeNewPostText} */}
    <Theme/>
    </div>
 
 
)
  



}

export default Header;