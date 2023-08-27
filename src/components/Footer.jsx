import { Box, Link, Typography } from '@mui/material';
import Logo from '../assets/logo.png';

export function Footer() {
    return (
        <Box
            container
            m={-1}
            height={500}
            sx={{
                backgroundImage: 'url(https://files.sciastra.com/footermain.jpg)'
            }}
        >
            <Box
                container
                sx={{
                    display: 'flex',
                    alignItems: 'stretch',
                    justifyContent: 'space-between',
                }}
            >
                <Box mx={8}>
                    <Box mx={-2}>
                        <img src={Logo} width="120" height="120" />
                    </Box>
                    <Typography color='#fff' variant='h5'>SciAstra</Typography>
                    <Typography color='#fff' mt={4}>&copy; SciAstra</Typography>
                    <Typography color='#fff' mt={1}>Home</Typography>
                    <Typography color='#fff'>Our Courses</Typography>
                    <Typography color='#fff'>Blog</Typography>
                    <Typography color='#fff'>Free Materials</Typography>
                    <Typography color='#fff'>Our Team</Typography>
                    <Typography color='#fff'>Contact Us</Typography>
                </Box>
                <Box m={8}>
                    <Typography color='#fff'>SciAstra Education Pvt Ltd,</Typography>
                    <Typography color='#fff'>Bhubaneswar, Odisha</Typography>
                    <Typography color='#fff'><Link sx={{
                        textDecoration: 'none',
                        color: '#fff',
                    }} href='mailto:support@sciastra.com'>support@sciastra.com</Link></Typography>
                </Box>
            </Box>

            <Typography color='#fff' textAlign='center' mt={8}>&copy; Copyright 2023, SciAstra. All rights reserved</Typography>
        </Box>
    )
}