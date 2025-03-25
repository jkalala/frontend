import { AppBar as MuiAppBar, Toolbar, Typography } from '@mui/material';

export default function AppBar() {
  return (
    <MuiAppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">ADPA Events Hub</Typography>
      </Toolbar>
    </MuiAppBar>
  );
}