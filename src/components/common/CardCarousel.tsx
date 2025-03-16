import React from 'react';
import Slider from 'react-slick';
import { Box } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

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

// Custom arrow components
const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        right: '-15px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        zIndex: 2,
        '&:hover': {
          background: 'white',
          boxShadow: '0 3px 8px rgba(0,0,0,0.3)',
        }
      }}
    >
      <ArrowForwardIosIcon sx={{ color: 'primary.main' }} />
    </Box>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        left: '-15px',
        top: '50%',
        transform: 'translateY(-50%)',
        width: '40px',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        borderRadius: '50%',
        boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
        cursor: 'pointer',
        zIndex: 2,
        '&:hover': {
          background: 'white',
          boxShadow: '0 3px 8px rgba(0,0,0,0.3)',
        }
      }}
    >
      <ArrowBackIosNewIcon sx={{ color: 'primary.main' }} />
    </Box>
  );
};

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
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
        pb: 1,
        height: 'inherit',
        '& > div': { height: '100%' }
      },
      '.slick-track': { 
        display: 'flex', 
        alignItems: 'stretch' 
      },
      '.slick-dots': { 
        bottom: -35,
        margin: 0,
        padding: 0,
        listStyle: 'none',
        display: 'flex !important',
        justifyContent: 'center',
        gap: 1,
        'li': {
          margin: 0,
          padding: 0,
          width: 'auto',
          height: 'auto',
          'button': {
            padding: 0,
            width: 8,
            height: 8,
            backgroundColor: 'grey.400',
            border: 'none',
            borderRadius: '50%',
            fontSize: 0,
            transition: 'all 0.2s ease',
            cursor: 'pointer',
            '&:before': {
              display: 'none'
            }
          },
          '&.slick-active button': {
            backgroundColor: 'primary.main',
            transform: 'scale(1.2)',
          }
        }
      },
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
          display: 'none' // Hide default arrows
        }
      },
      '.slick-list' : {overflow: 'hidden'},
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