import React from 'react'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Card, CardContent } from '@mui/material';
import Container from '@mui/material/Container'



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

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'center' }}>
                {repos.map((repo) => (
                    <Card
                        key={repo.name}
                        sx={{
                            width: 300, // Ancho fijo para todas las tarjetas
                            height: 200, // Alto fijo para todas las tarjetas
                            textDecoration: 'none',
                            
                            border: '1px solid #333',
                            display: 'flex', // Para alinear el contenido
                            flexDirection: 'column', // El contenido se alinea en columna
                            justifyContent: 'space-between', // Espacio entre el título y la descripción
                            '&:hover': {
                              transform: 'scale(1.05)',
                              transition: 'transform 0.3s ease-in-out',
                            },
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
                                <Typography variant="body2" color="gold">
                                    ⭐ {repo.stargazers_count} Stars
                                </Typography>
                            </CardContent>
                        </a>
                    </Card>
                ))}
            </Box>


        </>
    )
}

export default CgithubProjects
