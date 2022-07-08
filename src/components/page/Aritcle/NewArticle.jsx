import React from 'react'
import './newArticle.css'
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import QrCodeIcon from '@mui/icons-material/QrCode';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import { CardContent,Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import QRCode from 'qrcode';
import { useState } from "react";
import { styled} from '@mui/material/styles';
const Input = styled('input')({
    display: 'none',   
  });

export default function NewArticle() {
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
  return (
    <div className='newArticle'>
         <div className="articleTitlecontenair">
            <h1 className="aritcleTitle">
               AJOUTER UN ARTICLE
            </h1>
        </div>
       <form action="" className="articleForm">
            <div className="articleFormLeft">
            <label htmlFor="file">photo</label>
                <input type="file" id="file"/>
                <label htmlFor="code"> Code</label>
                <input type="text" />
                <label htmlFor="">Libelle</label>
                <input type="text" />
                <label htmlFor="">description</label>
                <input type="text" />
                <label htmlFor="">caracteristique</label>
                <input type="text" />
                <label htmlFor="type">Type</label>
                <select name="" id="type">
                    <option value="id">fk-type-id</option>
                    <option value="id1">fk-type-id</option>
                </select>
                <br />
                <button className="articleBtn">Enregistrer</button>
            </div>
            <div className="articleFormRight">
                            <div className="articleUpload">
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
                            </div>
                            <button className="articleBtn">
                                generer un Qrcode
                            </button>
                        </div>
        </form>                   
    
    </div>
  )
}
