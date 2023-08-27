import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Logo from '../assets/logo.png';

const pages = ['Home', 'Courses', 'Selections', 'Blogs', 'Materials', 'Team', 'Contact Us'];

export function NavigationMenu() {
  return (
    <AppBar
      position="static"
      sx={{
        background: '#fff',
        boxShadow: 'none',
      }}

    >
      <Container maxWidth="xl">
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}>
          <img src={Logo} width="40" height="40" />

          {pages.map((page) => (
            <MenuItem key={page} sx={{
              color: 'black',
              fontFamily: 'Poppins',
            }} >
              <Typography textAlign="center" >{page.toUpperCase()}</Typography>
            </MenuItem>
          ))}
          <Box sx={{ flexGrow: 0 }}>
            <Button
              variant="contained"
              sx={{
                background: 'linear-gradient(90deg, rgba(87,81,201,1) 0%, rgba(190,76,219,1) 68%, rgba(0,212,255,1) 100%)',
                borderradius: '150px'
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar >
  );
}
