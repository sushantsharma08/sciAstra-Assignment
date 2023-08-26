import { Avatar, Grid, Paper, Button } from "@mui/material";
import { styled } from '@mui/material/styles';

export function MentorsAndAdvisors({ name, image, designation }) {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === '#1A2027',
        ...theme.typography.body2,
        padding: theme.spacing(4),
        alignItems: 'center',
        maxHeight: '500px',
        color: theme.palette.text.secondary,
    }));
    return (
        <div className="team-member">
            <Grid container >
                <Grid container item key={name} xs={4} sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '1rem',
                }}>
                    <Item>
                        <Avatar src={image} alt={name} />
                        <h3>{name}</h3>
                        <p>{designation}</p>
                        <Button variant="contained" color="primary" target="_blank">Message him now </Button>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}
