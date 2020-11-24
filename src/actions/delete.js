

// action type
export const DEL_TASK='DEL_TASK';

export function deletetask(task){
    return {
        type:DEL_TASK,
        task
    }
}