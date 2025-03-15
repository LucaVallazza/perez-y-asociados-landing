import { Box, Typography, CardContent, CardMedia } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { StyledCard } from './common/StyledCard';
import SimpleCarousel from './common/CardCarousel';
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

  // Create company image cards
  const companyImageCards = companyImages.map((image, index) => (
    <StyledCard key={index} sx={{ height: '100%' }}>
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
  ));

  // Create testimonial cards
  const testimonialCards = testimonials.map((testimonial, index) => (
    <StyledCard key={index} elevation={3} sx={{ height: '100%' }}>
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
  ));

  return (
    <Box>
      <Typography variant="h2" gutterBottom align="center">
        Sobre Nosotros
      </Typography>
      <Typography variant="body1" paragraph>
        El Estudio Jurídico Pérez & Asociados fue fundado por el Dr. Juan Pérez en 2010,
        con el objetivo de ofrecer asesoramiento legal integral a individuos y empresas.
      </Typography>

      {/* Company Images Section with Simple Carousel */}
      <Box sx={{ my: 6 }}>
        <SimpleCarousel 
          slidesToShow={{ xs: 1, sm: 2, md: 3, lg: 3 }}
        >
          {companyImageCards}
        </SimpleCarousel>
      </Box>

      {/* Testimonials Section with Simple Carousel */}
      <Typography variant="h3" gutterBottom align="center" sx={{ mt: 8, mb: 4, fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' } }}>
        Lo que dicen nuestros clientes
      </Typography>
      
      <SimpleCarousel 
        slidesToShow={{ xs: 1, sm: 1, md: 2, lg: 3 }}
        autoplay={true}
      >
        {testimonialCards}
      </SimpleCarousel>
    </Box>
  );
};

export default About;