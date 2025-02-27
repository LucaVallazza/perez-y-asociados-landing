import { Box, Typography, Grid, CardContent, CardMedia } from '@mui/material';
// Removed unused Avatar import
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { StyledCard } from './common/StyledCard';
import company1 from '../assets/company-1.jpg';
import company2 from '../assets/company-2.jpg';
import company3 from '../assets/company-3.jpg';

const companyImages = [
  {
    src: company1,
    alt: "Oficinas modernas y profesionales con ambiente acogedor",
    caption: "Oficinas Profesionales"
  },
  {
    src: company2,
    alt: "Equipo de abogados especialistas en reunión",
    caption: "Equipo de Excelencia"
  },
  {
    src: company3,
    alt: "Profesionales brindando asesoría personalizada",
    caption: "Soluciones Efectivas"
  }
];

const About = () => {
  const testimonials = [
    {
      text: "Gracias al Dr. Pérez pude resolver un problema legal que llevaba años sin solución.",
      author: "Carlos G."
    },
    {
      text: "Un servicio excelente, siempre atento a cada detalle.",
      author: "María L."
    },
    {
      text: "Lo recomiendo 100%, me ayudó a ganar un caso laboral que parecía imposible.",
      author: "Fernando R."
    }
  ];

  return (
    <Box>
      <Typography variant="h2" gutterBottom align="center">
        Sobre Nosotros
      </Typography>
      <Typography variant="body1" paragraph>
        El Estudio Jurídico Pérez & Asociados fue fundado por el Dr. Juan Pérez en 2010,
        con el objetivo de ofrecer asesoramiento legal integral a individuos y empresas.
      </Typography>

      {/* Company Images Section */}
      <Grid container spacing={4} sx={{ my: 6 }}>
        {companyImages.map((image, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StyledCard sx={{ transform: 'none !important' }}> {/* Prevent hover effects */}
              <Box sx={{ 
                position: 'relative',
                paddingTop: '56.25%', // 16:9 aspect ratio
                width: '100%',
                height: 0
              }}>
                <CardMedia
                  component="img"
                  image={image.src}
                  alt={image.alt}
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
              <CardContent>
                <Typography 
                  variant="h6" 
                  align="center"
                  sx={{ 
                    fontWeight: 600,
                    color: 'primary.main'
                  }}
                >
                  {image.caption}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {/* Testimonials Section */}
      <Typography variant="h3" gutterBottom align="center" sx={{ mt: 8, mb: 4 }}>
        Lo que dicen nuestros clientes
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StyledCard elevation={3}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <FormatQuoteIcon color="primary" fontSize="large" sx={{ mb: 2 }} />
                <Typography variant="body1" paragraph sx={{ flex: 1 }}>
                  {testimonial.text}
                </Typography>
                <Typography variant="subtitle2" color="textSecondary">
                  - {testimonial.author}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default About;