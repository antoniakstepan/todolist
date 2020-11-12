import state from "./state"
const { default: TodoList } = require("./TodoList");




function Main(props){
    let arr=['todo' , 'in Progress' , "done"]

    let filterList =function(item){
        
        let qwerty=props.state.filter((stateItem)=>stateItem.status === item)
 
          return  qwerty
    }
    return(
        <div className="main">
              {arr.map(item=><div>
        <h2>{item}</h2>
        <TodoList list={filterList(item) } changeDone={props.changeDone} 
        changeProgress={props.changeProgress}
        changeTodo={props.changeTodo}
        changeEdit={props.changeEdit}/>
        {/* <TodoList list={arr}/> */}
        </div>)}
        </div>
      
       


        
    )
}

export default Main;