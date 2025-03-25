import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { 
  Box, 
  Typography, 
  Container, 
  Card, 
  CardContent, 
  Button, 
  CircularProgress,
  Alert,
  Chip
} from '@mui/material';
import { Event } from '../types';
import { fetchEvent } from '../services/eventService';
import EventRegisterForm from '../components/events/EventRegisterForm';

export default function EventDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const getEvent = async () => {
      try {
        if (!id) throw new Error('Event ID is required');
        const data = await fetchEvent(id);
        setEvent(data);
      } catch (err) {
        setError('Failed to load event details');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getEvent();
  }, [id]);

  if (loading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
  if (error) return <Alert severity="error">{error}</Alert>;
  if (!event) return <Alert severity="warning">Event not found</Alert>;

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
            <Typography variant="h4" component="h1">
              {event.title}
            </Typography>
            <Chip label={event.type} color="primary" />
          </Box>
          
          <Typography color="text.secondary" gutterBottom>
            {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
          </Typography>
          
          <Typography variant="subtitle1" gutterBottom>
            Location: {event.location}
          </Typography>
          
          <Typography variant="body1" paragraph sx={{ mt: 3 }}>
            {event.description}
          </Typography>
          
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Register for this event
            </Typography>
            <EventRegisterForm eventId={event.id} />
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}