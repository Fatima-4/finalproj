import React  from "react"
import './App.css';
import image from "./happykid.jpeg";
import logo from "./logofinal.png";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const useStyles = makeStyles((theme) => ({
  root: {
  '& > *': {
  margin: theme.spacing(1),
  width: '25ch',
  },
  },
  })); 

function Homepage(){
  const classes = useStyles(); 
    return(
      <Router>
        
        <div>
          <link to="/Signup">signup</link>
        </div>
     
      <switch>
      <Route path ="Signup">
        <Signup />
      </Route>
      </switch>


        <div className="App">
        <div className="div12">
          <div className="div1">
          <img className="logo" src={logo} alt="logo" />
          </div>
        </div>
        <div className="div34">
          <div className="div3">
            <div className="hala2">
              <h1 className="question">How to help your shy kid??</h1>
              <h3>
               " Blooming kids" app helps your shy kid to overcome shyness and get
                a better personality.
              </h3>
            </div>
          </div>
          <div className="div4">
            <img className="imageone" src={image} alt="hala" />
          </div>
        </div>
        <div className="hala">
          <h1>proud parents .... happy kids</h1>
        </div>
        <div>
        <form className={classes.root} noValidate autoComplete="off">
          <h1 className="login">login</h1>
          <TextField id="filled-basic" label="Email" variant="filled" />
          <TextField id="filled-basic" label="Passward" variant="filled" />
        </form>
      </div>
      <div className="blue">

      <div>
          <link to="/Signup">signup</link>
          <h5> If you don't have an account sign up?</h5>
        </div>

      <h5> If you don't have an account sign up?</h5>

      </div>
      </div>
      </Router>
    );
}
export default Homepage;