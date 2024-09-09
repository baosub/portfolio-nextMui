// Importaciones necesarias
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

// Definimos la estructura del proyecto en TypeScript
interface Project {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

// Datos de ejemplo de los proyectos
const projects: Project[] = [
  {
    title: 'Mexican Population',
    description: 'This app shows fetched data from the official Government API (INEGI), the charts are made with the library recharts, and dark mode was applied.',
    imageUrl: '/mxpop.png', // Ruta de la imagen
    url: 'https://cerulean-cascaron-35df7e.netlify.app/',
  },
  {
    title: 'MUI components',
    description: 'This is a collection of Material UI componens, using client side rendering and routes with react router dom',
    imageUrl: '/muicomps.png', // Ruta de la imagen
    url: 'https://spiffy-moonbeam-602c69.netlify.app/',
  },
  {
    title: 'Gradients Generator',
    description: 'This app generates gradients ready to be used in React.',
    imageUrl: '/gradients.png', // Ruta de la imagen
    url: 'https://warm-smakager-5e994b.netlify.app/',
  },
  {
    title: 'Small business site',
    description: 'This is a design of the website of a small business',
    imageUrl: '/alumi.png', // Ruta de la imagen
    url: 'https://astounding-profiterole-356963.netlify.app/',
  },

  {
    title: 'Portfolio',
    description: 'This is a template of portfolio that uses github API, dev.to API, add google analytics and adds a lot of styles and themes',
    imageUrl: '/portfolio.png', // Ruta de la imagen
    url: 'https://baosub.github.io/',
  },
  
];





const Bprojects = () => {
  return (

    <>
    <Typography mb={10} mt={20} gutterBottom textAlign='center' variant='h4'>PROJECTS</Typography>


    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 5, justifyContent: 'center'}}>
      {projects.map((project, index) => (
        <Link href={project.url} key={index} passHref legacyBehavior>
          <Card
            sx={{
              maxWidth: 345,
              textDecoration: 'none', // Para quitar subrayado
              '&:hover': {
                transform: 'scale(1.05)', // Añadir efecto hover
                transition: 'transform 0.3s ease-in-out',
              },
            
            }}
            component="a" // Hacer la tarjeta un link completo
            target="_blank" rel="noopener noreferrer"
          >
            <CardMedia
              component="img"
              height="300"
            
              image={project.imageUrl} // Imagen del proyecto
              alt={project.title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
                {project.title}
              </Typography>
              <Typography variant="body2" color="gray">
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Link>
      ))}
    </Box>



   

    
    </>
   
  )
}

export default Bprojects
