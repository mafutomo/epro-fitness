import React, {Component} from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  customWidth: {
    width: 200,
  },
};

const style = {
  margin: 12,
  };

class Account extends Component {

  constructor(props) {
    super(props);
    this.state = {
      secondSlider: 21,
      thirdSlider: 12,
      checked: false,
      thirdSlider: 12,
      fname: "",
      lname: "",
      email: "",
      password: "",
      cycleLength: 0,
      dayOfLastPeriod: "",
      age: 0,
      nonhormonal: false,
      triphasic: false,
      monophasic: false,
      progestin: false
    }
  }

  handleSecondSlider = (event, value) => {
      this.setState({secondSlider: value});
    };

  handleThirdSlider = (event, value) => {
      this.setState({thirdSlider: value});
    };

  updateCheck() {
    this.setState((oldState) => {
      return {
        checked: !oldState.checked,
      };
    });
  }

  createUser = async ({fname, lname, email, password, cycleLength, dayOfLastPeriod, age, nonhormonal, triphasic, monophasic, progestin}) => {
    await fetch ('https://epro-api.herokuapp.com/users/register', {
      method: 'POST',
      body: JSON.stringify({
        first_name: fname,
        last_name: lname,
        email: email,
        password: password,
        age: age,
        first_day: dayOfLastPeriod,
        cycle_length: cycleLength,
        non_hormonal: nonhormonal,
        triphasic: triphasic,
        monophasic: monophasic,
        progestin: progestin
      }),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  booleanChange = (e) => {
    this.setState({
      [e.target.name]: true
    })
  }

  render() {
      return (

        <div style={styles.block}>

          <p className="title-app">Account</p>

        <form onSubmit={()=>{this.createUser(this.state)}}>

        <TextField
         floatingLabelText="First Name"
         name="fname" value={this.state.fname} onChange={this.handleChange}
         /><br />
        <TextField
         floatingLabelText="Last Name"
         name="lname" value={this.state.lname} onChange={this.handleChange}
        /><br />
        <TextField
         floatingLabelText="Email"
         hintText="example@email.com"
         name="email" value={this.state.email} onChange={this.handleChange}
        /><br />
        <TextField
         floatingLabelText="Password"
         name="password" value={this.state.password} onChange={this.handleChange}
        /><br />
        <TextField
         floatingLabelText="Re-type Password"
        /><br />
        <br />
        <p>
          <span>{'Your Cycle Length: '}</span>
          <span>{`${this.state.secondSlider} Days`}</span>
        </p>
        <Slider
          min={21}
          max={36}
          step={1}
          style={{margin:35}}
          value={this.state.secondSlider}
          onChange={this.handleSecondSlider}
          name="cycleLength" value={this.state.cycleLength} onChange={this.handleChange}
        />
        <DatePicker hintText="Day of Last Period"
        name="dayOfLastPeriod" value={this.state.dayOfLastPeriod} onChange={this.handleChange}
        />
        <br />

        <p>
          <span>{'Age: '}</span>
          <span>{`${this.state.thirdSlider}`}</span>
        </p>
        <Slider
          min={12}
          max={99}
          step={1}
          style={{margin:35}}
          value={this.state.thirdSlider}
          onChange={this.handleThirdSlider}
          name="age" value={this.state.age} onChange={this.handleChange}
        />
        <br />

            <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Birth Control Method</TableHeaderColumn>
            <TableHeaderColumn>Examples</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'40%'}}
            name="nonhormonal" value={this.state.nonhormonal} onChange={this.booleanChange}>Non Hormonal</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'60%'}}>None, Condoms, Paraguard/CopperIUD</TableRowColumn>
          </TableRow>
          <TableRow name="triphasic" value={this.state.triphasic} onChange={this.booleanChange}>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'40%'}}>Triphasic</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'60%'}}>Combination Birth Contol Pill - Varied Amount
            , Ortho Tricyclen</TableRowColumn>
          </TableRow>
          <TableRow name="monophasic" value={this.state.monophasic} onChange={this.booleanChange}>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'40%'}}>Monophasic</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'60%'}}>Combination Birth Contol Pill - Same Amount
            , Levora </TableRowColumn>
          </TableRow>
          <TableRow name="progestin" value={this.state.progestin} onChange={this.booleanChange}>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'40%'}}>Progestins</TableRowColumn>
            <TableRowColumn style={{whiteSpace: 'normal', wordWrap: 'break-word', width:'60%'}}>Mirena IUD, Skyla, Mini Pill, Depo Shot, The Ring</TableRowColumn>
          </TableRow>
        </TableBody>
      </Table>

      <RaisedButton label="Cancel" backgroundColor='#FF3E00' labelColor='white' style={style} />
      <RaisedButton label="Submit" backgroundColor='#52BFAB' labelColor='white' style={style} type='submit'/>

      </form>

        </div>
      )
    }
  }


export default Account;
