import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import State  from './state';
import addTodo from './state' 
import changeNewPostText from './state'




import './index.css';

// export let renderEnteirTree =(state)=>{
  ReactDOM.render(
    <React.StrictMode>
      <App  addTodo={addTodo}  changeNewPostText={changeNewPostText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
// }


// renderEnteirTree(state);
// subscribe(renderEnteirTree)