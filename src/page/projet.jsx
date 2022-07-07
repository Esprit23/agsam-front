import * as React from 'react';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

export default function  Projet() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    const containerStyle={bgcolor:'secondary.main'}
  return (
    <React.Fragment>
    <CssBaseline />
    <Container component="main"  style={containerStyle} sx={{ display:"flex"}}  maxWidth="100%">  
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={12} sm={4} md={4} key={index}>
                <Item>
                    <Grid item>
         
                    </Grid>
                    <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                        <Typography gutterBottom variant="subtitle1" component="div">
                            Code:f2154
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            Libelle:honda
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            ID: 10
                        </Typography>
                        </Grid>
                        <Grid item>
                        <Typography sx={{ cursor: 'pointer' }} variant="body2">
                            Descripton: Moto 125cc 
                        </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle1" component="div">
                        
                        </Typography>
                    </Grid>
                    </Grid>
                </Item>
            </Grid>
            ))}
        </Grid>
        </Box>
    </Container>
  </React.Fragment>
   
  );
}