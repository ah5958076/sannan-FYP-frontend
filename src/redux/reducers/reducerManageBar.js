const initializeState = {
    status: true,
    type: 'hidebar'
}



export const managebar = (state = initializeState,action)=>{
    if( action.type === 'hidebar')
        return {
            status: action.status,
            type: 'hidebar'
        }
    return state;
}