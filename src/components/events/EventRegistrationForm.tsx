// src/components/events/EventRegistrationForm.tsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button, TextField, Select, MenuItem, FormControl, InputLabel, Box, Typography, Avatar } from '@mui/material';
import { CloudUpload } from '@mui/icons-material';

const registrationSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  organization: z.string().min(1, 'Organization is required'),
  position: z.string().min(1, 'Position is required'),
  phone: z.string().min(1, 'Phone number is required'),
  dietaryRequirements: z.string().optional(),
  profilePicture: z.any().optional()
});

type RegistrationFormData = z.infer<typeof registrationSchema>;

interface EventRegistrationFormProps {
  eventId: string;
  onSubmit: (data: RegistrationFormData) => Promise<void>;
}

const EventRegistrationForm: React.FC<EventRegistrationFormProps> = ({ eventId, onSubmit }) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch
  } = useForm<RegistrationFormData>({
    resolver: zodResolver(registrationSchema)
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
        setValue('profilePicture', file);
      };
      reader.readAsDataURL(file);
    }
  };

  const submitForm = async (data: RegistrationFormData) => {
    try {
      await onSubmit(data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit(submitForm)} sx={{ mt: 3 }}>
      <Typography variant="h6" gutterBottom>
        Event Registration
      </Typography>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar
            src={previewImage || undefined}
            sx={{ width: 80, height: 80 }}
          />
          <Button
            component="label"
            variant="outlined"
            startIcon={<CloudUpload />}
          >
            Upload Photo
            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleImageChange}
            />
          </Button>
        </Box>

        <TextField
          label="First Name"
          {...register('firstName')}
          error={!!errors.firstName}
          helperText={errors.firstName?.message}
          fullWidth
        />

        <TextField
          label="Last Name"
          {...register('lastName')}
          error={!!errors.lastName}
          helperText={errors.lastName?.message}
          fullWidth
        />

        <TextField
          label="Email"
          type="email"
          {...register('email')}
          error={!!errors.email}
          helperText={errors.email?.message}
          fullWidth
        />

        <TextField
          label="Organization"
          {...register('organization')}
          error={!!errors.organization}
          helperText={errors.organization?.message}
          fullWidth
        />

        <TextField
          label="Position"
          {...register('position')}
          error={!!errors.position}
          helperText={errors.position?.message}
          fullWidth
        />

        <TextField
          label="Phone Number"
          {...register('phone')}
          error={!!errors.phone}
          helperText={errors.phone?.message}
          fullWidth
        />

        <FormControl fullWidth>
          <InputLabel id="dietary-requirements-label">Dietary Requirements</InputLabel>
          <Select
            labelId="dietary-requirements-label"
            label="Dietary Requirements"
            {...register('dietaryRequirements')}
            defaultValue=""
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="Vegetarian">Vegetarian</MenuItem>
            <MenuItem value="Vegan">Vegan</MenuItem>
            <MenuItem value="Gluten-Free">Gluten-Free</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
        </FormControl>

        <Button type="submit" variant="contained" size="large" fullWidth sx={{ mt: 2 }}>
          Register for Event
        </Button>
      </Box>
    </Box>
  );
};

export default EventRegistrationForm;