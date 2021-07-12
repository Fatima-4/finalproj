import "./styles.css";
import React from 'react';
import logo from "./logo.jpg"
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));


export default function Signup() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const classes = useStyles();
  return (
     
    <div className="App">
      <img src={logo} className="Logo"/>

      <p className="P">please fill some info about your kid:</p>
      <form className={classes.root} noValidate autoComplete="off">
      <TextField id="filled-basic" label="Email" variant="filled" />
      <TextField id="filled-basic" label="Passward" variant="filled" />
      <TextField id="filled-basic" label="kid's name" variant="filled" />
      <TextField id="filled-basic" label="Age" variant="filled" />
     </form>
    
    <FormGroup column>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Aggressive"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="shy"
      />
    
    </FormGroup>

    
  
     
    </div>
  );
}

export default Signup;
