
import { Box, Divider, Grid, Paper, Typography } from '@mui/material';
import { getMentors, getMentorsAndAdvisors, getUniversities } from '../api';
import { TeamMentor } from './TeamMentor';
import { MentorsAndAdvisors } from './MentorsAndAdvisors';
import { styled } from '@mui/material/styles';

function Team() {
  const mentorsData = getMentors();
  const universities = getUniversities();
  const mentorsAndAdvisors = getMentorsAndAdvisors();

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#1A2027',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    maxHeight: '500px',
    color: theme.palette.text.secondary,
  }));

  return (
    <div>
      <h1>Our Team</h1>

      <Typography sx={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        m: '2rem',

      }}>Learn from scientists, research scholars from the top institutes in the world. </Typography>

      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          {universities.map(university => (
            <Grid container item key={university.name} xs={4} sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
              textAlign: 'center',
            }}>
              <Item>{university.name}</Item>
            </Grid>
          ))}
        </Grid>
      </Box>
      <>
        <Divider sx={{ mt: '5', mb: '5' }} />
      </>

      <Typography sx={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        m: '2rem',

      }}>Meet your mentors</Typography>

      <div className="team-members">
        {
          mentorsData.map(member => (
            <TeamMentor
              key={member.id}
              name={member.firstName + ' ' + member.lastName}
              image={member.image}
              university={member.university}
            />
          ))}
      </div>

      <Typography sx={{
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center',
        m: '2rem',

      }}>Mentors And Advisors </Typography>

      <div className="team-members">
        {
          mentorsAndAdvisors.map(advisor => (
            <MentorsAndAdvisors
              key={advisor.id}
              name={advisor.firstName + ' ' + advisor.lastName}
              image={advisor.image}
              designation={advisor.designation}
            />
          ))}
      </div>

    </div>
  );
}

export default Team;