import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SuccessCases from './components/SuccessCases';
import Blog from './components/Blog';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { theme } from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh' }}>
        <Navbar />
        
        {/* Hero Section */}
        <Box component="section" id="home">
          <Hero />
        </Box>

        {/* About Section */}
        <Box component="section" id="about" sx={{ py: 8 }}>
          <Container>
            <About />
          </Container>
        </Box>

        {/* Services Section */}
        <Box component="section" id="services" sx={{ py: 8, bgcolor: 'grey.50' }}>
          <Container>
            <Services />
          </Container>
        </Box>

        {/* Success Cases Section */}
        <Box component="section" id="cases" sx={{ py: 8 }}>
          <Container>
            <SuccessCases />
          </Container>
        </Box>

        {/* Blog Section */}
        <Box component="section" id="blog" sx={{ py: 8, bgcolor: 'grey.50' }}>
          <Container>
            <Blog />
          </Container>
        </Box>

        {/* Pricing Section */}
        <Box component="section" id="pricing" sx={{ py: 8 }}>
          <Container>
            <Pricing />
          </Container>
        </Box>

        {/* Contact Section */}
        <Box component="section" id="contact" sx={{ py: 8, bgcolor: 'grey.50' }}>
          <Container>
            <Contact />
          </Container>
        </Box>

        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;