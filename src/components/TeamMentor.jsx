import { Avatar, Card, CardContent, Typography } from "@mui/material";

export function TeamMentor({ name, image, university }) {
  const universityName = `${university.name}, ${university.city}, ${university.country}`

  return (
    <Card
      sx={{
        display: 'flex',
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
        <Typography variant='body'>{universityName}</Typography>
      </CardContent>
    </Card>
  );
}
