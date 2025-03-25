// src/components/events/CreateEventForm.tsx
import { useState } from 'react';
import { 
  Button, 
  TextField, 
  MenuItem, 
  Select, 
  InputLabel, 
  FormControl,
  Stack
} from '@mui/material';
import { EventType } from '../../types';
import { useCreateEventMutation } from '../../services/eventApi';

export default function CreateEventForm() {
  const [createEvent] = useCreateEventMutation();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    location: '',
    type: 'WORKSHOP' as EventType
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createEvent(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Title"
          value={formData.title}
          onChange={(e) => setFormData({...formData, title: e.target.value})}
          required
        />
        <TextField
          label="Description"
          multiline
          rows={4}
          value={formData.description}
          onChange={(e) => setFormData({...formData, description: e.target.value})}
          required
        />
        <TextField
          label="Start Date"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={formData.startDate}
          onChange={(e) => setFormData({...formData, startDate: e.target.value})}
          required
        />
        <TextField
          label="End Date"
          type="datetime-local"
          InputLabelProps={{ shrink: true }}
          value={formData.endDate}
          onChange={(e) => setFormData({...formData, endDate: e.target.value})}
          required
        />
        <TextField
          label="Location"
          value={formData.location}
          onChange={(e) => setFormData({...formData, location: e.target.value})}
          required
        />
        <FormControl fullWidth>
          <InputLabel>Event Type</InputLabel>
          <Select
            value={formData.type}
            label="Event Type"
            onChange={(e) => setFormData({...formData, type: e.target.value as EventType})}
          >
            <MenuItem value="COUNCIL">Council</MenuItem>
            <MenuItem value="COMMITTEE">Committee</MenuItem>
            <MenuItem value="WORKSHOP">Workshop</MenuItem>
          </Select>
        </FormControl>
        <Button type="submit" variant="contained">
          Create Event
        </Button>
      </Stack>
    </form>
  );
}