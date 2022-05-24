import React, { useState } from "react";
import { Link } from "react-router-dom";
import{connect} from "react-redux";

//to get from store
const mapStateToProps = state => {
  return {
      user : state.user,
      isConnected : state.isConnected,
  }
};

// to update store
const mapDispatchToProps = dispatch => {
  return {
      saveEmployee : (newEmployee) => {
        dispatch({type : "SAVE_NEW_EMPLOYEE", payload : { newEmployee:newEmployee} })
      }
      
  }
};

function Home(props){

  const handleSubmit = (event) => {
    event.preventDefault();
    let newEmployee = {
        firstName: event.target.firstname.value,
        lastName: event.target.lastname.value,
        dateOfBirth: event.target.dateofbirth.value,
        startDate: event.target.startdate.value,
        department: event.target.department.value,
        street: event.target.street.value,
        city: event.target.city.value,
        state: event.target.state.value,
        zipCode: event.target.zipcode.value
    };
    props.saveEmployee(newEmployee);
  }


    return (
      <main>
        <div className="title">
            <h1>HRnet</h1>
        </div>

        <div className="container">
          
          <Link to="/employee-list">View Current Employees</Link>
          <h2>Create Employee</h2>
        
          <form onSubmit={handleSubmit} id="create-employee">
            
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="firstname" />

              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="lastname" />

              <label htmlFor="date-of-birth">Date of Birth</label>
              <input id="dateofbirth" type="text" />

              <label htmlFor="start-date">Start Date</label>
              <input id="startdate" type="text" />

              <fieldset className="address">
                  <legend>Address</legend>

                  <label htmlFor="street">Street</label>
                  <input id="street" type="text" />

                  <label htmlFor="city">City</label>
                  <input id="city" type="text" />

                  <label htmlFor="state">State</label>
                  <select name="state" id="state"></select>

                  <label htmlFor="zip-code">Zip Code</label>
                  <input id="zipcode" type="number" />
              </fieldset>

              <label htmlFor="department">Department</label>
              <select name="department" id="department">
                  <option>Sales</option>
                  <option>Marketing</option>
                  <option>Engineering</option>
                  <option>Human Resources</option>
                  <option>Legal</option>
              </select>
          </form>

          <button>Save</button>
        </div>
        { props.isEmployeeCreated ? 
          <div id="confirmation" className="modal">Employee Created!</div> : ""
        }
        

      </main>
    );
}

export default (connect(mapStateToProps, mapDispatchToProps)) (Home);