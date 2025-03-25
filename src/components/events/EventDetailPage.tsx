import { useParams } from 'react-router-dom';
import { Box, Container, Typography, Chip } from '@mui/material';
import { EventType } from '../types';
import { useGetEventQuery } from '../services/eventApi';

const getEventTypeColor = (type: EventType) => {
  switch (type) {
    case 'COUNCIL': return 'primary';
    case 'COMMITTEE': return 'secondary';
    case 'WORKSHOP': return 'success';
    default: return 'default';
  }
};

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { data: event, isLoading, error } = useGetEventQuery(id!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading event</div>;
  if (!event) return <div>Event not found</div>;

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h3" component="h1">
            {event.title}
          </Typography>
          <Chip 
            label={event.type} 
            color={getEventTypeColor(event.type)}
            sx={{ textTransform: 'capitalize' }}
          />
        </Box>
        
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
        </Typography>
        
        <Typography variant="h6" gutterBottom>
          Location: {event.location}
        </Typography>
        
        <Typography variant="body1" paragraph sx={{ mt: 2 }}>
          {event.description}
        </Typography>
      </Box>
    </Container>
  );
}