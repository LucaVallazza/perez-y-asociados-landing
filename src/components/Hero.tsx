import { Box, Typography, Button, Container, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';
import BalanceIcon from '@mui/icons-material/Balance';

const HeroContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/hero-bg.jpg")',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  color: 'white',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: `linear-gradient(45deg, ${theme.palette.primary.main}80, transparent)`,
    zIndex: 1
  }
}));

const ContentWrapper = styled(motion.div)({
  position: 'relative',
  zIndex: 2
});

const StyledButton = styled(Button)({
  borderRadius: '30px',
  padding: '12px 35px',
  fontSize: '1.1rem',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
  }
});

const Hero = () => {
  const theme = useTheme();

  return (
    <HeroContainer>
      <Container>
        <ContentWrapper
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box maxWidth="800px">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                mb: 4,
                flexDirection: { xs: 'column', sm: 'row' } 
              }}>
                <BalanceIcon sx={{ 
                  fontSize: { xs: '3rem', sm: '4rem' },
                  color: theme.palette.secondary.main,
                }} />
                <Box sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                  <Typography 
                    variant="h4"
                    sx={{
                      fontWeight: 600,
                      letterSpacing: 3,
                      color: theme.palette.secondary.main,
                      lineHeight: 1,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      fontSize: { xs: '1.75rem', sm: '2.125rem' }
                    }}
                  >
                    PÉREZ
                  </Typography>
                  <Typography 
                    variant="subtitle2"
                    sx={{
                      fontWeight: 400,
                      letterSpacing: 3,
                      opacity: 0.9,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                      fontSize: { xs: '0.875rem', sm: '1rem' }
                    }}
                  >
                    & ASOCIADOS
                  </Typography>
                </Box>
              </Box>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <Typography 
                variant="h1" 
                gutterBottom 
                sx={{
                  fontWeight: 700,
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  mb: 3,
                  fontSize: { xs: '2rem', sm: '2.5rem', md: '3.75rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                Defendemos tus derechos con compromiso y experiencia
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Typography 
                variant="h5" 
                paragraph 
                sx={{
                  fontWeight: 400,
                  textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                  mb: 4,
                  lineHeight: 1.6,
                  fontSize: { xs: '1rem', sm: '1.25rem' },
                  textAlign: { xs: 'center', sm: 'left' }
                }}
              >
                Más de 15 años brindando soluciones legales efectivas en derecho 
                penal, civil y laboral. Tu tranquilidad es nuestra prioridad.
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Box sx={{ 
                display: 'flex', 
                gap: 2,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: { xs: 'stretch', sm: 'flex-start' }
              }}>
                <StyledButton 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={() => {window.location.href='/#contact'}}
                  fullWidth={true}
                  sx={{ mb: { xs: 2, sm: 0 } }}
                >
                  Consulta Gratuita
                </StyledButton>
                <StyledButton 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  onClick={() => {window.location.href='/#services'}}
                  sx={{ 
                    borderColor: 'white', 
                    color: 'white',
                    flex: { xs: '1', sm: 'initial' }
                  }}
                  fullWidth={true}
                >
                  Conoce más
                </StyledButton>
              </Box>
            </motion.div>
          </Box>
        </ContentWrapper>
      </Container>
    </HeroContainer>
  );
};

export default Hero;