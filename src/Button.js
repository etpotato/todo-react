import MuiButton from '@material-ui/core/Button';

const Button = ({ buttonBg }) => (
  <MuiButton
    onClick={() => console.log('click')} 
    variant="contained" 
    color="primary" 
    style={{ backgroundColor: buttonBg }}
  >
    Add
  </MuiButton>
);

export default Button;