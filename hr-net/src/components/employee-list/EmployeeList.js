import React  from 'react';
import{connect} from "react-redux";
import { Link } from "react-router-dom";
import { DataGrid } from '@mui/x-data-grid';

const mapStateToProps = state => {
    return {
        employeeList : state.employeeList
    }
};


function EmployeeList(props) {

    const columns = [
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        { field: 'startDate', headerName: 'Start Date', width: 110 },
        { field: 'department', headerName: 'Department', width: 110 },
        { field: 'dateOfBirth', headerName: 'Date of Birth', width: 110 },
        { field: 'street', headerName: 'Street', width: 120 },
        { field: 'city', headerName: 'City', width: 80 },
        { field: 'state', headerName: 'State', width: 80 },
        { field: 'zipCode', headerName: 'Zip Code', width: 90 },
      ];

    const rows = props.employeeList;

    var id=0;
    const getRowID = () => {
        return id++;
    }

    console.log(rows);


    return (
      <div id="employee-div" className="container">
            <h1>Current Employees</h1>
            <div className='employee-list'>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                    getRowId={getRowID}
                    scrollbarSize={1}
                />
            </div>
            <Link to="/">Home</Link>
        </div>
    );
}

export default (connect(mapStateToProps))(EmployeeList)