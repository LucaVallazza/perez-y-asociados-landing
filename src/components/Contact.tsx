import { Box, Typography, Grid, TextField, Button, Stack, Snackbar, Alert } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useState } from 'react';

const PHONE_NUMBER = "541141406819";

const Contact = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Nombre requerido'),
      email: Yup.string().email('Email inválido').required('Email requerido'),
      message: Yup.string().required('Mensaje requerido')
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      // Aquí iría la lógica para enviar el formulario
      
      // Mostrar el toast
      setOpenSnackbar(true);
      
      // Resetear el formulario
      resetForm();
    },
  });

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me gustaría recibir más información sobre sus servicios legales.");
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      text: 'Av. Corrientes 1234, Buenos Aires, Argentina'
    },
    {
      icon: <PhoneIcon />,
      text: '+54 9 11 1234-5678'
    },
    {
      icon: <EmailIcon />,
      text: 'contacto@estudioperez.com'
    }
  ];

  return (
    <Box>
      <Typography variant="h2" gutterBottom align="center">
        Contacto
      </Typography>
      <Grid container spacing={4}>
        {/* Form Grid Item */}
        <Grid item xs={12} md={6}>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="name"
              label="Nombre"
              margin="normal"
              {...formik.getFieldProps('name')}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              label="Email"
              margin="normal"
              {...formik.getFieldProps('email')}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              label="Mensaje"
              multiline
              rows={4}
              margin="normal"
              {...formik.getFieldProps('message')}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              sx={{ mt: 2 }}
            >
              Enviar por Email
            </Button>
          </form>
          
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ mb: 2 }}
            >
              O contáctanos directamente por WhatsApp
            </Typography>
            <Button
              variant="contained"
              color="success"
              size="large"
              fullWidth
              startIcon={<WhatsAppIcon />}
              onClick={handleWhatsAppClick}
              sx={{
                py: 2,
                fontSize: '1.1rem',
                backgroundColor: '#25D366',
                '&:hover': {
                  backgroundColor: '#128C7E'
                }
              }}
            >
              Contactar por WhatsApp
            </Button>
          </Box>
        </Grid>

        {/* Contact Info Grid Item */}
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            Información de contacto
          </Typography>
          <Stack spacing={3} sx={{ mt: 4 }}>
            {contactInfo.map((info, index) => (
              <Box
                key={index}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    color: 'primary.main'
                  }}
                >
                  {info.icon}
                </Box>
                <Typography>
                  {info.text}
                </Typography>
              </Box>
            ))}
          </Stack>

          {/* Google Maps iframe */}
          <Box
            sx={{
              mt: 4,
              width: '100%',
              height: '300px',
              overflow: 'hidden',
              borderRadius: 1,
              '& iframe': {
                border: 'none'
              }
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0010379771277!2d-58.385422824021454!3d-34.604203764990216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccac3b4d9f37d%3A0xe77af860bf30a70!2sAv.%20Corrientes%201234%2C%20C1043AAZ%20CABA%2C%20Argentina!5e0!3m2!1ses!2sar!4v1710536144317!5m2!1ses!2sar"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la oficina"
              aria-label="Mapa de Google mostrando la ubicación de nuestra oficina"
            />
          </Box>
        </Grid>
      </Grid>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity="success"
          variant="filled"
          sx={{ width: '100%' }}
        >
          ¡Mensaje enviado con éxito! Responderemos en las próximas 24 horas hábiles.
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;