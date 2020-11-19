

import * as React from 'react';

class Task extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            editMode : false  
        }
    }

 // to toggle the edit mode  
  handleEdit=()=>{
    const {editMode }=this.state;
    this.setState({
    editMode:!editMode, 
      
    });
  }

 //for updating todo   
  updateTodo = () => {
    console.log(this.input.value, "input");
    this.props.updateValue(this.props.index, this.input.value);
    this.handleEdit()
  }


 render() {

    const {editMode} = this.state;
    return (
       
    <div>
         
        { editMode ? 
            <div>
            <input type="text" defaultValue = { this.props.task} ref= {(value) => {this.input = value}} /> 
            <img  style = {styles.image} src= "https://www.flaticon.com/svg/static/icons/svg/2089/2089713.svg" alt="Edit" 
            onClick ={() => this.updateTodo() } 
            />
    </div> :
        
    <div> 
        <p style={{display:"inline-block", width: '26%'}}>{ this.props.task}</p> 
        <button style={{display:"inline-block",marginLeft:'1%'}} onClick={()=> this.handleEdit()}>Edit</button>
        <button style={{display:"inline-block",marginLeft:'1%'}} onClick={()=> this.props.handleDelete( this.props.task)}>Delete</button>
        </div>
    }
    </div>
    );
 };
}

// styling image
const styles= {
    image: {
    height: 20,
    width:20,
    marginLeft: 4,
    marginTop: 5
    }
}

export default Task;