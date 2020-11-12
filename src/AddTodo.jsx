import React from 'react'

class AddTodo extends React.Component{
    constructor(props){
        super(props);
        this.createStr = this.createStr.bind(this)
        this.createArea = this.createArea.bind(this)
       
    }
    // let addTodo = function(){
    //     console.log('sdklskv')
    // }
//   let addTodo= ()=>{
//       let input = document.getElementById("input").value;
//       let textarea = document.getElementById("textarea").value
//       let newTodo = {
//         title:input,
//         descriptio:textarea,
//         status:"todo"
//     }
//     // props.state.push(newTodo)
//     // {...props.state , newTodo}
// return props.state.push(newTodo)
//     console.log(...props.state)

//   }
createStr(e){
let str = e.target.value;
this.props.changeInput(str)
}
createArea(e){
    let str = e.target.value;
    this.props.changeArea(str)
}

render(){
    return(
        <div className="addTodo">
            <input className="input" onChange={this.createStr} value={this.props.input}/>
            <textarea name="" id="" cols="15" rows="5" className="textarea" id="textarea"onChange={this.createArea} value={this.props.textarea}></textarea>
           <div>
               <button onClick={this.props.addTodo}>Add todo</button>
               <button className="clear" onClick={this.props.clearTodo}>clear</button>
           </div>
        </div>
    )
}
   
}
export default AddTodo;