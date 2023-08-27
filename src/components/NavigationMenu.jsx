import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Image } from '@mui/icons-material';

const pages = ['Home', 'Couses', 'Selections', 'Blogs', 'Materials', 'Team', 'Contact Us'];

export function NavigationMenu() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {pages.map((page) => (
            <MenuItem key={page} >
              <Typography textAlign="center">{page.toUpperCase()}</Typography>
            </MenuItem>
          ))}
          <Box sx={{ flexGrow: 0 }}>
            <Button variant="contained">Login</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
