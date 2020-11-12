// let renderEnteirTree =()=>{
//     console.log("Some text")
// }
// import {renderEnteirTree} from "./render";
import Header from './Header';
import Main from './Main';
import React from 'react'


class State extends React.Component{
    constructor(props){
        super (props)
        this.state={
            todos: [{
                title:"Яблуко",
                descriptio:"Some text",
                status:"in Progress"
        
            },
        
            {
                title:"Груша",
                descriptio:"Some text",
                status:"todo"
        
            },
            {
                title:"виноград",
                descriptio:"Some text",
                status:"done"
        
            }
        ],
        input:'',
        textarea:""
        }
        this.addTodo = this.addTodo.bind(this);
        this.changeInput = this.changeInput.bind(this);
        this.changeArea=this.changeArea.bind(this);
        this.clearTodo = this.clearTodo.bind(this);
        this.changeDone = this.changeDone.bind(this);
        this.changeProgress = this.changeProgress.bind(this);
        this.changeTodo = this.changeTodo.bind(this);
        this.changeEdit = this.changeEdit.bind(this)
       
        
           
    }
    
    
     addTodo(){ 

        let str = this.state.input;
        let area = this.state.textarea;
      this.setState(state=>{
        let newTodo = {
            title:str,
            descriptio:area,
            status:"todo"
        }  ;
        const secondList = [...this.state.todos, newTodo];
        console.log(this.state.todos)
        return {todos: secondList}
        
      
       

      })  
 
 
           
     }
    
     clearTodo(){
        let area="";
        this.setState(state=>{
           area = this.state.todos.descriptio;
           return {area};
        })
     }
     changeInput(a){
         let str=a
this.setState({
    input:str
})
     }
     changeArea(a){
let str = a
this.setState({
    textarea:str
})
     }
     changeDone(title){
        //  console.log(title)
        let newItem= this.state.todos.find((el)=>el.title === title)
        newItem.status = "done"
        let newTodos = this.state.todos.filter(el=>el.title!==title)
        newTodos.push(newItem)
        
           this.setState(state=>{
               return {newTodos}
           })
           }
           changeProgress(title){
            //  console.log(title)
            let newItem= this.state.todos.find((el)=>el.title === title)
            newItem.status = "in Progress"
            let newTodos = this.state.todos.filter(el=>el.title!==title)
            newTodos.push(newItem)
            
               this.setState(state=>{
                   return {newTodos}
               })
               }
               changeTodo(title){
                //  console.log(title)
                let newItem= this.state.todos.find((el)=>el.title === title)
                newItem.status = "todo"
                let newTodos = this.state.todos.filter(el=>el.title!==title)
                newTodos.push(newItem)
                
                   this.setState(state=>{
                       return {newTodos}
                   })
                   }
                   changeEdit(title, descriptio ,newTitle){
                    //  console.log(title)
                    let newItem= this.state.todos.find((el)=>el.title === title)
                    newItem.title = newTitle
                    newItem.descriptio = descriptio
                    let newTodos = this.state.todos.filter(el=>el.title!==title)
                    newTodos.push(newItem)
                    
                       this.setState(state=>{
                           return {newTodos}
                       })
                       }
    

  
     
    render(){
        return(    <div className="App">
        <Header state={this.state.todos} 
        addTodo={this.addTodo}
         changeInput={this.changeInput}
         changeArea={this.changeArea}
          input={this.state.input}
           textarea={this.state.textarea}
           clearTodo={this.clearTodo}/>
        {/* addTodo={props.addTodo} changeNewPostText={props.changeNewPostText} */}
        <Main state={this.state.todos} 
        changeDone={this.changeDone}
         changeProgress = {this.changeProgress}
          changeTodo = {this.changeTodo}
          changeEdit={this.changeEdit}/>
        
            </div>)
    }
}
    
    
    
   export default State
    
    
