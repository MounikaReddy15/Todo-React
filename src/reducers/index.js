

import {ADD_TASK} from '../actions/index';
import {DEL_TASK} from '../actions/delete';
import {EDIT_TASK} from '../actions/edit';

const intitalState={
    tasks:[],
    // value:'something'
}

export function rootReducer(state=intitalState,action){
    switch (action.type){
        case ADD_TASK:
            return {
                tasks:[...state.tasks,action.task]
                
            }
        case DEL_TASK: 
            return {
                tasks: state.tasks.filter((todo)  => todo!== action.task)
            
            } 
        case EDIT_TASK:
            var oldT = state.tasks[action.index];
            state.tasks.push(action.newValue);
            return {
                tasks: state.tasks.filter((todo)  => todo!== oldT)

            }
        default:
            return state;
    }
}