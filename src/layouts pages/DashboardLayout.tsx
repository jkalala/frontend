import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import AppBar from '../components/common/AppBar';

export default function DashboardLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  );
}