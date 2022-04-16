import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Navigate  } from 'react-router-dom'
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "styled-components"
import axios from 'axios'
import UserContext from '../../UserContext';
import { useState, useContext } from 'react'

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const theme = createTheme();

export default function SignIn() {
  const userContext = useContext(UserContext)

  const [values, setValues] = useState({
    email: '',
    password: '',
    isLoggedin: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...values,
  //     showPassword: !values.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const login = (event)=>{

event.preventDefault();
//console.log(values)
axios.post('http://localhost:8088/api/auth',{
  email:values.email,
  password:values.password
}).then(function(response){
  if(response.status === 200){
    console.log('user is authenticated')
    let user = {
      email: values.email,
      token: response.data.token
    }

    localStorage.setItem("user", JSON.stringify(user))
    userContext.setUser({
      isAuthen: true
    })
    setValues({...values,isLoggedin:true})
  }
    console.log(JSON.stringify(response.data));
}).catch(err=>{
  console.log(err)
})

  }

  if(values.isLoggedin){
    return <Navigate to="/dashboard"></Navigate>
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
         <Avatar sx={{ m: 1, backgroundColor: "#324a80"}}>
          <Link to="/"> <Logo src="https://i.imgur.com/XCFT9Ps.png" alt='logo'/></Link>
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form"  method='post'  validate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={values.email}
              onChange={handleChange('email')}
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={values.password}
              onChange={handleChange('password')}
              name="password"
              label="Password"
              type="password"
              id="password"
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
              method='post'
              sx={{ mt: 3, mb: 2 }}
              onClick={login}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link to='/api/register'>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      
      </Container>
    </ThemeProvider>
  );
}

//copyright component
//  <Copyright sx={{ mt: 8, mb: 4 }} />


const Logo = styled.img`

  width: 100px;
`