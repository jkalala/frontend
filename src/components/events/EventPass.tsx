// src/components/events/EventPass.tsx
import React from 'react';
import { Box, Typography, Card, CardContent, Avatar, QRCode } from '@mui/material';
import { Event, Registration } from '../../types';

interface EventPassProps {
  event: Event;
  registration: Registration;
  user: {
    firstName: string;
    lastName: string;
    organization: string;
    profilePicture?: string;
  };
}

const EventPass: React.FC<EventPassProps> = ({ event, registration, user }) => {
  return (
    <Card sx={{ maxWidth: 400, margin: 'auto', p: 2 }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h5" component="div" color="primary">
            ADPA Events Hub
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.type}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 3 }}>
          <Avatar
            src={user.profilePicture}
            sx={{ width: 120, height: 120, border: '2px solid #1976d2' }}
          />
        </Box>

        <Box sx={{ textAlign: 'center', mb: 3 }}>
          <Typography variant="h6" component="div">
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {user.organization}
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" component="div">
            {event.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {new Date(event.startDate).toLocaleDateString()} - {new Date(event.endDate).toLocaleDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {event.location}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <QRCode value={registration.passCode} size={128} />
        </Box>

        <Typography variant="caption" display="block" textAlign="center">
          Pass ID: {registration.passCode}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default EventPass;