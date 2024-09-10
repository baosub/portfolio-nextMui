import React from 'react'
import { Box, Typography, Link } from '@mui/material';

const Afooter = () => {
  return (
    <>

      <Box
        component="footer"
        sx={{

          py: 3, // Padding vertical
          textAlign: 'center',
          mt: 4, // Margen superior
        }}
      >
        <Typography mt='50px' variant="body2" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} Baub. All rights reserved.
        </Typography>

        {/* Puedes agregar más enlaces en el futuro */}
        <Typography variant="body2" sx={{ mb: 1 }}>
          {/* Ejemplo de placeholder para redes sociales */}
          Connect with me on{' '}
          {/*<Link href="https://twitter.com/yourprofile" target="_blank" rel="noopener" sx={{ color: 'gray' }}>
          Twitter
        </Link>{' '}
        or{' '}*/ }
          <Link href="https://www.linkedin.com/in/ubaldo-barranco-osorio" target="_blank" rel="noopener" sx={{ color: 'gray' }}>
            LinkedIn
          </Link>
        </Typography>

        {/* Información de contacto, si decides agregarla */}
        <Typography variant="body2">
          Contact: <Link href="mailto:barroso@gmail.com" sx={{ color: 'gray' }}>barroso@gmail.com</Link>
        </Typography>
      </Box>

    </>
  )
}

export default Afooter
