import * as React from 'react';
import  {useContext} from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
//import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from "styled-components"
import axios from 'axios';
import { Navigate  } from 'react-router-dom'
import UserContext from '../../UserContext';
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

export default function SignUp() {

  const userContext = useContext(UserContext)
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    isLoggedin: false,
    name: '',
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


  const register = (event)=>{

event.preventDefault();
//console.log(values)

axios.post('http://localhost:8088/api/register',{
  email:values.email,
  password:values.password,
  name: values.name
}).then(function(response){
  if(response.status === 200){
    console.log('user is register')
    let user = {
      name: values.name,
      email: values.email,
      token: response.data.token
    }

    localStorage.setItem("user", JSON.stringify(user))
    setValues({...values,isLoggedin:true})
  }
    console.log(JSON.stringify(response.data));
}).catch(err=>{
  console.log(err)
})


  }

  if(values.isLoggedin){
    return <Navigate to="/api/auth"></Navigate>
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
            Sign up
          </Typography>
          <Box component="form" noValidate method="post" onSubmit={register} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="name"
                  required
                  fullWidth
                  value={values.name}
                  onChange={handleChange('name')}
                  id="name"
                  label="Enter Name"
                  autoFocus
                />
              </Grid>
            
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  value={values.email}
                  onChange={handleChange('email')}
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  value={values.password}
                  onChange={handleChange('password')}
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
             
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/api/auth" >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


const Logo = styled.img`

  width: 100px;
`


//  <Grid item xs={12} sm={6}>
{/* <TextField
required
fullWidth
id="lastName"
label="Last Name"
name="lastName"
autoComplete="family-name"
/>
</Grid> */}


// <Grid item xs={12}>
{/* <TextField
required
fullWidth
name="image"
type="file"
id="image"
/>
</Grid> */}