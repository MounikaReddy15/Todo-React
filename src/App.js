

import React, { Component } from 'react';
import Task from './components/task';
class App extends Component {

  constructor(props){
    super(props);
    this.state={
      tasks:[],
      task:''
    }
    
  }

  // getting input 
  handleOnChange=(e)=>{
  this.setState({task:[e.target.value]});
  }


  // adding task
 handleClick=()=>{
   const {task,tasks}=this.state;
   console.log(task.id, "task")
    // check if task is empty
    if(task === ''){
      alert("task is empty")
    }

    else{
    // if not add this task in tasks array
    tasks.push(task);
    this.setState({tasks:tasks});
    this.setState({task:''});
    }
    
  }


  // to delete tasks
  handleDelete=(task)=>{
    const {tasks}=this.state;
    // use filter to filter out task from array
    const deleteTask = tasks.filter(todo => todo !== task)
    this.setState({tasks: deleteTask});
    
  }

 // to update the edited value
  updateValue = (index, newValue) => {
    // console.log(index, newValue);
    const {tasks}=this.state;
    var oldT = tasks[index];
    tasks.push(newValue);
    const deleteTask = tasks.filter(todo => todo !== oldT)
   
    this.setState({
      tasks:deleteTask
    })
  }

  render() {
    console.log('rendr')
   const {task,tasks, editMode}=this.state;
    console.log('task',task);
    console.log("tasks",tasks);
    return (
      <div style={{margin:'10% 0% 0% 30%'}}>
      <input  style={{height:'30px', width: '30%'}} onChange={this.handleOnChange}/>
      <button style={{marginLeft:'1%', height:'30px', width: '10%'}} onClick={this.handleClick}>Add Task</button>
      {tasks.map((task,index)=>
      <Task task={task} 
      index= {index}
      editMode = {editMode}
      handleDelete={this.handleDelete}
      handleOnChange= {this.handleOnChange}
      updateValue = {this.updateValue}
      handleUpdate = {this.handleUpdate}
      />
      
 )}
      
    </div>
    );
  }
}

export default App;
