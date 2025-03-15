import { Box, Typography, CardContent, Button } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SecurityIcon from '@mui/icons-material/Security';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import { StyledCard } from './common/StyledCard';
import SimpleCarousel from './common/CardCarousel';

const PHONE_NUMBER = "541141406819"; // Formato: código de país (54) + número sin 0 ni 15

const services = [
  {
    title: "Derecho Penal",
    description: "Defensa en juicios penales, asesoramiento en delitos económicos y recursos.",
    icon: <GavelIcon fontSize="large" />,
    details: [
      "Defensa en causas penales",
      "Delitos económicos y tributarios",
      "Recursos de apelación",
      "Asesoramiento preventivo"
    ],
    whatsappMessage: "Hola! Me gustaría consultar sobre sus servicios de Derecho Penal."
  },
  {
    title: "Derecho Civil",
    description: "Contratos, obligaciones y reclamos por daños y perjuicios.",
    icon: <BusinessIcon fontSize="large" />,
    details: [
      "Contratos civiles y comerciales",
      "Daños y perjuicios",
      "Sucesiones y herencias",
      "Divorcios y familia"
    ],
    whatsappMessage: "Hola! Me interesa hacer una consulta sobre Derecho Civil."
  },
  {
    title: "Derecho Laboral",
    description: "Despidos, indemnizaciones y conflictos laborales.",
    icon: <GroupIcon fontSize="large" />,
    details: [
      "Despidos injustificados",
      "Acoso laboral",
      "Accidentes de trabajo",
      "Negociaciones sindicales"
    ],
    whatsappMessage: "Hola! Quisiera información sobre sus servicios en Derecho Laboral."
  },
  {
    title: "Derecho Comercial",
    description: "Asesoramiento integral para empresas y comercios.",
    icon: <CorporateFareIcon fontSize="large" />,
    details: [
      "Constitución de sociedades",
      "Contratos comerciales",
      "Quiebras y concursos",
      "Propiedad intelectual"
    ],
    whatsappMessage: "Hola! Me interesa conocer más sobre sus servicios de Derecho Comercial."
  },
  {
    title: "Derecho Bancario",
    description: "Representación en asuntos financieros y bancarios.",
    icon: <AccountBalanceIcon fontSize="large" />,
    details: [
      "Préstamos y garantías",
      "Ejecuciones hipotecarias",
      "Derecho del consumidor",
      "Reclamos bancarios"
    ],
    whatsappMessage: "Hola! Necesito asesoramiento en temas de Derecho Bancario."
  },
  {
    title: "Compliance",
    description: "Programas de cumplimiento normativo empresarial.",
    icon: <SecurityIcon fontSize="large" />,
    details: [
      "Programas anticorrupción",
      "Normativas GDPR",
      "Prevención de lavado",
      "Auditorías legales"
    ],
    whatsappMessage: "Hola! Me gustaría recibir información sobre sus servicios de Compliance."
  }
];

const Services = () => {
  const handleWhatsAppClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  // Create service cards
  const serviceCards = services.map((service, index) => (
    <StyledCard key={index} elevation={3} sx={{ height: '100%' }}>
      <CardContent sx={{ 
        height: '100%', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        p: 3 
      }}>
        <Box sx={{ 
          mb: 2,
          color: 'primary.main',
          transform: 'scale(1.2)'
        }}>
          {service.icon}
        </Box>
        <Typography variant="h5" gutterBottom align="center">
          {service.title}
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 2 }}>
          {service.description}
        </Typography>
        <Box sx={{ 
          width: '100%',
          mt: 2,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}>
          <ul style={{ 
            listStyle: 'none',
            padding: 0,
            margin: '0 0 20px 0'
          }}>
            {service.details.map((detail, idx) => (
              <li key={idx} style={{ 
                marginBottom: '8px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <Box 
                  component="span" 
                  sx={{ 
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'secondary.main'
                  }} 
                />
                {detail}
              </li>
            ))}
          </ul>
          <Button 
            variant="outlined" 
            color="primary"
            fullWidth
            onClick={() => handleWhatsAppClick(service.whatsappMessage!)}
          >
            Consultar
          </Button>
        </Box>
      </CardContent>
    </StyledCard>
  ));

  return (
    <Box>
      <Typography variant="h2" gutterBottom align="center">
        Nuestros Servicios
      </Typography>
      <Typography variant="subtitle1" align="center" sx={{ mb: 6 }}>
        Brindamos asesoramiento legal integral en diversas áreas del derecho
      </Typography>
      
      <SimpleCarousel 
        slidesToShow={{ xs: 1, sm: 2, md: 3, lg: 3 }}
      >
        {serviceCards}
      </SimpleCarousel>
    </Box>
  );
};

export default Services;