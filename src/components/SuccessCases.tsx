import { Box, Typography, Grid, CardContent, Chip, Button } from '@mui/material';
import { StyledCard } from './common/StyledCard';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GavelIcon from '@mui/icons-material/Gavel';
import WorkIcon from '@mui/icons-material/Work';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import BusinessIcon from '@mui/icons-material/Business';
import FamilyHomeIcon from '@mui/icons-material/Home';
import SecurityIcon from '@mui/icons-material/Security';

const cases = [
  {
    title: "Defensa en caso de fraude empresarial",
    description: "Representamos a un empresario acusado injustamente de fraude, logrando su absolución y el resarcimiento por daños. El caso involucró una investigación exhaustiva de 2 años.",
    icon: <GavelIcon fontSize="large" />,
    result: "Absolución completa",
    area: "Derecho Penal",
    tiempo: "24 meses",
    compensacion: "$5M+"
  },
  {
    title: "Indemnización récord laboral",
    description: "Conseguimos una compensación histórica para un grupo de trabajadores despedidos injustamente durante la pandemia. Establecimos un precedente importante en materia laboral.",
    icon: <WorkIcon fontSize="large" />,
    result: "Indemnización máxima",
    area: "Derecho Laboral",
    tiempo: "18 meses",
    compensacion: "$12M"
  },
  {
    title: "Recuperación de activos familiares",
    description: "Logramos la devolución de propiedades embargadas indebidamente a una familia. El caso requirió una estrategia legal compleja que involucró múltiples jurisdicciones.",
    icon: <FamilyHomeIcon fontSize="large" />,
    result: "Recuperación total",
    area: "Derecho Civil",
    tiempo: "12 meses",
    compensacion: "$8M"
  },
  {
    title: "Protección de propiedad intelectual",
    description: "Defendimos exitosamente los derechos de autor de una empresa tecnológica contra una infracción internacional. Obtuvimos medidas cautelares en tiempo récord.",
    icon: <SecurityIcon fontSize="large" />,
    result: "Victoria completa",
    area: "Propiedad Intelectual",
    tiempo: "8 meses",
    compensacion: "$3M"
  },
  {
    title: "Reestructuración empresarial",
    description: "Asesoramos en la reestructuración exitosa de una empresa en crisis, preservando más de 200 puestos de trabajo y garantizando la continuidad operativa.",
    icon: <BusinessIcon fontSize="large" />,
    result: "Reestructuración exitosa",
    area: "Derecho Comercial",
    tiempo: "15 meses",
    compensacion: "Preservado"
  },
  {
    title: "Recuperación de inversiones",
    description: "Representamos a un grupo de inversores en un caso de fraude financiero, logrando la recuperación total de los fondos más intereses compensatorios.",
    icon: <AccountBalanceIcon fontSize="large" />,
    result: "Recuperación total",
    area: "Derecho Bancario",
    tiempo: "20 meses",
    compensacion: "$15M"
  }
];

const SuccessCases = () => {
  return (
    <Box>
      <Typography variant="h2" gutterBottom align="center">
        Casos de Éxito
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph sx={{ mb: 6 }}>
        Nuestra trayectoria respaldada por resultados concretos
      </Typography>

      <Grid container spacing={4}>
        {cases.map((case_, index) => (
          <Grid item xs={12} md={4} key={index}>
            <StyledCard elevation={3}>
              <CardContent sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column', 
                p: 3 
              }}>
                <Box sx={{ 
                  mb: 2,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1
                }}>
                  {case_.icon}
                  <Chip 
                    label={case_.area} 
                    size="small" 
                    color="primary" 
                    variant="outlined"
                  />
                </Box>
                <Typography variant="h5" gutterBottom>
                  {case_.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, flex: 1 }}>
                  {case_.description}
                </Typography>
                <Box sx={{ 
                  display: 'flex', 
                  gap: 1,
                  flexWrap: 'wrap',
                  mb: 2
                }}>
                  <Chip 
                    label={`Duración: ${case_.tiempo}`} 
                    size="small" 
                    variant="outlined"
                  />
                  <Chip 
                    label={`Compensación: ${case_.compensacion}`} 
                    size="small" 
                    variant="outlined"
                  />
                </Box>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  gap: 1,
                  color: 'success.main',
                  mb: 2
                }}>
                  <CheckCircleIcon />
                  <Typography variant="subtitle1" color="success.main">
                    {case_.result}
                  </Typography>
                </Box>
                {/* <Button 
                  variant="outlined" 
                  color="primary" 
                  fullWidth
                  size="small"
                >
                  Ver más detalles
                </Button> */}
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SuccessCases;