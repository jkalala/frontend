// src/pages/EventsPage.tsx
import { CircularProgress, Alert, Container, Grid } from '@mui/material';
import EventCard from '../components/EventCard';
import { useEvents } from '../hooks/useEvents';

export default function EventsPage() {
  const { events, isLoading, error } = useEvents();

  if (isLoading) return <CircularProgress sx={{ display: 'block', mx: 'auto', mt: 4 }} />;
  if (error) return <Alert severity="error">Error loading events</Alert>;

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {events?.map((event) => (
          <Grid item key={event.id} xs={12} sm={6} md={4}>
            <EventCard event={event} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}