
import React from "react";
import{connect} from "react-redux";
import UserService from "../../services/UserService";
import { Navigate } from "react-router-dom";

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
        loginUser : (userToken, isConnected, userData) =>
        dispatch({type : "USER_LOGGIN_SUCCESS", payload : { token :userToken, isConnected:isConnected, userData:userData} })
    }
};

function SignIn(props){

    const handleSubmit = (event) => {
        event.preventDefault();
        const loginRequest={
            email: event.target.username.value,
            password: event.target.password.value,
          };
          // send login request
        UserService.loginUser(loginRequest).then( (data) =>{
              // if login ok, get user infos with token
             if(data.status === 200){
                UserService.getUserInfo(data.body.token).then( (dataUser) => {
                  // when get info, update store
                  if(dataUser.status === 200){
                    props.loginUser(data.body.token, true, dataUser.body)
                  }
                })
             }   
        })
      }
    return (
        props.isConnected ? 
        <Navigate to="/myaccount" />
            :
            <main className="main bg-dark">
            <section className="sign-in-content">
              <i className="fa fa-user-circle sign-in-icon"></i>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                  <label htmlFor="username">Username</label>
                  <input type="text" id="username" />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="password">Password</label
                  ><input type="password" id="password" />
                </div>
                <div className="input-remember">
                  <input type="checkbox" id="remember-me" />
                  <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button">Sign In</button> 
               
              </form>
            </section>
          </main>
    );
}

export default ( connect(mapStateToProps, mapDispatchToProps) )(SignIn);