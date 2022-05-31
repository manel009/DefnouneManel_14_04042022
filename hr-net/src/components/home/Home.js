import React from 'react';
import { Link } from "react-router-dom";
import{connect} from "react-redux";
import Select from '../select/Select.js';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Datepicker from '../datepicker/Datepicker.js';

//to get from store
const mapStateToProps = state => {
  return {
      isEmployeeCreated : state.isEmployeeCreated
  }
};

// to update store
const mapDispatchToProps = dispatch => {
  return {
    saveEmployee : (newEmployee) => {
      dispatch({type : "SAVE_NEW_EMPLOYEE", payload : { newEmployee:newEmployee} })
    } ,
    employeeCreated : () => {
        dispatch({type : "EMPLOYEE_CREATED", payload : {} })
      }
  }
};

function Home(props){
    
    const handleClose = () => {
        props.employeeCreated();
    };

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

    const statesContent = [
    {
        "text": "Alabama",
        "value": "AL"
    },
    {
        "text": "Alaska",
        "value": "AK"
    },
    {
        "text": "American Samoa",
        "value": "AS"
    },
    {
        "text": "Arizona",
        "value": "AZ"
    },
    {
        "text": "Arkansas",
        "value": "AR"
    },
    {
        "text": "California",
        "value": "CA"
    },
    {
        "text": "Colorado",
        "value": "CO"
    },
    {
        "text": "Connecticut",
        "value": "CT"
    },
    {
        "text": "Delaware",
        "value": "DE"
    },
    {
        "text": "District Of Columbia",
        "value": "DC"
    },
    {
        "text": "Federated States Of Micronesia",
        "value": "FM"
    },
    {
        "text": "Florida",
        "value": "FL"
    },
    {
        "text": "Georgia",
        "value": "GA"
    },
    {
        "text": "Guam",
        "value": "GU"
    },
    {
        "text": "Hawaii",
        "value": "HI"
    },
    {
        "text": "Idaho",
        "value": "ID"
    },
    {
        "text": "Illinois",
        "value": "IL"
    },
    {
        "text": "Indiana",
        "value": "IN"
    },
    {
        "text": "Iowa",
        "value": "IA"
    },
    {
        "text": "Kansas",
        "value": "KS"
    },
    {
        "text": "Kentucky",
        "value": "KY"
    },
    {
        "text": "Louisiana",
        "value": "LA"
    },
    {
        "text": "Maine",
        "value": "ME"
    },
    {
        "text": "Marshall Islands",
        "value": "MH"
    },
    {
        "text": "Maryland",
        "value": "MD"
    },
    {
        "text": "Massachusetts",
        "value": "MA"
    },
    {
        "text": "Michigan",
        "value": "MI"
    },
    {
        "text": "Minnesota",
        "value": "MN"
    },
    {
        "text": "Mississippi",
        "value": "MS"
    },
    {
        "text": "Missouri",
        "value": "MO"
    },
    {
        "text": "Montana",
        "value": "MT"
    },
    {
        "text": "Nebraska",
        "value": "NE"
    },
    {
        "text": "Nevada",
        "value": "NV"
    },
    {
        "text": "New Hampshire",
        "value": "NH"
    },
    {
        "text": "New Jersey",
        "value": "NJ"
    },
    {
        "text": "New Mexico",
        "value": "NM"
    },
    {
        "text": "New York",
        "value": "NY"
    },
    {
        "text": "North Carolina",
        "value": "NC"
    },
    {
        "text": "North Dakota",
        "value": "ND"
    },
    {
        "text": "Northern Mariana Islands",
        "value": "MP"
    },
    {
        "text": "Ohio",
        "value": "OH"
    },
    {
        "text": "Oklahoma",
        "value": "OK"
    },
    {
        "text": "Oregon",
        "value": "OR"
    },
    {
        "text": "Palau",
        "value": "PW"
    },
    {
        "text": "Pennsylvania",
        "value": "PA"
    },
    {
        "text": "Puerto Rico",
        "value": "PR"
    },
    {
        "text": "Rhode Island",
        "value": "RI"
    },
    {
        "text": "South Carolina",
        "value": "SC"
    },
    {
        "text": "South Dakota",
        "value": "SD"
    },
    {
        "text": "Tennessee",
        "value": "TN"
    },
    {
        "text": "Texas",
        "value": "TX"
    },
    {
        "text": "Utah",
        "value": "UT"
    },
    {
        "text": "Vermont",
        "value": "VT"
    },
    {
        "text": "Virgin Islands",
        "value": "VI"
    },
    {
        "text": "Virginia",
        "value": "VA"
    },
    {
        "text": "Washington",
        "value": "WA"
    },
    {
        "text": "West Virginia",
        "value": "WV"
    },
    {
        "text": "Wisconsin",
        "value": "WI"
    },
    {
        "text": "Wyoming",
        "value": "WY"
    }
    ];

    const departmentsContent = [
        {
            "text":"Sales",
            "value":"Sales",
        },
        {
            "text":"Marketing",
            "value":"Marketing",
        },
        {
            "text":"Human Resources",
            "value":"HR",
        },
        {
            "text":"Legal",
            "value":"Legal",
        }
    ];

 

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
            <Datepicker id="dateofbirth" ></Datepicker>

            <label htmlFor="start-date">Start Date</label>
            <Datepicker id="startdate" ></Datepicker>

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" />

                <label htmlFor="city">City</label>
                <input id="city" type="text" />

                <label htmlFor="state">State</label>
                <Select name="state" content={statesContent}></Select>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zipcode" type="number" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select name="department" content={departmentsContent}></Select>
            
            <button type="submit">Save</button>
        </form>

        <Dialog
        open={props.isEmployeeCreated}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Employee Created!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            OK
          </Button>
        </DialogActions>
        </Dialog>
        
      </div>
    </main>
  );
}

export default (connect(mapStateToProps, mapDispatchToProps)) (Home);