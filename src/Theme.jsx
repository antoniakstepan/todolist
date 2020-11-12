import React from 'react'

class Theme extends React.Component{
    constructor(props){
        super(props)
this.theme= this.theme.bind(this)
    }
    theme(){

       document.body.classList.toggle(".Api")
    }
    render(){
        return(
            <div className="theme" >
               <button onClick={this.theme}>Change theme</button> 
            </div>
        )
    }
  
}

export default Theme