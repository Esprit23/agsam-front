import React from 'react'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { CardContent,Card, Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { styled} from '@mui/material/styles';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:'20px',
  p: 4,
};
const Input = styled('input')({
  display: 'none',   
});

export default function CreatUser() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  
  
    const submitForm = async (e) => {
        e.preventDefault();
    }
  return (
    <div style={{position:'absolute',  right: '3rem',paddingBottom:'3rem'}}>
                    
    <IconButton
    size="large"
    aria-label="account of current user"
    aria-controls="menu-appbar"
    aria-haspopup="true"
    color="inherit"
    onClick={handleOpen}
    margin='1rem'
    
  
    >
    <AddCircleSharpIcon paddingBottom='3rem' color='success' fontSize='large' />
   </IconButton>
          <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
          <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                  <Box component="form" onSubmit={submitForm} noValidate sx={{ mt: 1 }}>
                      
                  <Card >
          <h2>Creer un utilisateur</h2>
          <CardContent>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      
                      autoComplete="given-name"
                      name="fname"
                      required
                      fullWidth
                      id="fname"
                      variant='standard'
                      label="Fullname"
                      autoFocus
                    />
                  </Grid>
                  <Grid item xl={4} lg={6}  sm={8} sx={12}>
                    <TextField
                      required
                      fullWidth
                      id="lname"
                      label="Last Name"
                      name="lname"
                      variant='standard'
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xl={4} lg={6}  sm={8} sx={12}>
                    <TextField
                      required
                      fullWidth
                      id="Uname"
                      label="User Name"
                      name="Uname"
                      variant='standard'
                      autoComplete="family-name"
                    />
                  </Grid>
                  <Grid item xl={4} lg={6}  sm={8} sx={12}>
                    <TextField
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      variant='standard'
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xl={4} lg={6}  sm={8} sx={12}>
                    <TextField
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      variant='standard'
                      autoComplete="new-password"
                    />
                  </Grid>
                  <Grid item xl={4} lg={6}  sm={8} sx={12}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          label="Age"
                          variant='standard'
                        >
                          <MenuItem value={10}>moto</MenuItem>
                          <MenuItem value={20}>ordi</MenuItem>
                          <MenuItem value={30}>kiraro</MenuItem>
                        </Select>
                      </FormControl>                      
                  </Grid>
                <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                      <Stack direction="row" alignItems="center" >
                        <label htmlFor="icon-button-file">
                          <Input accept="image/*" id="icon-button-file" type="file" />
                          <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                          </IconButton>
                        </label>
                      </Stack>
                    </Grid>
              
                </Grid>
               
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  S'inscrire
                </Button>
              </Box>
          </CardContent>
      </Card>
      </Box>
</Typography>
</Box>
</Modal>
</div>
  )
}
