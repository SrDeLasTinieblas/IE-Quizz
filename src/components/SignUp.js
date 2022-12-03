import React from 'react';
import {useAuth} from '../context/authContext'
import { useNavigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//import Link from '@mui/material/Link';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import axios from "axios"
import { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();

export default function SignUp() {


  const theme = createTheme();
  //const classes = useStyles();
  const {signup} = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState()

  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  

  const handleChange = ({target: {name, value}}) => 
  setUser({...user, [name]: value})

  const handleSubmit =  e => {
    e.preventDefault()
    //console.log(user)
    signup(user.email, user.password)
    alert("Registrado correctamente!")
    navigate('/login')
  }

  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>

          <Grid container spacing={2}>
            {/*<Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Nombres"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                //value="Nombres"
                onChange={handleChange}
                autoFocus
              />
            </Grid>*/}

            {/*<Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="Apellidos"
                //value="Apellidos"
                onChange={handleChange}
                autoComplete="lname"
              />
            </Grid>*/}

            {/*<Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Usuario"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                //value="Nombres"
                onChange={handleChange}
                autoFocus
              />
          </Grid>*/}

            {/*<Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="Fecha"
                variant="outlined"
                required
                fullWidth
                id="Fecha"
                label="Fecha"
                //value="Nombres"
                onChange={handleChange}
                autoFocus
              />
            </Grid>*/}
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                //value="Email"
                onChange={handleChange}
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                //value="Pass"
                onChange={handleChange}
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            
            {/*<Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>*/}
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>

    </Container>
    </ThemeProvider>

  );
}
