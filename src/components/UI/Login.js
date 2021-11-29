import React, { useState,useRef } from "react";
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {loginActions, oginActions} from '../redux/login-slice';
function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading]=useState(false);
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const setLoginToken = (token )=>{
    dispatch(
      loginActions.loginUser(token)
    );
  }
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) =>{
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    
    setIsLoading(true);
    let url ;
    if(isLogin){
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB5VKAblMKvVEMmbPX7XlFLdN6x59kzTDY'
    }else{
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB5VKAblMKvVEMmbPX7XlFLdN6x59kzTDY'
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true
        }),
        headers:{
          'Content-Type' : 'application/json'
        }
      }).then(res=>{
        setIsLoading(false);
        if(res.ok){
         return res.json();
        }else{
          return res.json().then(data=>{
            let errorMessage = 'Authentication Failed';
            throw new Error(errorMessage);
          });
        }
      }).then((data)=>{
        setLoginToken(data.idToken);
        navigate('/');
      }).catch((err)=>{
        alert(err.message);
      })
  };
  
  return (
    <div className="pt-4 d-flex flex-column align-items-center ">
      <h3 className="text-center mb-4"> {isLogin ? "Login" : "Signup"}</h3>
      <form className="container " onSubmit={submitHandler}>
        <div className="row mb-3">
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email" className="form-control" id="inputEmail3" ref={emailInputRef}/>
          </div>
        </div>
        <div className="row mb-3">
          <label for="inputPassword3" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              ref={passwordInputRef}
            />
          </div>
        </div>
        <div className="d-flex flex-column align-items-center">
         {!isLoading && <button type="submit" className="btn btn-danger w-25 ">
            {isLogin ? "Login" : "Sign Up"}
          </button>}
          {isLoading && <p>Sending request....</p>}
          <button
            type="button"
            className="border-0 text-danger bg-transparent w-25"
            onClick={switchAuthModeHandler}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
