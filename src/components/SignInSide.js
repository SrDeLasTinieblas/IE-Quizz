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
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";


function Copyright(props) {

  /*const [username, setUsername] = useState({
    email: '',
    password: ''
  })
  const handleChange = ({ target: { name, value } }) => {
    setUsername({ ...username, [name]: value })
    //console.log(name, value)
  }
*/

  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      {/*<Link color="inherit" href="https://mui.com/">
        Your Website
  </Link>*/}{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignInSide() {

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUsername({ ...username, [name]: value })
    //console.log(name, value)
  }

  const [username, setUsername] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('')
    const data = new FormData(event.currentTarget);
    try {
      await login(username.email, username.password)
      navigate('/')
    } catch (err) {
      //console.log(err.code)
      //alert("error: " + err.message)
      //navigate('/')
      if (err.code === 'auth/invalid-email') {
        setError('Correo invalido')
      } 
      /*else 
      if (err.code === 'auth/weak-password') {
        setError('Contraseña minimo de de 6 digitos')
      }
      else 
      if (err.code === 'auth/email-already-in-use') {
        setError('Correo ya esta en uso')
      }*/
    }
    /*console.log({
      email: data.get('email'),
      password: data.get('password'),
    });*/
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://besthqwallpapers.com/Uploads/11-10-2017/23619/thumb2-peruvian-flag-national-flag-peru-silk-texture-flag-peru.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
              {error && <p>{error}</p>}
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={handleChange}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                onChange={handleChange}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                {/*<Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>*/}
                <Grid item>
                  {<Link href="/register" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>}

                    {/*<a className="register"><Link to="/register">register </Link></a>*/}

                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
