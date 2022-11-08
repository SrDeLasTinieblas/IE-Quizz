import {useAuth} from '../context/authContext'
import { useNavigate } from "react-router-dom"
import React from 'react';
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

export function Register() {
  const classes = useStyles();

const [Usuario, setUsuario] = useState({
  Usuario: ""/*,
  Pass: "",
  Nombres: "",
  Apellidos: "",
  Edad: "",
  Email: "",
  Fecha: ""*/
})

  //const [Usuario, setUsuario] = useState({})
  const [Pass, setPass] = useState({
    Pass: ""
  })
  const [Nombres, setNombres] = useState({
    Nombres: ""
  })
  const [Apellidos, setApellidos] = useState({
    Apellidos: ""
  })
  const [Edad, setEdad] = useState({
    Edad: ""
  })
  const [Email, setEmail] = useState({
    Email: ""
  })
  const [Fecha, setFecha] = useState({
    Fecha: ""
  })

const PeticionPost= (e) =>{
  e.preventDefault();
  /*console.log('Usuario == ' + username.Usuario);
  console.log('Usuario == ' + username.Pass);
  console.log('Usuario == ' + username.Nombres);*/
  /*console.log('Pass == ' + username.Pass);
  console.log('Nombres == ' + username.Nombres);
  console.log('Apellidos == ' + username.Apellidos);
  console.log('Edad == ' + username.Edad);
  console.log('Email == ' + username.Email);
  console.log('Fecha == ' + username.Fecha);*/
  //Objeto[target.name] = objeto[target.value]
  axios.post(UrlPost, //data
    {
      Usuario: Usuario.Usuario, /*username.Usuario*/
      Pass: Pass.Pass, /*username.Pass*/
      Nombres: Nombres.Nombres, /*username.Nombres*/
      Apellidos: Apellidos.Apellidos,
      Edad: Edad.Edad, /*username.Edad*/
      Email: Email.Email, 
      Fecha: Fecha.Fecha, /*username.Fecha*/
    }
    ).then(response =>{
      //console.log(response);
  }).catch(err => console.log("error: "+err));
}

const {signup} = useAuth()
const navigate = useNavigate()
const [error, setError] = useState()

const handleChangeNombres = ({target: {name, value}}) => {
  setNombres({...Nombres,[name]: value})
  //setData({...data,[name]: value})
  //console.log(name, value)
}

const handleChangeApellidos = ({target: {name, value}}) => {
  setApellidos({...Apellidos,[name]: value})
  //setData({...data,[name]: value})
  //console.log(name, value)
}

const handleChangeUsuario = ({target: {name, value}}) => {
  setUsuario({...Usuario,[name]: value})
  //setData({...data,[name]: value})
  //console.log(name, value)
}

const handleChangeEmail = ({target: {name, value}}) => {
  setEmail({...Email,[name]: value})
  //setData({...data,[name]: value})
  //console.log(name, value)
}

const handleChangePassword = ({target: {name, value}}) => {
  setPass({...Pass,[name]: value})
  //setData({...data,[name]: value})
  //console.log(name, value)
}
const handleChangeFecha = ({target: {name, value}}) => {
  setFecha({...Fecha,[name]: value})
  //setData({...data,[name]: value})
  //console.log(name, value)
}

/*const [data, setData] = useState({
  Usuario: username.Usuario,
  Pass: "username.Pass",
  Nombres: "username.Nombres",
  Apellidos: "Azucar",
  Edad: "43",
  Email: "username.Email",
  Fecha: "2000/03/14"
})*/



const handleSubmit = async e => {
  e.preventDefault()
  setError('') 
  try{
    //await signup(username.email, username.password)
    navigate('/')
  }catch(err){
    //console.log(err.code)
    if(err.code === 'auth/invalid-email'){
      setError('Correo invalido')
    }else if(err.code === 'auth/weak-password'){
      setError('Contraseña minimo de de 6 digitos')
    }
    else if(err.code === 'auth/email-already-in-use'){
      setError('Correo ya esta en uso')
    }
  }
}
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
          {<Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="Nombres"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label= "Nombres" //"First Name"
              //value="Nombres"
              onChange={handleChangeNombres}
              autoFocus
            />
          </Grid>}

          {<Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label= "apellidos" //"Last Name"
              name="Apellidos"
              //value="Apellidos"
              onChange={handleChangeApellidos}
              autoComplete="lname"
            />
          </Grid>}


          {<Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="Usuario"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label= "Usuario"//"First Name"
              //value="Nombres"
              onChange={handleChangeUsuario}
              autoFocus
            />
          </Grid>}

          {<Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="fecha"
              variant="outlined"
              required
              fullWidth
              id="Fecha"
              label= "Fecha"
              //value="Nombres"
              onChange={handleChangeFecha}
              autoFocus
            />
          </Grid>}
          
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="Email"
              //value="Email"
              onChange={handleChangeEmail}
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="Pass"
              label="Password"
              type="password"
              //value="Pass"
              onChange={handleChangePassword}
              id="Pass"
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
          onClick={PeticionPost}
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
    )

      {/*<div>
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit} className="form-signin">
      <h2 className="form-signin-heading">Please Registrate</h2>
      <input 
      type="text" 
      className="form-control" 
      name="email" 
      id="email"
      placeholder="Email Address" 
      onChange={handleChange}
      required="" />

      <input 
      type="password" 
      className="form-control" 
      name="password" 
      id="password"
      placeholder="Password" 
      onChange={handleChange}
      required="" />

      <label className="checkbox">
        <input type="checkbox" value="remember-me" id="rememberMe" name="rememberMe"/> Remember me 
        </label>

      {<button className="btn btn-lg btn-primary btn-block" type="submit">Registrarse</button>}
    </form>
      </div>
      */}

  }
  