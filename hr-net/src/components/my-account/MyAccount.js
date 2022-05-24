import React, { useState } from 'react';
import{connect} from "react-redux";
import { Navigate } from "react-router-dom";

const mapStateToProps = state => {
    return {
        userData : state.userData,
        isConnected : state.isConnected,
        token : state.token
    }
};
// to update store
const mapDispatchToProps = dispatch => {
    return {
        editInfos : (userData) =>
        dispatch({type : "USER_EDIT_NAME", payload : {userData:userData} })
    }
};

function MyAccount(props) {

    const [isEditMode, setIsEditMode] = useState(false);

    const handleSaveEdit = (event) => {
        event.preventDefault();
        const updateInfoRequest={
            firstName: event.target.firstname.value,
            lastName: event.target.lastname.value,
          };
        
    }

    const handleEdit = (event) => {
        setIsEditMode(!isEditMode);
    }

    return (
        props.isConnected ? 
            <main className="main bg-dark">
            <div className="header">
              
              {isEditMode ?
                <>
                  <h1>Welcome back</h1>
                  <form className="form-edit-infos" onSubmit={handleSaveEdit}>
                    <div className="form-edit-infos-input">
                      <input type="text" id="firstname" defaultValue={props.userData.firstName} />
                      <input type="text" id="lastname" defaultValue={props.userData.lastName}/>
                    </div>
                    <div className="form-edit-infos-button">
                      <button className="edit-button">Save</button>
                      <button className="edit-button" onClick={handleEdit} >Cancel</button>
                    </div>
                  </form>
                </>
              :
                <>
                  <h1>Welcome back<br /> {props.userData.firstName} {props.userData.lastName}</h1>
                  <button className="edit-button" onClick={handleEdit}>Edit Name</button>
                </>
              }
              
            </div>
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
            <section className="account">
              <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
              </div>
              <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
              </div>
            </section>
          </main>
          :
          <Navigate to="/signIn" />
        
    );
    
    
}

export default (connect(mapStateToProps, mapDispatchToProps))(MyAccount)