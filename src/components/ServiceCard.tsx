import { Card, CardContent, Typography, Icon } from '@mui/material';
import { styled } from '@mui/system';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const StyledCard = styled(Card)({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
});

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  return (
    <StyledCard>
      <CardContent>
        <Icon sx={{ fontSize: 40, color: '#c5a572' }}>{icon}</Icon>
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

export default ServiceCard;