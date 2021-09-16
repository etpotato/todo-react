import { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from './Button';
import Tasks from './Tasks';

const tasksArr = [
  {
    id: 123,
    text: 'Write Hello World',
    day: 'Sep 24th at 20:00pm',
    reminder: true,
  },
  {
    id: 345,
    text: 'Have a breakfast',
    day: 'Sep 14th at 7:00am',
    reminder: true,
  },
  {
    id: 9324,
    text: 'Go for a walk',
    day: 'Sep 12th at 19:30pm',
    reminder: false,
  }
];

function App() {
  const [tasks, setTasks] = useState(tasksArr);

  return <>
    <Container
      maxWidth="sm"
      style={{
        paddingTop: '64px',
        paddingBottom: '64px'
      }}
    >
      <Grid
        container
        spacing={5}
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        style={{ marginBottom: '40px' }}
      >
        <Grid item>
          <Typography variant="h4" component="h1">
            Task tracker
          </Typography>
        </Grid>
        <Grid item>
          <Button buttonBg='green'/>
        </Grid>
      </Grid>
      <Tasks tasks={tasks}/>
    </Container>
  </>;
}

export default App;
