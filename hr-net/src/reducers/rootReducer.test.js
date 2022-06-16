import rootReducer from "./rootReducer"

describe.only("rootReducer", () => {
  test('should return the initial state', () => {
    const expectedInitState = {"employeeList": [{"city": "Strasbourg", "dateOfBirth": "01/01/1990", "department": "Alsace", "firstName": "Prenom-test", "lastName": "Nom-de-famille", "startDate": "01/02/2000", "state": "France", "street": "rue de la rue", "zipCode": "67000"}] , "isEmployeeCreated": false}
    expect(rootReducer(undefined, {})).toEqual(expectedInitState)
  })

  test('should return the employee flag to false', () => {
    const previousState = {"employeeList": [{"city": "Strasbourg", "dateOfBirth": "01/01/1990", "department": "Alsace", "firstName": "Prenom-test", "lastName": "Nom-de-famille", "startDate": "01/02/2000", "state": "France", "street": "rue de la rue", "zipCode": "67000"}], "isEmployeeCreated": true}
    const expectedState = {"employeeList": [{"city": "Strasbourg", "dateOfBirth": "01/01/1990", "department": "Alsace", "firstName": "Prenom-test", "lastName": "Nom-de-famille", "startDate": "01/02/2000", "state": "France", "street": "rue de la rue", "zipCode": "67000"}], "isEmployeeCreated": false}
    expect(rootReducer(previousState, {type:"EMPLOYEE_CREATED"})).toEqual(expectedState)
  })

  test('should add a new employee and set flag to true', () => {
    const previousState = {"employeeList": [], "isEmployeeCreated": false}
    const newEmployee = {"city": "Strasbourg", "dateOfBirth": "01/01/1990", "department": "Alsace", "firstName": "Prenom-test", "lastName": "Nom-de-famille", "startDate": "01/02/2000", "state": "France", "street": "rue de la rue", "zipCode": "67000"}
    const expectedState = {"employeeList": [newEmployee], "isEmployeeCreated": true}
    expect(rootReducer(previousState, {type:"SAVE_NEW_EMPLOYEE", payload:{newEmployee: newEmployee}})).toEqual(expectedState)
  })
});