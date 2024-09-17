// Importaciones necesarias
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';
import Link from 'next/link';

import Container from '@mui/material/Container'

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
    title: 'AI-Powered Nutrition Assistant Chatbot',
    description: `This project is an AI-powered Nutrition Assistant Chatbot that leverages OpenAI’s GPT-4 model to provide personalized
     nutritional guidance. It calculates Body Mass Index (BMI), daily nutritional requirements, and macronutrient distribution to help users 
     efficiently organize their diets and achieve their health goals. The chatbot integrates artificial intelligence to perform accurate 
     calculations and offer tailored advice. Developed with Next.js 14 (App Router), React, and TypeScript, it features Material UI for styling 
     and includes a dark mode option for enhanced user experience.`,
    imageUrl: '/nutri.png', // Ruta de la imagen
    url: 'https://nutri-app-five.vercel.app/',
  },
  {
    title: 'Population Data Visualization Dashboard',
    description: `This project is a data visualization dashboard that fetches population data from the official INEGI API, a government
     agency responsible for national statistics and geography in Mexico. It features interactive charts, including visualizations of population
      by state, gender distribution, and the relationship between population and housing by state. Built using React, JavaScript, and Material UI, 
      the app utilizes Axios for data fetching and Recharts for displaying the graphs. It also includes a dark mode option for user preference.`,
    imageUrl: '/mxpop.png', // Ruta de la imagen
    url: 'https://cerulean-cascaron-35df7e.netlify.app/',
  },


  {
    title: 'Single Page Application with Client-Side Rendering',
    description: `This project is a Single Page Application (SPA) built with React and JavaScript, utilizing client-side rendering. 
    It features routing with React Router DOM, including active links to display the current route, and incorporates examples of managing local 
    state with the useState hook. The app also follows responsive web design principles for optimal display across devices. Styling is implemented 
    using Material UI.`,
    imageUrl: '/muicomps.png', // Ruta de la imagen
    url: 'https://spiffy-moonbeam-602c69.netlify.app/',
  },
  {
    title: 'CSS Gradient Generator',
    description: `This project is a tool for generating CSS gradients through an intuitive interface. Users can create four types of gradients: 
    two-color linear gradients with customizable angle, three-color linear gradients, two-color radial gradients, and three-color radial gradients.
     The application leverages input fields for color selection and angle adjustment, dynamically updating the gradient preview using local state 
     management with the useState hook. Built with React, JavaScript, and styled using Material UI, it allows users to generate ready-to-use 
     gradient code for their designs.`,
    imageUrl: '/gradients.png', // Ruta de la imagen
    url: 'https://warm-smakager-5e994b.netlify.app/',
  },
  {
    title: 'Small Business Website Layout',
    description: `This project is a layout design for a small business website, showcasing its products and services. Built with React, 
    JavaScript, and styled using Material UI, the focus was on creating a clean and organized structure, highlighting key offerings 
    in a user-friendly manner. As one of my first web development projects, it demonstrates fundamental skills in responsive design and 
    component-based architecture.`,
    imageUrl: '/alumi.png', // Ruta de la imagen
    url: 'https://astounding-profiterole-356963.netlify.app/',
  },

  {
    title: 'Forked Portfolio Template with API Integrations',
    description: `This project is a forked portfolio template that integrates several APIs, including GitHub, Dev.to, and Medium, with links 
    to personal social media profiles such as LinkedIn, Twitter, and Instagram. It features over 20 themes and is fully responsive. I focused on 
    forking the repository, customizing the content with my personal information, and managing the project using Git. Additionally, I integrated 
    Google Analytics for traffic monitoring and deployed the site on GitHub Pages. This project highlights my skills in repository management, 
    customization, and deployment.`,
    imageUrl: '/portfolio.png', // Ruta de la imagen
    url: 'https://baosub.github.io/',
  },

];





const Bprojects = () => {
  return (

    <>
      <Typography mb={10} mt={20} gutterBottom textAlign='center' variant='h4'>PROJECTS</Typography>


      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 7, justifyContent: 'center' }}>
        {projects.map((project, index) => (
          <Link href={project.url} key={index} passHref legacyBehavior>
            <Card
              sx={{
                maxWidth: { xs: '245px', md: '345px' },
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
