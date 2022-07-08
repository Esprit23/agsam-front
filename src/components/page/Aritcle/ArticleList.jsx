import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { articlrows } from '../../../dataUser';
import {Link} from "react-router-dom";


export default function ArticleList() {
    const [data,setData]=useState(articlrows);
    const handleDelete=(id)=>{
        setData(data.filter((item)=> item.id!==id))
    }
    const columns = [
       
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'code',
          headerName: 'Code',
          width: 150,
          renderCell:(params)=>{
            return(
                <div className="articletList">
                    <img className="articlePhoto"
                    src={params.row.photo} />
                        {params.row.code}
                </div>
            )
          }
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
    <div className='userStyle'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        disableSelectionOnClick
        checkboxSelection        
        />
    </div>
  )
}