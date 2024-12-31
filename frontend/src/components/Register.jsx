import React, { useState , useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaCircleUser } from 'react-icons/fa6';
import {useDispatch, useSelector} from "react-redux"
import { userRegister } from '../store/actions/authAction';
import { useAlert } from 'react-alert';
import { SUCCESS_MESSAGE_CLEAR,ERROR_CLEAR } from "../store/type/authType";


function Register() {
  
  const navigate = useNavigate();
  const alert = useAlert();
  const {loading,authenticate,error,successMessage,myInfo} = useSelector(state=>state.auth);
  console.log(myInfo);
  
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });
  const inputHandle = (e) => {
    setstate({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const [loadImage, setLoadImage] = useState('');
  const fileHandle = e =>{
    if (e.target.files.length !== 0) {
      setstate({
        ...state,
        [e.target.name]: e.target.files[0],
      });
    }
    const reader = new FileReader();
    reader.onload = () => {
      setLoadImage(reader.result);
    };
    reader.readAsDataURL(e.target.files[0]);
  }
  const register = e => {
    
    e.preventDefault();
    const formData = new FormData();
          formData.append('userName',state.userName);
          formData.append('email',state.email);
          formData.append('password',state.password);
          formData.append("confirmPassword", state.confirmPassword);
    formData.append("image", state.image);
    dispatch(userRegister(formData));
  }
  useEffect(()=>{
    if(authenticate){
         navigate('/');
    }
    if(successMessage){
      alert.success(successMessage);
      dispatch({type : SUCCESS_MESSAGE_CLEAR })
    }
    if(error){
      error.map(err => alert.error(err));
      dispatch({type : ERROR_CLEAR })
    }
},[successMessage,error])

  return (
    <div className="register">
      <div className="card">
        <div className="card-body">
          <form onSubmit={register}>
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                onChange={inputHandle}
                name="userName"
                value={state.userName}
                className="form-control"
                placeholder="User Name"
                id="username"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                onChange={inputHandle}
                name="email"
                value={state.email}
                className="form-control"
                placeholder="Email"
                id="email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                onChange={inputHandle}
                name="password"
                value={state.password}
                className="form-control"
                placeholder="Password"
                id="password"
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                onChange={inputHandle}
                name="confirmPassword"
                value={state.confirmPassword}
                className="form-control"
                placeholder="Confirm Password"
                id="confirmPassword"
              />
            </div>
            <div className="form-group">
              <div className="file-image">
                <div className="image">
                  {loadImage ? (
                    <img src={loadImage} />
                  ) : (
                    <FaCircleUser style={{ width: "100%", height: "100%" }} />
                  )}
                </div>
                <div className="file">
                  <label htmlFor="image">Select Image</label>
                  <input
                    type="file"
                    className="form-control"
                    id="image"
                    accept="image/*"
                    onChange={fileHandle}
                    name="image"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <input type="submit" value="register" className="btn" />
            </div>
            <div className="form-group">
              <span>
                <Link to="/login"> Login Your Account</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register