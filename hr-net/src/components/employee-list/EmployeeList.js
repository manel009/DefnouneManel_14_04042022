import React, { useEffect }  from 'react';
import{connect} from "react-redux";
import { Link } from "react-router-dom";
import $ from 'jquery';
import 'jquery/dist/jquery.min.js';
import "datatables.net-dt/js/dataTables.dataTables"
import "datatables.net-dt/css/jquery.dataTables.min.css"

const mapStateToProps = state => {
    return {
        employeeList : state.employeeList
    }
};


function EmployeeList(props) {
    useEffect(() => {
        $('#employee-table').DataTable({
            data: props.employeeList,
            columns: [
                { title: 'First Name', data: 'firstName' },
                { title: 'Last Name', data: 'lastName' },
                { title: 'Start Date', data: 'startDate' },
                { title: 'Department', data: 'department' },
                { title: 'Date of Birth', data: 'dateOfBirth' },
                { title: 'Street', data: 'street' },
                { title: 'City', data: 'city' },
                { title: 'State', data: 'state' },
                { title: 'Zip Code', data: 'zipCode' },
            ]
        });
    });

    return (
      <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <table id="employee-table" className="display"></table>
            <Link to="/">Home</Link>
        </div>
    );
}

export default (connect(mapStateToProps))(EmployeeList)