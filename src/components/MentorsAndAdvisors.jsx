import { Avatar, Card, CardContent, Typography, Button, CardActions } from "@mui/material";

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
                <Button variant="contained">Message them now</Button>
            </CardActions>
        </Card>
    );
}
