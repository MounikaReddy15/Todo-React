// @flow 
import * as React from 'react';

export const Task = (props) => {
    const {task,handleDelete, handleEdit}=props;
    return (
    <div>
    <p style={{display:"inline-block"}}>{task}</p> 
    <button style={{display:"inline-block"}} onClick={()=>handleEdit(task)}>Edit</button>
    <button style={{display:"inline-block"}} onClick={()=>handleDelete(task)}>Delete</button>
    
    </div>
    );
};