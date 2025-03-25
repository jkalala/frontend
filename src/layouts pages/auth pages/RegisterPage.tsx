import { Typography } from '@mui/material';
import RegisterForm from '../../components/auth/RegisterForm';

export default function RegisterPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>Register</Typography>
      <RegisterForm />
    </>
  );
}