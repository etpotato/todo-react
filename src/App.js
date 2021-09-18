import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from './Button';
import Tasks from './Tasks';
import SetTask from './SetTask';
import Footer from './Footer';
import About from './About';

const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks')
  const data = await res.json();
  return data;
};

function App() {
  const [tasks, setTasks] = useState([]); 
  const [showAddTask, setShowAddTask] = useState(false);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);  
    };

    getTasks();
  }, []);
  
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    });
    setTasks(state => state.filter(task => task.id !== id ));
  };

  const toggleAddTask = (evt) => {
    evt.preventDefault();
    setShowAddTask(state => !state);
  };

  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5000/tasks`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(task),
    });
    const data = await res.json();
    setTasks(state => [...state, data]);
  };

  const toggleReminder = async (task) => {
    const currentTask = {...task, reminder: !task.reminder };
    const res = await fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(currentTask),  
    });
    const data = await res.json();
    setTasks(state => state.map(task => task.id === data.id ? {...task, reminder: data.reminder} : task));
  };

  return ( 
    <Router>
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
            <Button onAdd={toggleAddTask} showAddTask={showAddTask} />
          </Grid>
        </Grid>
        <Route path="/" exact render={props => (
          <>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
              style={{ marginBottom: '40px' }}
            >
              {showAddTask && <SetTask onAdd={addTask}/> }
            </Grid>

            {tasks.length 
              ? <Tasks tasks={tasks} onDelete={ deleteTask } onToggle={ toggleReminder } />
              : <Typography variant="subtitle2" component="p" style={{ textAlign: 'center' }}>
                  No task to show
                </Typography> 
            }
          </>
        )}/>
        <Route path='/about' component={About}/>
        <Footer/>
      </Container>
    </Router>
  );
}

export default App;
