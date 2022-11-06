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

/*function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}*/
const UrlPost = "https://localhost:7163/usuarios/registrando";



const validandoCampos = () =>{
  //PeticionPost()

}

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

const PeticionPost= (e) =>{
  e.preventDefault();
  console.log('Usuario == ' + "Usuario.firstName");
  //Objeto[target.name] = objeto[target.value]
  axios.post(UrlPost, data
    /*{
      Usuario: "Usuario.firstName",
      Pass: "111111",
      Nombres: "afefeh",
      Apellidos: "Azucar",
      Edad: "43",
      Email: "swss@gmail.com",
      Fecha: "2000/03/14"
    }*/
    ).then(response =>{
      //console.log(response);
  }).catch(err => console.log("error: "+err));
}
  const handleChange = (e) => {
    const {name, value} = e.target
    setData({...data,[name]:value})
    //console.log("console ==> "+ Usuario);
    //setUsuario({ ...Usuario, [name]: value })
    //console.log(name, value)
  }

  /*const handleChangePass = ({ target: { name, value } }) => {
    //console.log("console ==> "+ Usuario);
    //setPass({ ...Pass, [name]: value })
    //console.log(name, value)
  }*/

  const [data, setData] = useState({
    Usuario: "",
    Pass: "111111",
    Nombres: "afefeh",
    Apellidos: "Azucar",
    Edad: "43",
    Email: "swss@gmail.com",
    Fecha: "2000/03/14"
  })

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
            <Grid item xs={12} sm={6}>
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
            </Grid>

            <Grid item xs={12} sm={6}>
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
            </Grid>


            <Grid item xs={12} sm={6}>
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
            </Grid>

            <Grid item xs={12} sm={6}>
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
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="Email"
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
                name="Pass"
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
  );
}