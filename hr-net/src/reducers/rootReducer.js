const initState = {
    employeeList : [],
    isEmployeeCreated : false
}

const rootReducer = (state = initState,action) => {

    if(action.type === "SAVE_NEW_EMPLOYEE"){
        let newEmployeeList = state.employeeList.push(action.payload.newEmployee);
        let newState = {...state, userData :newEmployeeList, isEmployeeCreated:true };
        return newState;
    } 
    return state;
}

export default rootReducer;