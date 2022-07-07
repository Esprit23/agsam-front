import React, { useState } from 'react'
import "./userList.css"
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { userrows } from '../../../dataUser';
import {Link} from "react-router-dom";
import Paper from '@mui/material/Paper';
import ListSubheader from '@mui/material/ListSubheader';
import {  Grid} from "@mui/material";
import CreatUser from '../user/CreatUser';



export default function UserList() {
 
    const [data,setData]=useState(userrows);
    const handleDelete=(id)=>{
        setData(data.filter((item)=> item.id!==id))
    }
    const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'adresse',
      headerName: 'Adress',
      type: 'number',
      width: 110,
      editable: true,
    },
 
    {
      field: 'Email',
      headerName: 'Email',
      sortable: false,
      width: 160,
    },
    {
      field: 'profile',
      headerName: 'Profile',
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
            <Link to={"/user/"+params.row.id}>
                <button className="userListEdit">Edit</button>
            </Link>
             <DeleteIcon className='userListDelete' onClick={()=>handleDelete(params.row.id)}/>,
            </div>
          )
        }
      },
  ];
  

  return (
    <div className='userStyle'>
         
          <Paper sx={{ p: 2 }}>
          <Grid container>
          <ListSubheader component="div">Liste de Article</ListSubheader>
         
            <CreatUser/>
            <Grid item xs={12}>
          
            <div style={{ height: 300, width: '100%' }}>
            <DataGrid
              rows={data}
              columns={columns}
              pageSize={8}
              disableSelectionOnClick
              checkboxSelection
              
            />
            </div>
            </Grid>
          </Grid>
        </Paper>
    </div>
  )
}
