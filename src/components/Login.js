import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import peru from '../images/peru.jpg';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useEffect } from 'react';

export function Login() {

  const [username, setUsername] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUsername({ ...username, [name]: value })
    //console.log(name, value)
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setError('')
    try {
      await login(username.email, username.password)
      navigate('/')
    } catch (err) {
      //console.log(err.code)
      navigate('/')
      if (err.code === 'auth/invalid-email') {
        setError('Correo invalido')
      } else if (err.code === 'auth/weak-password') {
        setError('Contraseña minimo de de 6 digitos')
      }
      else if (err.code === 'auth/email-already-in-use') {
        setError('Correo ya esta en uso')
      }
    }

  }

  return (
    <div>
      
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit} className="form-signin" >
        <h2 className="form-signin-heading">Please login</h2>
        <input 
        type="text" 
        className="form-control" 
        placeholder="Email Address" 
        name="email"
        onChange={handleChange}
        required="" />

        <input 
        type="password" 
        className="form-control" 
        name="password" 
        placeholder="Password" 
        onChange={handleChange}
        required="" />

        <label className="checkbox">
          <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe" /> Remember me
        </label>

        {<button className="btn btn-lg btn-primary btn-block" type="submit">Login</button>}
      </form>
    </div>

  )
}
