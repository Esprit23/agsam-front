

import React, { useState } from 'react'
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { Button, CardContent,Grid} from "@mui/material";
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import { styled} from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { articlrows } from '../../../dataUser';
import {Link} from "react-router-dom";

const Input = styled('input')({
  display: 'none',   
});
export default function TypeArticle() {
  const[Code, setCode]= useState('');
  const[Type ,setType]=useState('');
  const[Libelle, setLibelle]=useState('');
  const [Caracteristique, setCaracteristique]=useState('');
  const[Description, setDescription]=useState('')

  const [data,setData]=useState(articlrows);
  const handleDelete=(id)=>{
      setData(data.filter((item)=> item.id!==id))
  }
  const columns = [
     
      { field: 'id', headerName: 'ID', width: 40 },
      {
        field: 'code',
        headerName: 'Code',
        width: 150,
    
      },
      {
        field: 'libelle',
        headerName: 'Libelle',
        width: 150,
        editable: true,
      },
      {
        field: 'description',
        headerName: 'Description',
        width: 110,
        editable: true,
      },
   
      {
        field: 'caracteristique',
        headerName: 'Caracteristique',
        sortable: false,
        width: 160,
      },
      {
        field: 'typeId',
        headerName: 'TypeId',
        sortable: false,
        width: 160,
      },
    
      {
          field: 'action',
          headerName: 'Action',
          width: 160,
          renderCell:(params)=>{
            return(
              <div className='userListED'>
              <Link to={"/article/"+params.row.id}>
                  <button className="userListEdit">Edit</button>
              </Link>
               <DeleteIcon className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>,
              </div>
            )
          }
        },
    ];
  return (
    <div className='user'>
      <div className="TitleContainer">
        <h1 className="userTitle">Type Article</h1>
      </div>
      <div className="Container">
        <div className="userShow">
            <div className="userShowTop">
              
            
               <div className="userShowTopTitle">
               <span className="userUpdateTitle">Creer Un nouveau Type Article</span>
                </div>
            </div>
            <div className="userShowBotton">
            <CardContent display='flex' >
                              <Grid container  spacing={2} display='flex' flexDirection='column'>
                                  <Grid item  >
                                  <TextField label="code "
                                      onChange={(e)=>setCode(e.target.value)} variant='standard' fullWidth/>
                                      
                                  </Grid>
                                  <Grid item >
                                  <TextField label="libelle"
                                      onChange={(e)=>setLibelle(e.target.value)} variant='standard'fullWidth/>
                                      
                                  </Grid>
                                  <Grid item  >
                                  <TextField label="caracteristiqeu"
                                      onChange={(e)=>setCaracteristique(e.target.value)} variant='standard' fullWidth/>
                                      
                                  </Grid>
                                  <Grid item >
                                  <TextField label="description"
                                      onChange={(e)=>setDescription(e.target.value)} variant='standard' fullWidth/>
                                      
                                  </Grid>
                                  <Grid item >
                                      <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Project</InputLabel>
                                        <Select
                                          labelId="demo-simple-select-label"
                                          id="demo-simple-select"
                                          value={Type}
                                          label="Age"
                                          // onChange={handleChange}
                                          variant='standard'
                                        >
                                          <MenuItem value={'pid'}>p1</MenuItem>
                                          <MenuItem value={'pid'}>p2</MenuItem>
                                          <MenuItem value={'pid'}>p2</MenuItem>
                                        </Select>
                                      </FormControl>                      
                                  </Grid>

                                

                                   
                              </Grid>
                              
            </CardContent>
              
      
                <div className="usershowInfo">
                  <Button type="submit"
                  style={{backgroundColor:'teal'}}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}>Creer</Button>
                   
                </div>
                
             </div>
        </div>
        <div className="userUpdate">
            <span className="userUpdateTitle">Modifier</span>
   
            <div className='userStyle'>
              <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                disableSelectionOnClick
                checkboxSelection        
                />
            </div>
        </div>
      </div>
    </div>
  )
}
