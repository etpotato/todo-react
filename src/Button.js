import MuiButton from '@material-ui/core/Button';
import { useLocation } from 'react-router-dom';

const Button = ({ onAdd, showAddTask }) => {

  const location = useLocation();
  
  return (
    location.pathname === '/'
    ? <MuiButton
      onClick={ onAdd } 
      variant="contained" 
      color="primary" 
      style={{ backgroundColor: showAddTask ? 'grey' : 'green' }}
    >
      { showAddTask ? 'Close' : 'Add' }
    </MuiButton>
    : false
  );
};

export default Button;