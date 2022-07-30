import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import ListSubheader from '@mui/material/ListSubheader';



export default function ProfilUser() {
    const rows = [
        { id: 1, col0:1,col3:'Admin',col1: 'esprit', col2: 'mui@hgh.com' },
        { id: 2,col0:2,col3:'Admin', col1: 'hasina', col2: 'mui@hgh.com' },
        { id: 3,col0:3,col3:'Admin', col1: 'MUI', col2: 'mui@hgh.com' },
      ];
      
      const columns = [
        { field: 'col0', headerName: 'Id', width: 150 },
        { field: 'col1', headerName: 'Nom', width: 150 },
        { field: 'col2', headerName: 'Email', width: 150 },
        { field: 'col3', headerName: 'Role', width: 150 },
      ];
   
  return (
    
      <Grid sx={{ flexGrow: 1 }} container spacing={4}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing="8">
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Paper
                sx={{
                  height: 140,
                  width: 100,
                  backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Paper sx={{ p: 2 }}>
          <Grid container>
          <ListSubheader component="div">Liste de utilisateur</ListSubheader>
            <Grid item xs={12}>
            <div style={{ height: 300, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} />
            </div>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}



 



  