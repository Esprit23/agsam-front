import React from "react";
import Paper from '@mui/material/Paper';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import ListSubheader from '@mui/material/ListSubheader';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import AddCircleSharpIcon from '@mui/icons-material/AddCircleSharp';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import QrCodeIcon from '@mui/icons-material/QrCode';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import QRCode from 'qrcode';
import Button from '@mui/material/Button';
import { CardContent,Card, Grid} from "@mui/material";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { styled} from '@mui/material/styles';
import Header from '../components/Navbar/Header';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    minwidth:"300px",
    bgcolor: 'background.paper',
    border: '1px solid #0efad8',
    boxShadow: 24,
    borderRadius:'20px',
    p: 4,
  };
  const Input = styled('input')({
    display: 'none',   
  });

const ListeArticle=()=>{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    


    const submitForm = async (e) => {
        e.preventDefault();
       
    }
    const[Code, setCode]= useState('');
    const[Type ,setType]=useState('');
    const[Libelle, setLibelle]=useState('');
    const [Caracteristique, setCaracteristique]=useState('');
    const[Description, setDescription]=useState('')
    const[imageUrl, setImageUrl]=useState('')
   

    const handleChange = (e) => {
      setType(e.target.value);
    };
    const gnerateQrcode= async ()=>{
   
        try{
          const reponse= await QRCode.toDataURL(
            `code :${Code}
            \nlibelle:${Libelle}
            \ndescription:${Description}
            \ncaracteristiqeu:${Caracteristique}
             \n type:${Type}`)
            setImageUrl(reponse)
        }catch(error){
            console.log(error)
        }
    }
    const rows = [
        { id: 1, col0:1,col1: 'k5456', col2: 'pc (azus)', col3:'ram4g ,double graph',col4:'couleur noir' , col5:'ordinateur'},
        { id: 1, col0:1,col1: 'k5456', col2: 'pc (azus)', col3:'ram4g ,double graph',col4:'couleur noir' , col5:'ordinateur'},
        { id: 1, col0:1,col1: 'k5456', col2: 'pc (azus)', col3:'ram4g ,double graph',col4:'couleur noir' , col5:'ordinateur'},
        { id: 1, col0:1,col1: 'k5456', col2: 'pc (azus)', col3:'ram4g ,double graph',col4:'couleur noir' , col5:'ordinateur'},
        
      ];

      const columns= [
        { field: 'col0', headerName: 'Id', width: 150 },
        { field: 'col1', headerName: 'Code', width: 150 },
        { field: 'col2', headerName: 'Libelle', width: 150 },
        { field: 'col3', headerName: 'description', width: 150 },
        { field: 'col4', headerName: 'Caracteristique', width: 150 },
        { field: 'col5', headerName: 'type Ariticle', width: 150 },
        { field: 'col6', headerName: 'Qrcode', width: 150 },
      ];
   
  return (
    
      <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      <Grid item xs={12}>
        {/* <Header/> */}
        <Paper sx={{ p: 2 }}>
          <Grid container>
          <ListSubheader component="div">Liste de Article</ListSubheader>
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
                          <h2>Ajout Article</h2>
                          <CardContent>
                              <Grid container spacing={2}>
                                  <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                                  <TextField label="code "
                                      onChange={(e)=>setCode(e.target.value)} variant='standard' fullWidth/>
                                      
                                  </Grid>
                                  <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                                  <TextField label="libelle"
                                      onChange={(e)=>setLibelle(e.target.value)} variant='standard'fullWidth/>
                                      
                                  </Grid>
                                  <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                                  <TextField label="caracteristiqeu"
                                      onChange={(e)=>setCaracteristique(e.target.value)} variant='standard' fullWidth/>
                                      
                                  </Grid>
                                  <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                                  <TextField label="description"
                                      onChange={(e)=>setDescription(e.target.value)} variant='standard' fullWidth/>
                                      
                                  </Grid>
                                  <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                                      <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                          labelId="demo-simple-select-label"
                                          id="demo-simple-select"
                                          value={Type}
                                          label="Age"
                                          onChange={handleChange}
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

                                    <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                                        
                                      <Button variant="contained" onClick={()=>gnerateQrcode()} >QRCode<QrCodeIcon/></Button>
                                      <br/>
                                      <br/>
                                    </Grid>
                                  <Grid item xl={4} lg={4} md={6} sm={12} sx={12}>
                                  {imageUrl ?(<a href={imageUrl} download><img src={imageUrl} alt='img/QRCode'></img></a>):null}
                                  </Grid>
                              </Grid>
                          </CardContent>
                      </Card>
                      <Button type="submit"fullWidth variant="contained"sx={{ mt: 3, mb: 2 }}>Upload </Button>
                      </Box>
                </Typography>
            </Box>
            </Modal>
          </div>
          
            <Grid item xs={12}>
            <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
            </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  )
}
export default ListeArticle;