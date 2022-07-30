import React from 'react'
import "./user.css"
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EmailIcon from '@mui/icons-material/Email';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PublishIcon from '@mui/icons-material/Publish';
import CreatUser from './CreatUser';

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

export default function User() {
  return (
    <div className='user'>
      <div className="TitleContainer">
        <h1 className="userTitle">Modifier Utilisateur</h1>
        <CreatUser className="userAddButton"/>
      </div>
      <div className="Container">
        <div className="userShow">
            <div className="userShowTop">
                <img className='userShowimg'
                src="https://th.bing.com/th/id/R.ed47fbc01a3e897b6ddbd6618aba7f9c?rik=pEDTuTz1mGsFkw&riu=http%3a%2f%2fwww.imagespourtoi.com%2flesimages%2ftiteuf%2fphoto-titeuf-7.jpg&ehk=3j0IDVVofdvvCCDbfHS4E6Zm%2f0ExTehk9TJYWzmOYUs%3d&risl=&pid=ImgRaw&r=0" alt="" />
                <div className="userShowTopTitle">
                    <span className="userShowUsername">Esprit franck</span>
                    <span className="userShowUserType">Admin</span>
                </div>
            </div>
            <div className="userShowBotton">
            <span className="userShowTitle">Detail</span>
                <div className="usershowInfo">
                    <PermIdentityIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">maska23</span>
                </div>
                <div className="usershowInfo">
                    <PhoneAndroidIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">0345366872</span>
                </div>
                <div className="usershowInfo">
                    <EmailIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">espritf@gmail</span>
                </div>
                <div className="usershowInfo">
                    <PermIdentityIcon className='userShowIcon'/>
                    <span className="userShowInfoTitle">mananjary</span>
                </div>
                
             </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Modifier</span>
            <form action="" method="get" className='userUpdateForm'>
                
            </form>
            <CardContent>
          <Box component="form" noValidate  sx={{ mt: 2 }} className='userUpdateForm'>
                 <div className="userUpdateLeft">
                    <div className="userUpdateItem">
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
                     </div>
                  
                     <div className="userUpdateItem">
                        <label htmlFor="">Email</label>
                        <input type="text" 
                            placeholder='esprit@gmail.com'
                            className='userUpdateInpute' />
                    </div>
                     <div className="userUpdateItem">
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
                    </div>
                     <div className="userUpdateItem">
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
                    </div>
                    <div className="userUpdateItem">
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
                    </div>
                   
                </div>
                <div className="userUpdateRight">
                        <div className="userUpdateUploade">
                        <img className='userUpdateimg'
                            src="https://th.bing.com/th/id/R.ed47fbc01a3e897b6ddbd6618aba7f9c?rik=pEDTuTz1mGsFkw&riu=http%3a%2f%2fwww.imagespourtoi.com%2flesimages%2ftiteuf%2fphoto-titeuf-7.jpg&ehk=3j0IDVVofdvvCCDbfHS4E6Zm%2f0ExTehk9TJYWzmOYUs%3d&risl=&pid=ImgRaw&r=0" alt="" />
                        <label htmlFor="file"><PublishIcon/></label>
                        <input type="file" style={{display:"none"}} id="file" />
                        </div>
                        {/* <button className="userUpdateButton">
                            Modifier
                        </button> */}
                        <Button
                            className="userUpdateButton"
                            type="submit"
                            fullWidth
                            variant="contained"
                            >
                            S'inscrire
                        </Button>
                    </div>
        
                 
                 
                 
                 
                  
                 
                    {/* <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                      <Stack direction="row" alignItems="center" >
                        <label htmlFor="icon-button-file">
                          <Input accept="image/*" id="icon-button-file" type="file" />
                          <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                          </IconButton>
                        </label>
                      </Stack>
                    </Grid>                 */}
              </Box>
          </CardContent>
        </div>
      </div>
    </div>
  )
}
