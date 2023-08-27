
import { Box, Card, CardContent, Divider, Paper, Typography } from '@mui/material';
import { getMentors, getMentorsAndAdvisors, getUniversities } from '../api';
import { TeamMentor } from './TeamMentor';
import { MentorsAndAdvisors } from './MentorsAndAdvisors';
import { styled } from '@mui/material/styles';

export function Team() {
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
      <Typography variant='h2' align='center' my={4} color="#8f2ec6" fontFamily="Poppins" fontSize="50px">Our Team</Typography>

      <Typography variant='h4' align='center' my={4} fontFamily="Poppins" color="#7611b0">
        Learn from scientists, research scholars from the top institutes in the world.
      </Typography>

      <Box
        container
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {universities.map(university => (
          <Card
            key={university.name}
            sx={{
              display: 'flex',
              width: '300px',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '1rem',
              margin: '1rem',
              raised: true
            }}
          >
            <CardContent>
              <Typography>{university.name}</Typography>
            </CardContent>
          </Card>
        ))}

        <Card
          sx={{
            boxShadow: 'none',
            display: 'flex',
            width: '300px',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '1rem',
          }}
        >
          <CardContent>
            <Typography>{" ... and so on."}</Typography>
          </CardContent>
        </Card>
      </Box>

      <Divider sx={{ mt: '5', mb: '5' }} />

      <Typography variant='h3' align='center' my={4} fontFamily="Poppins" color="#7611b0">Meet your mentors</Typography>

      <Box
        container
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {mentorsData.map(member => (
          <TeamMentor
            key={member.id}
            name={member.firstName + ' ' + member.lastName}
            image={member.image}
            university={member.university}
          />
        ))}
      </Box>

      <Divider sx={{ mt: '5', mb: '5' }} />

      <Typography variant='h3' align='center' my={4} fontFamily="Poppins" color="#7611b0">Mentors And Advisors </Typography>

      <Box
        container
        sx={{
          display: 'flex',
          alignItems: 'stretch',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {mentorsAndAdvisors.map(advisor => (
          <MentorsAndAdvisors
            key={advisor.id}
            name={advisor.firstName + ' ' + advisor.lastName}
            image={advisor.image}
            designation={advisor.designation}
          />
        ))}
      </Box>
    </div >
  );
}
