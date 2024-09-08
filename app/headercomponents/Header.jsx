import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Header = () => {
  return (
    <Box
    sx={{
        height: '100vh',
      backgroundColor: 'rgba(255, 255, 255, 0.5)', // Fondo blanco semi-transparente
      backdropFilter: 'blur(10px)', // Añade un efecto de desenfoque
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Sombra suave para elegancia
      padding: '16px 32px', // Espaciado interno elegante
      position: 'sticky', // Se mantiene en la parte superior al hacer scroll
      top: 0,
      zIndex: 1100, // Mantener el header sobre otros elementos
    }}
  >
    <Typography variant="h6" component="h1">
      Minimalist Header
    </Typography>
  </Box>
  )
}

export default Header
