import Container from '@material-ui/core/Container';
import MuiList from '@material-ui/core/List';
import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => (
  <Container
    maxWidth="xs"
  >
    <MuiList>
      { tasks.map(task => (
        <Task task={ task } key={ task.id } onDelete={ onDelete } onToggle={ onToggle }/>
      )) }
    </MuiList>
  </Container> 
);

export default Tasks;