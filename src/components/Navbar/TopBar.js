import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';


  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
  }));
function TopBar({funcSetIsMobile}){
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));
      
      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));
    return(
        
            
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="fixed" elevation={5}>
                <Container maxWidth="xl" display='flex' ustifyContent='space-between' style={{sm:{marginLeft:"200px"} , backgroundColor:'#363949' }}>
                <Toolbar  display='flex'  >
                    <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                            onClick={funcSetIsMobile} 
                            >
                            <MenuIcon   sx={{
                                        mr: 2,
                                        display: {xs: 'block', md: 'none', sm: 'flex'  },
                                        fontFamily: 'monospace',
                                        color: 'inherit',
                                        fontSize:"40px"
                                        }} />
                          
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex', sm: 'block'  },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                        
                        </Typography>
                        <Typography
                            variant="h4"
                            noWrap
                            component="a"
                    
                            sx={{
                            mr: 2,
                            display: {xs: 'none', md: 'flex', sm: 'block'  },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            AGSAM
                        </Typography>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    
                </Toolbar>
                </Container>
                
            </AppBar>
            </Box>
    )
}
export default TopBar