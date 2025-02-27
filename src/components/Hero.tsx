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

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '30px',
  padding: '12px 35px',
  fontSize: '1.1rem',
  boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
  }
}));

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
              <BalanceIcon sx={{ 
                fontSize: '4rem', 
                color: theme.palette.secondary.main,
                mb: 3 
              }} />
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
                  mb: 3
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
                  lineHeight: 1.6
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
              <Box sx={{ display: 'flex', gap: 2 }}>
                <StyledButton 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  onClick={()=>{window.location.href='/#pricing'} }
                  >
                  Consulta Gratuita
                </StyledButton>
                <StyledButton 
                  variant="outlined" 
                  color="inherit" 
                  size="large"
                  onClick={()=>{window.location.href='/#about'} }
                  sx={{ borderColor: 'white', color: 'white' }}
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