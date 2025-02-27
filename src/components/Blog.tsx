import { Box, Typography, Grid, CardContent, CardMedia, CardActions, Button, Snackbar, Alert } from '@mui/material';
import { StyledCard } from './common/StyledCard';
import { useState } from 'react';
import image1 from '../assets/blog-1.jpg';
import image2 from '../assets/blog-2.jpg';
import image3 from '../assets/blog-3.jpg';

const blogPosts = [
  {
    title: 'Cambios en la legislación laboral 2024',
    description: 'Análisis de las nuevas normativas y su impacto en empresas y trabajadores.',
    image: image1,
    date: '15 Feb 2024'
  },
  {
    title: 'Guía de contratos comerciales',
    description: 'Todo lo que necesitas saber antes de firmar un contrato comercial.',
    image: image2,
    date: '10 Feb 2024'
  },
  {
    title: 'Derechos del consumidor',
    description: 'Conoce tus derechos como consumidor y cómo defenderlos.',
    image: image3,
    date: '5 Feb 2024'
  }
];

const Blog = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleMoreArticlesClick = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box>
      <Typography variant="h2" align="center" gutterBottom>
        Blog Legal
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph sx={{ mb: 6 }}>
        Actualidad jurídica y consejos legales
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StyledCard>
              <Box sx={{ 
                position: 'relative',
                paddingTop: '56.25%', // Aspect ratio 16:9
                width: '100%',
                height: 0
              }}>
                <CardMedia
                  component="img"
                  image={post.image}
                  alt={post.title}
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                />
              </Box>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography 
                  variant="caption" 
                  color="text.secondary"
                  sx={{ mb: 1, display: 'block' }}
                >
                  {post.date}
                </Typography>
                <Typography 
                  variant="h6" 
                  gutterBottom
                  sx={{ 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    minHeight: '3.6em'
                  }}
                >
                  {post.title}
                </Typography>
                <Typography 
                  variant="body2" 
                  color="text.secondary"
                  sx={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    minHeight: '4.5em'
                  }}
                >
                  {post.description}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
                <Button size="small" color="primary">
                  Leer más
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
      
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Button 
          variant="outlined" 
          color="primary" 
          size="large"
          onClick={handleMoreArticlesClick}
        >
          Ver más artículos
        </Button>
      </Box>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="info"
          variant="filled"
          sx={{ width: '100%' }}
        >
          Esta es una versión demo. Los artículos adicionales no están disponibles.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Blog;