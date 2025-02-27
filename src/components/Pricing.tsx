import { Box, Typography, Grid, CardHeader, CardContent, Button } from '@mui/material';
import { StyledCard } from './common/StyledCard';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const PHONE_NUMBER = "541141406819";

const pricingPlans = [
  {
    title: 'Consulta Inicial',
    price: 'GRATUITA',
    features: [
      'Evaluación del caso',
      'Asesoramiento inicial',
      'Opciones legales disponibles',
      'Sin compromiso'
    ],
    buttonText: 'Agendar consulta',
    whatsappMessage: "¡Hola! Me gustaría agendar una consulta inicial gratuita.",
    isHighlighted: true
  },
  {
    title: 'Plan Estándar',
    price: 'Honorarios Accesibles',
    features: [
      'Representación legal completa',
      'Seguimiento personalizado',
      'Comunicación constante',
      'Planes de pago flexibles'
    ],
    buttonText: 'Consultar precios',
    whatsappMessage: "¡Hola! Me gustaría conocer más detalles sobre el Plan Estándar y sus precios.",
    isRecommended: true
  },
  {
    title: 'Plan Empresas',
    price: 'Premium',
    features: [
      'Asesoramiento legal integral',
      'Atención prioritaria',
      'Auditorías preventivas',
      'Contratos y documentación'
    ],
    buttonText: 'Solicitar propuesta',
    whatsappMessage: "¡Hola! Me gustaría recibir una propuesta personalizada para el Plan Empresas.",
    isPremium: true
  }
];

const Pricing = () => {
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <Box>
      <Typography variant="h2" align="center" gutterBottom>
        Nuestras Tarifas
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph sx={{ mb: 6 }}>
        Ofrecemos planes flexibles adaptados a sus necesidades
      </Typography>
      
      <Grid container spacing={4}>
        {pricingPlans.map((plan, index) => (
          <Grid 
            item 
            xs={12} 
            md={4} 
            key={index}
            sx={plan.isRecommended ? {
              transform: 'scale(1.05)',
              position: 'relative',
              zIndex: 2,
              '@media (max-width: 960px)': {
                transform: 'scale(1)',
              }
            } : {}}
          >
            <StyledCard 
              elevation={plan.isRecommended ? 12 : plan.isPremium ? 8 : 3}
              sx={{
                ...(plan.isRecommended && {
                  border: (theme) => `2px solid ${theme.palette.secondary.main}`,
                  position: 'relative',
                  overflow: 'visible',
                  '&::before': {
                    content: '"Recomendado"',
                    position: 'absolute',
                    top: '-12px',
                    right: '50%',
                    transform: 'translateX(50%)',
                    backgroundColor: (theme) => theme.palette.secondary.main,
                    color: 'white',
                    padding: '4px 12px',
                    borderRadius: '12px',
                    fontSize: '0.875rem',
                    fontWeight: 'bold',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                    zIndex: 1
                  }
                }),
                ...(plan.isPremium && {
                  background: 'linear-gradient(to bottom right, #fafafa, #f5f5f5)',
                  border: '1px solid rgba(0,0,0,0.1)'
                })
              }}
            >
              <CardHeader
                title={plan.title}
                titleTypographyProps={{ 
                  align: 'center', 
                  variant: 'h5',
                  sx: {
                    fontWeight: plan.isRecommended || plan.isPremium ? 700 : 400,
                    color: plan.isPremium ? 'primary.dark' : 'inherit'
                  }
                }}
                subheader={plan.price}
                subheaderTypographyProps={{ 
                  align: 'center',
                  color: plan.isHighlighted ? 'success.main' : 
                         plan.isRecommended ? 'primary.main' : 'secondary.main', // Changed this line
                  variant: 'h6',
                  sx: { 
                    fontWeight: (plan.isHighlighted || plan.isRecommended) ? 700 : 400, // Updated this line
                    fontSize: plan.isHighlighted ? '1.5rem' : undefined
                  }
                }}
                sx={{ 
                  bgcolor: plan.isRecommended ? 'secondary.light' : 
                          plan.isPremium ? 'grey.100' : 'grey.50',
                  transition: 'background-color 0.3s ease'
                }}
              />
              <CardContent sx={{ 
                flex: 1, 
                display: 'flex', 
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <Box>
                  {plan.features.map((feature, idx) => (
                    <Typography
                      key={idx}
                      component="li"
                      variant="body1"
                      sx={{ 
                        my: 1, 
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        fontWeight: plan.isHighlighted ? 500 : 400,
                        '&::before': {
                          content: '""',
                          width: '6px',
                          height: '6px',
                          backgroundColor: 'secondary.main',
                          borderRadius: '50%'
                        }
                      }}
                    >
                      {feature}
                    </Typography>
                  ))}
                </Box>
                <Button
                  fullWidth
                  variant={plan.isRecommended ? "contained" : "outlined"}
                  color={plan.isHighlighted ? "success" : 
                        plan.isPremium ? "primary" : "secondary"}
                  startIcon={<WhatsAppIcon />}
                  onClick={() => handleWhatsAppClick(plan.whatsappMessage)}
                  sx={{ 
                    mt: 2,
                    fontWeight: (plan.isRecommended || plan.isPremium) ? 700 : 400,
                    boxShadow: plan.isRecommended ? 4 : plan.isPremium ? 2 : 1
                  }}
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Pricing;