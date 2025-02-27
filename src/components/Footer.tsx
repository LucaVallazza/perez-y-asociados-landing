import { Box, Container, Typography, Link, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.main', color: 'white', py: 6, mt: 8 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Pérez & Asociados
            </Typography>
            <Typography variant="body2">
              Comprometidos con la excelencia legal
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2">📞 +54 9 11 1234-5678</Typography>
            <Typography variant="body2">✉ contacto@estudioperez.com</Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Redes Sociales
            </Typography>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>LinkedIn</Link>
            <Link href="#" color="inherit" sx={{ mr: 2 }}>Facebook</Link>
            <Link href="#" color="inherit">Instagram</Link>
          </Grid>
        </Grid>
        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
          © {new Date().getFullYear()} Pérez & Asociados. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;