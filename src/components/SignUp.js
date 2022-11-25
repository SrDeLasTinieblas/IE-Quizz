import React from 'react';
import {useAuth} from '../context/authContext'
import { useNavigate } from "react-router-dom"
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Container from '@mui/material/Container';
import axios from "axios"
import { useState } from 'react';



const UrlPost = "https://localhost:7163/usuarios/registrando";


const useStyles = styled((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

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
    
    /*setError('')
    try{
      //
      navigate('/')
    }catch(err){
      console.log(err.code)
      if(err.code === 'auth/invalid-email'){
        setError('Correo invalido')
      }else if(err.code === 'auth/weak-password'){
        setError('Contraseña minimo de de 6 digitos')
      }
      else if(err.code === 'auth/email-already-in-use'){
        setError('Correo ya esta en uso')
      }
    }*/
  }

  /*const [Usuario, setUsuario] = useState({})
  const [Pass, setPass] = useState({})
  const [Nombres, setNombres] = useState({})
  const [Apellidos, setApellidos] = useState({})
  const [Edad, setEdad] = useState({})
  const [Email, setEmail] = useState({})
  const [Fecha, setFecha] = useState({})*/

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form /*action="http://localhost:7000/orden_detalles" method="POST"*/  className={classes.form} noValidate>
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
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        {/*<Copyright />*/}
      </Box>
    </Container>
  );
}