const initState = {
    employeeList : [
        {
            firstName: "Prenom-test",
            lastName: "Nom-de-famille",
            dateOfBirth: "01/01/1990",
            startDate: "01/02/2000",
            department: "Alsace",
            street: "rue de la rue",
            city: "Strasbourg",
            state: "France",
            zipCode: "67000"
        }
    ],
    isEmployeeCreated : false
}

const rootReducer = (state = initState,action) => {

    if(action.type === "SAVE_NEW_EMPLOYEE"){
        let newEmployeeList = state.employeeList
        newEmployeeList.push(action.payload.newEmployee);
        let newState = {...state, employeeList :newEmployeeList, isEmployeeCreated:true };
        return newState;
    } 
    return state;
}

export default rootReducer;