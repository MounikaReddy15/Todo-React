


// action type
export const EDIT_TASK='EDIT_TASK';

export function edittask(index, newValue){
    return {
        type: EDIT_TASK,
        index,
        newValue
    }
}