import { AppBar, Toolbar, Button, Typography, Box, Container } from '@mui/material';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  transition: 'all 0.3s ease-in-out',
  '&.scrolled': {
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadows[4]
  },
  '&.hidden': {
    transform: 'translateY(-100%)'
  }
}));

const LogoImage = styled('img')({
  height: '50px',
  width: 'auto',
  transition: 'opacity 0.3s ease',
});

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Cambiar fondo cuando scroll > 100px
      if (currentScrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Ocultar/mostrar navbar basado en dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 400) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleNavClick = () => {
    // Pequeño delay para permitir la animación del scroll
    setTimeout(() => {
      setIsVisible(true);
    }, 1000);
  };

  return (
    <StyledAppBar 
      className={`${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}
    >
      <Container>
        <Toolbar disableGutters>
          <Box 
            sx={{ 
              flexGrow: 1,
              transition: 'opacity 0.3s ease',
              opacity: isScrolled ? 1 : 0.9
            }}
          >
            <LogoImage 
              src="/src/assets/logo.jpg" 
              alt="Pérez & Asociados Logo"
            />
          </Box>
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 2,
              alignItems: 'center'
            }}
          >
            {['home', 'about', 'services', 'cases', 'blog'].map((section) => (
              <Button
                key={section}
                color="inherit"
                href={`#${section}`}
                onClick={handleNavClick}
                sx={{
                  opacity: 0.9,
                  '&:hover': {
                    opacity: 1,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            ))}
            <Button 
              variant="contained" 
              color="secondary"
              href="#contact"
              onClick={handleNavClick}
              sx={{
                '&:hover': {
                  transform: 'translateY(-2px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              Contacto
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default Navbar;