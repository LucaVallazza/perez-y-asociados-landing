import { AppBar, Toolbar, Button, Box, Container, Typography, IconButton, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { styled } from '@mui/system';
import { useState, useEffect } from 'react';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: 'transparent',
  boxShadow: 'none',
  position: 'fixed',
  transition: 'all 0.3s ease-in-out',
  '&.scrolled': {
    backgroundColor: theme.palette.primary.main,
    boxShadow: (theme.shadows as unknown as string[])[1] || 'none'
  },
  '&.hidden': {
    transform: 'translateY(-100%)'
  }
}));

const LogoContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  cursor: 'pointer',
});

const navItems = [
  { href: 'home', label: 'Inicio' },
  { href: 'about', label: 'Nosotros' },
  { href: 'services', label: 'Servicios' },
  { href: 'cases', label: 'Casos' },
  { href: 'blog', label: 'Blog' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

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

  const drawer = (
    <Box sx={{ p: 2, height: '100%', backgroundColor: 'primary.main' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
        <Typography variant="h6" sx={{ color: 'white' }}>Menú</Typography>
        <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map(({ href, label }) => (
          <ListItem key={href} disablePadding>
            <Button
              fullWidth
              color="inherit"
              href={`#${href}`}
              onClick={() => {
                handleNavClick();
                handleDrawerToggle();
              }}
              sx={{
                py: 1.5,
                color: 'white',
                justifyContent: 'flex-start',
                '&:hover': { backgroundColor: 'rgba(255,255,255,0.1)' }
              }}
            >
              {label}
            </Button>
          </ListItem>
        ))}
        <ListItem disablePadding sx={{ mt: 2 }}>
          <Button
            fullWidth
            variant="contained"
            href="#contact"
            onClick={() => {
              handleNavClick();
              handleDrawerToggle();
            }}
            sx={{
              backgroundColor: '#B8860B',
              color: 'white',
              '&:hover': {
                backgroundColor: '#996515'
              }
            }}
          >
            Contacto
          </Button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <StyledAppBar 
      className={`${isScrolled ? 'scrolled' : ''} ${!isVisible ? 'hidden' : ''}`}
    >
      <Container>
        <Toolbar disableGutters>
          <Box 
            sx={{ 
              flexGrow: 1,
              my: 2,
              minWidth:140,
              transition: 'opacity 0.3s ease',
              opacity: isScrolled ? 1 : 0
            }}
          >
            <LogoContainer onClick={() => window.scrollTo(0, 0)}>
              <Typography
                // variant="h4"
                sx={{
                  fontSize: 30,
                  fontWeight: 700,
                  letterSpacing: 1,
                  lineHeight: 1,
                  color: 'white'
                }}
              >
                PÉREZ
              </Typography>
              <Typography
                // variant="subtitle2"
                sx={{
                  fontSize: 13,
                  fontWeight: 400,
                  letterSpacing: 2,
                  color: 'white',
                  opacity: 0.9
                }}
              >
                & ASOCIADOS
              </Typography>
            </LogoContainer>
          </Box>
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'flex' }, 
              gap: 2,
              alignItems: 'center'
            }}
          >
            {navItems.map(({ href, label }) => (
              <Button
                key={href}
                color="inherit"
                href={`#${href}`}
                onClick={handleNavClick}
                sx={{
                  opacity: 0.9,
                  fontSize: '0.95rem',
                  '&:hover': {
                    opacity: 1,
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.2s ease'
                }}
              >
                {label}
              </Button>
            ))}
            <Button 
              variant="contained" 
              href="#contact"
              onClick={handleNavClick}
              sx={{
                backgroundColor: '#B8860B', // Darker gold color
                color: 'white',
                fontSize: '0.95rem',
                px: 2,
                borderRadius: '20px', // Rounded corners
                '&:hover': {
                  backgroundColor: '#996515', // Even darker on hover
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)'
                },
                transition: 'all 0.2s ease',
                textTransform: 'none'
              }}
            >
              Contacto
            </Button>
          </Box>

          {/* Mobile Menu Button */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true // Better mobile performance
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: 'primary.main'
          }
        }}
      >
        {drawer}
      </Drawer>
    </StyledAppBar>
  );
};

export default Navbar;