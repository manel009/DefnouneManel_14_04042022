import React  from 'react';
import{connect} from "react-redux";
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';

const mapStateToProps = state => {
    return {
        employeeList : state.employeeList
    }
};


function EmployeeList(props) {


      const columns = [
        { field: 'firstName', title: 'First name', width: 130 },
        { field: 'lastName', title: 'Last name', width: 130 },
        { field: 'startDate', title: 'Start Date', width: 110 },
        { field: 'department', title: 'Department', width: 110 },
        { field: 'dateOfBirth', title: 'Date of Birth', width: 110 },
        { field: 'street', title: 'Street', width: 120 },
        { field: 'city', title: 'City', width: 80 },
        { field: 'state', title: 'State', width: 80 },
        { field: 'zipCode', title: 'Zip Code', width: 90 },
      ];

    return (
      <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div className='employee-list'>
            <MaterialTable
                title="Current employees"
                columns={columns}
                data={props.employeeList}       
                options={{
                    sorting: true,
                    search: true,
                    filtering: true,
                    selection: true
                }}
                />
            </div>
            <Link to="/"><button>Home</button></Link>
        </div>
    );
}

export default (connect(mapStateToProps))(EmployeeList)