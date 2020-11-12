import "./App.css"
import React , {useState , useRef} from 'react'


// function TodoList({list}){
// console.log(list)
//     return(
//         <div>
//             <ul className="ulTodo">
//              {list.map(item=><li>{item.title}
//              <button>edit</button> 
//              {item.status!=="done" && <button>done</button>}
//              {item.status!=="in Progress" &&<button>in progress</button>}
//              {item.status!=="todo"&&<button>Todo</button>}
//              <button>delete</button>
//              </li>)} 
//             </ul>
//         </div>
//     )
// }
// class TodoList extends React.Component{
// constructor(props){
//     super(props)
   
  

// }

let TodoList = (props)=>{
    let [isEdit,setIsEdit]=useState(false)
    let [inputValue ,setInputValue] = useState("")
    let [textAreaValue , settextAreaValue] = useState("")
    let input = useRef(null)
    let textarea = useRef(null)
    let saveChanges =(title)=>{
        let newTitle = input.current.value
        let newDescription = textarea.current.value
        props.changeEdit(title, newDescription ,newTitle )
        setIsEdit(false)
    }
    
    return(
        <div>
            <ul className="ulTodo">
             {props.list.map(item=><li>{item.title}
            {isEdit&&<span>
                <input ref ={input} value={inputValue} onChange={e=>setInputValue(e.target.value)}>
                </input>
                <textarea ref={textarea} value={textAreaValue} onChange={e=>settextAreaValue(e.target.value)}></textarea>
                <button onClick={()=>saveChanges(item.title)}>save</button>
                </span>} 
            
             <button onClick={()=>setIsEdit(!isEdit)}>edit</button> 
                {item.status!=="done" && <button onClick={()=>props.changeDone(item.title)} >done</button>}
             {item.status!=="in Progress" &&<button
              onClick={()=>props.changeProgress(item.title)} >in progress</button>}
             {item.status!=="todo"&&<button onClick={()=>props.changeTodo(item.title)}>Todo</button>}
             <button>delete</button>
            </li>)} 
            </ul>
        </div>
    )
}

// render(){
//     return(
//         <div>
//             <ul className="ulTodo">
//              {this.props.list.map(item=><li>{item.title}
//              <button>edit</button> 
//                 {item.status!=="done" && <button onClick={()=>this.props.changeDone(item.title)} >done</button>}
//              {item.status!=="in Progress" &&<button
//               onClick={()=>this.props.changeProgress(item.title)} >in progress</button>}
//              {item.status!=="todo"&&<button onClick={()=>this.props.changeTodo(item.title)}>Todo</button>}
//              <button>delete</button>
//              </li>)} 
//             </ul>
//         </div>
//     )
// }
// }

    


export default TodoList