import { Message } from "@mui/icons-material";
import { Avatar, Card, CardContent, Typography, Button, CardActions } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
export function MentorsAndAdvisors({ name, image, designation }) {

    return (
        <Card
            sx={{
                width: '300px',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '1rem',
                margin: '1rem',
            }}
        >
            <CardContent>
                <Avatar src={image} alt={name} />
                <Typography variant='subtitle1'>{name}</Typography>
                <Typography variant='subtitle2'>{designation}</Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained"
                    endIcon={<SendIcon />}
                    sx={{
                        background: 'linear-gradient(90deg, rgba(87,81,201,1) 0%, rgba(190,76,219,1) 68%, rgba(0,212,255,1) 100%)',
                        borderradius: '150px'
                    }}>Message them now</Button>
            </CardActions>
        </Card>
    );
}
