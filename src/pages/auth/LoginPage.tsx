import { Typography } from '@mui/material';
import LoginForm from '../../components/auth/LoginForm';

export default function LoginPage() {
  return (
    <>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <LoginForm />
    </>
  );
}