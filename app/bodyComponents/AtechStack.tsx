import React from 'react'
import Box from '@mui/material/Box'

import Typography from '@mui/material/Typography'


const AtechStack = () => {
  return (

    <>

    <Typography mb={10} gutterBottom textAlign='center' variant='h4'>TECH STACK</Typography>

<Box
    sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 1, // Espacio entre los textos
      padding: 2,
      
    }}
  >
    {['GIT', 'GITHUB', 'HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'MATERIAL UI', 'NEXTJS'].map((tech) => (
      <Typography
      
        key={tech}
        variant="body2" // Tamaño del texto
        sx={{
           // Negrita
         
          letterSpacing: 1, // Espacio entre letras para un toque minimalista
          textAlign: 'center',
          padding: 1,
         
          borderRadius: '4px', // Bordes ligeramente redondeados
        }}
      >
        {tech}
      </Typography>
    ))}
  </Box>
    
    </>
    
  )
}

export default AtechStack
