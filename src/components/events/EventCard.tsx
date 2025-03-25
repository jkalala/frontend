import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Event } from '../../types';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={event.image || '/placeholder-event.jpg'}
        alt={event.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {event.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {event.location}
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          {event.description.substring(0, 100)}...
        </Typography>
        <Typography component={Link} to={`/events/${event.id}`} color="primary">
          View Details
        </Typography>
      </CardContent>
    </Card>
  );
}