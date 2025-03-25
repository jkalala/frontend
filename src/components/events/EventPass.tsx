import React from 'react';
import { Box, Typography, Card, CardContent, Avatar } from '@mui/material';
import QRCode from 'qrcode.react'; // Changed from MUI import

interface Event {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  type: string;
}

interface Registration {
  id: string;
  passCode: string;
}

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
        {/* ... rest of your component code ... */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <QRCode value={registration.passCode} size={128} />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EventPass;