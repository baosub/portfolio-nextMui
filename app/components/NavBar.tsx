// app/components/Navbar.tsx
'use client';

import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeContext } from '../theme-context';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'






const Navbar: React.FC = () => {
  const { toggleTheme, themeMode } = useThemeContext();

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Container maxWidth='xl'>


        <Box sx={{ display: "flex", justifyContent: "end" }} >




          <IconButton color="inherit" onClick={toggleTheme} >
            {themeMode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

        </Box>


      </Container>


      <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>


        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            fontFamily: 'Poppins, sans-serif',

            letterSpacing: '0.05em',

          }}
        >
          Hey, this is
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 900,
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '5rem', // Nombre más grande

            letterSpacing: '0.08em',

          }}
        >
          Baub
        </Typography>



        <Typography
          variant="h6"
          sx={{
            fontWeight: 400,
            fontFamily: 'Playfair Display, sans-serif',

            letterSpacing: '0.06em'


          }}
        >
          Front-End Developer
        </Typography>








      </Box>


    </Box>



  );
};

export default Navbar;
