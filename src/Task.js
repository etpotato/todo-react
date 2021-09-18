import MuiTypography from '@material-ui/core/Typography';
import MuiListItemText from '@material-ui/core/ListItemText';
import { FiX } from "react-icons/fi";
import { MdAlarm } from "react-icons/md";

const Task = ({ task, onDelete, onToggle }) => (
  <MuiListItemText onClick={() => onToggle(task)} style={{ padding: '10px', backgroundColor: 'lightblue', borderRadius: '4px' }}>
    <MuiTypography variant="subtitle1" component="h2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      { task.text } <FiX onClick={ () => onDelete(task.id) } style={{ cursor: 'pointer', color: 'red', width: '24px', height: '24px' }}/>
    </MuiTypography>
    <MuiTypography variant="subtitle2" component="p">
      { task.day }
    </MuiTypography>
    { task.reminder && <MdAlarm /> }
  </MuiListItemText>
);


export default Task;