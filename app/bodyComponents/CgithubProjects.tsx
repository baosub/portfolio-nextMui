import React from 'react'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent } from '@mui/material';
import IconButton from '@mui/material/IconButton'
import StarIcon from '@mui/icons-material/Star';



interface GitHubRepo {
    name: string;
    description: string;
    html_url: string;
    stargazers_count: number; // Número de estrellas
}

const CgithubProjects = () => {

    const [repos, setRepos] = useState<GitHubRepo[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await axios.get('https://api.github.com/users/baosub/repos');
                const filteredRepos = response.data
                    .filter((repo: GitHubRepo) => repo.stargazers_count > 0) // Filtra los que tienen al menos 1 estrella
                    .slice(0, 10); // Limita a un máximo de 10 proyectos
                setRepos(filteredRepos);
            } catch (error) {
                setError('Error fetching repos');
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) return <Typography>Loading...</Typography>;
    if (error) return <Typography>{error}</Typography>;




    return (
        <>
            <Typography mb={10} mt={20} gutterBottom textAlign='center' variant='h4'>GITHUB PROJECTS</Typography>

            <Box
      sx={{
        overflowX: 'hidden', // Ocultar el overflow fuera de la pantalla
        padding: '16px',
        position: 'relative',
      }}
    >
        <Box
        sx={{
          display: 'flex',
          gap: '16px', // Espaciado entre las cards
          overflowX: 'auto', // Permitir el scroll horizontal
          scrollbarWidth: 'none', // Ocultar barra de scroll en Firefox
          '&::-webkit-scrollbar': {
            display: 'none', // Ocultar barra de scroll en Webkit
          },
        }}
      >

{repos.map((repo) => (
                    <Card
                        key={repo.name}
                        sx={{
                            margin: '5px',                            flexShrink: 0, // Evita que las tarjetas se reduzcan al tamaño del contenedor
                            flexGrow: 0,
                            borderRadius: '12px', // Bordes redondeados para un diseño más limpio
                            minWidth: { xs: '250px', sm: '300px', md: '350px' }, // Ancho mínimo adaptado a pantallas pequeñas
                            maxWidth: '400px', // Ancho máximo para pantallas más grandes
                          }}
                    >
                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                display: 'block',
                                width: '100%',
                                height: '100%',
                            }}
                        >
                            <CardContent>
                                <Typography variant="h6" component="div" fontWeight="bold">
                                    {repo.name}
                                </Typography>
                                <Typography variant="body2" color="gray">
                                    {repo.description || 'No description'}
                                </Typography>

                            </CardContent>

                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', px: 2, pb: 2 }}>
                                {/* Colocar otros elementos en esta área si los tienes */}

                                {/* Estrella en la esquina inferior derecha */}
                                <IconButton aria-label="star" disabled={!repo.stargazers_count}>
                                    <StarIcon sx={{ color: repo.stargazers_count ? 'gold' : 'grey' }} />
                                    {repo.stargazers_count > 0 && (
                                        <Typography variant="body2" component="span" sx={{ ml: 1 }}>
                                            {repo.stargazers_count}
                                        </Typography>
                                    )}
                                </IconButton>
                            </Box>



                        </a>
                    </Card>
                ))}




      </Box>






    </Box>







            

        </>
    )
}

export default CgithubProjects
