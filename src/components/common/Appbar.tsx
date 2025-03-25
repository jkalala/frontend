import { 
  AppBar as MuiAppBar, 
  Toolbar, 
  Typography,
  IconButton,
  Box
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../contexts/AuthContext';

export default function AppBar() {
  const { user, logout } = useAuth();

  return (
    <MuiAppBar 
      position="fixed"
      sx={{ 
        zIndex: (theme) => theme.zIndex.drawer + 1,
        backgroundColor: 'primary.main'
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        
        <Typography 
          variant="h6" 
          component="div" 
          sx={{ flexGrow: 1 }}
        >
          ADPA Events Hub
        </Typography>

        {user && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant="subtitle1" sx={{ mr: 2 }}>
              {user.firstName} {user.lastName}
            </Typography>
            <IconButton
              color="inherit"
              onClick={logout}
              aria-label="logout"
            >
              <LogoutIcon />
            </IconButton>
          </Box>
        )}
      </Toolbar>
    </MuiAppBar>
  );
}