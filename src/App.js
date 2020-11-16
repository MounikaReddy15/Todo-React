import React, { Component } from 'react';
import {Task} from './components/task';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tasks:[],
      task:''
    }
    
  }

  handleOnChange=(e)=>{
     
    this.setState({task:[e.target.value]});
    
  }

  handleClick=()=>{
    const {task,tasks}=this.state;
    // check if task is empty

    if(task === ''){
      alert("task is empty")
    }

  else{
    
    // if not add this task in tasks array
    tasks.push(task);
    this.setState({tasks:tasks});
    
  }
    
  }

  handleDelete=(task)=>{
    const {tasks}=this.state;
    // use filter to filter out task from array
    const deleteTask = tasks.filter(todo => todo !== task)
    this.setState({tasks:deleteTask});

  }

  handleEdit=(todo)=>{
    
    // const {task,tasks}=this.state;
    // todo = 
  }

  render() {
   const {task,tasks}=this.state;
    console.log('task',task);
    console.log("tasks",tasks);
    return (
      <div style={{margin:'10%'}}>
        
        <input  onChange={this.handleOnChange}/>
        <button onClick={this.handleClick}>Add Task</button>
       {tasks.map((task)=>
       <Task task={task} 
       handleEdit={this.handleEdit}
       handleDelete={this.handleDelete}
       />
 )}
      </div>
    );
  }
}

export default App;