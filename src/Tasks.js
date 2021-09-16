import Container from '@material-ui/core/Container';
import MuiTypography from '@material-ui/core/Typography';
import MuiList from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';

const Tasks = ({ tasks }) => (
  <Container
    maxWidth="xs"
  >
    <MuiList>
      { tasks.map(task => (
        <MuiListItem divider>
          <MuiTypography key={task.id} variant="h6" component="h2">
            { task.text }
          </MuiTypography>
        </MuiListItem>
      )) }
    </MuiList>
  </Container> 
);

export default Tasks;