import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';

interface SimpleCarouselProps {
  children: React.ReactNode[];
  slidesToShow?: { 
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  autoplay?: boolean;
  autoplaySpeed?: number;
}

const SimpleCarousel = ({ 
  children, 
  slidesToShow = { xs: 1, sm: 2, md: 3, lg: 3 },
  autoplay = false,
  autoplaySpeed = 3000
}: SimpleCarouselProps) => {
  // Determine screen size
  const [currentSlidesCount, setCurrentSlidesCount] = React.useState(slidesToShow.lg);

  React.useEffect(() => {
    const updateSlidesCount = () => {
      const width = window.innerWidth;
      if (width < 600) {
        setCurrentSlidesCount(slidesToShow.xs);
      } else if (width < 960) {
        setCurrentSlidesCount(slidesToShow.sm);
      } else if (width < 1280) {
        setCurrentSlidesCount(slidesToShow.md);
      } else {
        setCurrentSlidesCount(slidesToShow.lg);
      }
    };

    updateSlidesCount();
    window.addEventListener('resize', updateSlidesCount);
    
    return () => {
      window.removeEventListener('resize', updateSlidesCount);
    };
  }, [slidesToShow]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: currentSlidesCount,
    slidesToScroll: 1,
    arrows: true,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: slidesToShow.md,
        }
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: slidesToShow.sm,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShow.xs,
        }
      }
    ]
  };

  return (
    <Box sx={{ 
      '.slick-slide': { 
        px: 1.5, 
        pb: 1, // Add padding to bottom for drop shadow
        height: 'inherit',
        '& > div': { height: '100%' }
      },
      '.slick-track': { display: 'flex', alignItems: 'stretch' },
      '.slick-dots': { bottom: -35 },
      '.slick-prev, .slick-next': {
        zIndex: 1,
        width: '30px',
        height: '30px',
        background: 'white',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
        '&:hover': {
          background: 'white',
        },
        '&:before': {
          color: '#1976d2', // Your primary color
          fontSize: '20px',
          opacity: 1,
        }
      },
      '.slick-prev': { left: -15 },
      '.slick-next': { right: -15 },
      position: 'relative',
      mx: { xs: 2, sm: 4, md: 2 },
      my: 4,
      pb: 2
    }}>
      <Slider {...settings}>
        {children.map((child, index) => (
          <div key={index} style={{ height: '100%' }}>
            {child}
          </div>
        ))}
      </Slider>
    </Box>
  );
};

export default SimpleCarousel;