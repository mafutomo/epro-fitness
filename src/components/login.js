import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite, grey400} from 'material-ui/styles/colors';
import './login.css'

import {
  Link,
  Redirect
} from 'react-router-dom'

import Hormones from './hormones'

const style = {
  margin: 12,
  floatingLabelStyle: {
    textAlign: 'center',
    color: fullWhite,
  },
  inputStyle: {
    color: fullWhite,
  },
  hintStyle: {
    color: grey400,
  }
};

let deviceMemory = JSON.parse(localStorage.getItem('user')) || localStorage.setItem('user', JSON.stringify(1));;

let showModal;

if(deviceMemory > 0){
   showModal = false;
} else {
   showModal = true;
}


class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: showModal,
      email: '',
      password: '',
      token: '',
      message: '',
      loggedIn: false
    }
  }

  loginUser = async (e, {email, password}) => {
    e.preventDefault()
    const response = await fetch ('https://epro-api.herokuapp.com/auth/login', {
      method: 'POST',
      body: JSON.stringify({
        email,
        password
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })

    const logged = await response.json()
    if (logged.auth_token) {
      this.setState({
        token: logged.auth_token,
        message: logged.message,
        loggedIn: true
      })
      localStorage.setItem('token', logged.auth_token)
    } else {
      this.setState({
        message: logged.message
      })
    }
    window.location.reload()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClose = () => {
    this.setState({open: false});
    localStorage.setItem('user', JSON.stringify(2));
  };

  render() {

    const {loggedIn} = this.state
    if (loggedIn) {

      return (

        <Redirect to='/hormones' render={()=> (
          <Hormones
          user={3033}/>
        )}/>
      )
    }

    return (
      <div className="backgroundImage">
        <img src={require("./homepage.jpg")} className="bg" alt="woman lifting" />
        <p className="title-app">E/Pro</p>

        <form onSubmit={(e)=>{this.loginUser(e, this.state)}} >
        <TextField
        hintText="example@email.com"
        hintStyle={style.hintStyle}
        floatingLabelText="email login"
        floatingLabelStyle={style.floatingLabelStyle}
        inputStyle={{color: fullWhite}}
        value={this.state.email}
        onChange={this.handleChange}
        name="email"
        /><br />

      <Dialog
         modal={false}
         open={this.state.open}
         onRequestClose={this.handleClose}
         className="dialog-box"
         autoScrollBodyContent={true}
         >
         <h2 className = "modalHead"> Women Are Not Small Men</h2>

         <img className = "screen-shot" src={require('./screens.png')} alt="mobile view"/>

         <div className = "modal-group">
         <p className = "modal-body">
         Stop eating and training like one.</p>

         <p className = "modal-body">E / Pro  <span className="pronounce"> /ēprō/ </span> is a training app specifically designed for active women. We analyze your unique menstrual cycle and birth control method to provide a training and nutrition guide each week.</p>

         <p className="modal-body">No matter what your sport is―running, lifting, field sports, climbing―work with, rather than against, your female physiology.</p>

         <FlatButton
         label="Get Started"
         secondary={true}
         onClick={this.handleClose}/>

         <p className="disclaimer">DISCLAIMER: The information on this site is not intended or implied to be a substitute for professional medical advice, diagnosis or treatment. All content, including text, graphics, images and information, contained on or available through this web site is for general information purposes only. </p>
         </div>

     </Dialog>

        <TextField
          hintText=""
          hintStyle={style.hintStyle}
          floatingLabelText="password"
          floatingLabelStyle={style.floatingLabelStyle}
          inputStyle={{color: fullWhite, textAlign: 'center'}}
          color="white"
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          name="password"
        /><br />
        <br />
        <br />
        <br />

        <Link to={`/account`}>
          <RaisedButton label="Register" backgroundColor='#FF3E00' labelColor='white'  style={style}/>
        </Link>

         <RaisedButton label="Login" backgroundColor='#52BFAB' labelColor='white' style={style} type="submit"/>




       </form>


      </div>
    )
  }
}


export default Login;
