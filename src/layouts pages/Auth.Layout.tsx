import { Outlet } from 'react-router-dom';
import { Container, CssBaseline } from '@mui/material';

export default function AuthLayout() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Outlet />
    </Container>
  );
}