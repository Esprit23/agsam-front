// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import axios from 'axios';
// import { useNavigate } from "react-router-dom"
// import { Paper } from '@mui/material';
// // import { borderRadius } from '@mui/system';

// const theme = createTheme(
  

// );

// export default function SignIn(props) {
//   const { setIsLoggedIn } = props
//   const [errrorMessage, setErrorMessage] = React.useState('')
//   let navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     const formData = new FormData(event.currentTarget);
//     const form = {
//       email: formData.get('email'),
//       password: formData.get('password')
//     };
//     const { data } = await axios.post("http://localhost:4000/user/signin", form);
//     if (data.status === parseInt('401')) {
//       setErrorMessage(data.response)
//     } else {
//       localStorage.setItem('token', data.token);
//       setIsLoggedIn(true);
//       navigate('/Home')
//     }

//   };
//   const paperStyle={padding:20, height:'80vh',width:400,margin:"20px auto" , borderRadius:"18px"}
//   return (
    
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//       <Grid>
//           <Paper elevation={10} style={paperStyle}>
//           <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'center',
//           }}
//         >
//           <Avatar sx={{ m: 1, bgcolor: 'black' }}>

//           </Avatar>
//           <Typography component="h1" variant="h5">
//             AGSAM
//           </Typography>
//           <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               autoComplete="email"
//               autoFocus
//             />
//             <TextField
//               margin="normal"
//               required
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               autoComplete="current-password"
//             />
//             <Typography component="p" variant="p" color="red">
//               {errrorMessage}
//             </Typography>
//             <Button
//               type="submit"
//               fullWidth
//               variant="contained"
//               sx={{ mt: 3, mb: 2 }}
//               href="Home"
//             >
//               Se Connecter
//             </Button>
//             <Grid container>
//               <Grid item xs>
//                 <Link href="/Signup" variant="body2">
//                   Mot pass oblier?
//                 </Link>
//               </Grid>
//               <Grid item>
//                 <Link href="SignUp" variant="body2">
//                   {"je n'ai pas de compte? créer"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//           </Paper>
//       </Grid>


//       </Container>
//     </ThemeProvider>
//   );
// }
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

const theme = createTheme();

export default function SignIn(props) {
  const { setIsLoggedIn } = props
  const [errrorMessage, setErrorMessage] = React.useState('')
  let navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const form = {
      email: formData.get('email'),
      password: formData.get('password')
    };
    const { data } = await axios.post("http://localhost:4000/user/signin", form);
    if (data.status === parseInt('401')) {
      setErrorMessage(data.response)
    } else {
      localStorage.setItem('token', data.token);
      setIsLoggedIn(true)
      navigate('/home')
    }

  };
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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>

          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
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
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Typography component="p" variant="p" color="red">
              {errrorMessage}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/Signup" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="SignUp" variant="body2">
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