import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useState } from 'react';

const SetTask = ({ onAdd }) => {
  const[text, setText] = useState('');
  const[day, setDay] = useState('');
  const[reminder, setReminder] = useState(false);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();

    if (!text) return alert('Please add task');

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
    setChecked(false);
  };

  return (
    <form onSubmit={ onSubmit }>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
        <TextField value={text} onInput={(evt) => setText(evt.target.value)} label="Task" variant="outlined" style={{width: '50%'}} />
        <TextField value={day} onInput={(evt) => setDay(evt.target.value)} label="Day" variant="outlined" style={{width: '50%'}}/>
        <FormGroup style={{width: '100%'}}>
          <FormControlLabel control={<Checkbox value={reminder} onChange={handleChange} onInput={(evt) => setReminder(evt.target.checked)} checked={checked} color="primary" />} label="Set reminder" />
        </FormGroup>
        <Button variant="outlined" color="primary" type="submit" style={{width: '100%'}}>Add task</Button>
      </div>
    </form>
  );
};

export default SetTask;