import AppRouter from './AppRouter';
import { BiArchive } from "react-icons/bi"
import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hours: "",
      minutes: "",
      seconds: "",
      disabled: false
    };

    // Bind the event handler
    this.handleChange = this.handleChange.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handleFocusOut = this.handleFocusOut.bind(this);
  }

  handleFocusOut(event) {
    console.log("Lost Focus");
    if(event.target.id == "inputNumber1") {
      this.setState(state => ({hours: event.target.value.padStart(2, '0')}));
    }
    else if(event.target.id == "inputNumber2") {
      this.setState(state => ({minutes: event.target.value.padStart(2, '0')}));
    }
    else if(event.target.id == "inputNumber3") {
      this.setState(state => ({seconds: event.target.value.padStart(2, '0')}));
    }
  }

  handleChange(event) {
    console.log("ID: " + event.target.id + ", Value: " + event.target.value);
    if(event.target.id == "inputNumber1") {
      this.setState(state => ({hours: event.target.value}));
    }
    else if(event.target.id == "inputNumber2") {
      this.setState(state => ({minutes: event.target.value}));
    }
    else if(event.target.id == "inputNumber3") {
      this.setState(state => ({seconds: event.target.value}));
    }

    if (event.target.value.length > 1) {
      document.getElementById(event.target.dataset.nextfocus).focus();
      /*this.setState(state => ({
        seconds: state.seconds + 10
      }));*/
    }
  }

  startTimer(event) {
    console.log("START!");
    this.interval = setInterval(() => this.tick(), 1000);
    this.setState(state => ({
      disabled: true
    }));
  }

  tick() {
    // Make the UI update....
    if(this.state.hours == "") {
      this.state.hours = "00";
    }
    if(this.state.minutes == "") {
      this.state.minutes = "00";
    }
    if(this.state.seconds == "") {
      this.state.seconds = "00";
    }

    let totalSeconds = parseInt(this.state.hours) * 3600 + parseInt(this.state.minutes) * 60 + parseInt(this.state.seconds);
    if(totalSeconds <= 0)
    {
      // Do not countdown, it has finished
      // DO ALERT HERE...
      return;
    }

    totalSeconds -= 1;
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor(totalSeconds % 3600 / 60);
    let seconds = Math.floor(totalSeconds % 3600 % 60);

    this.state.hours = hours;
    this.state.minutes = minutes;
    this.state.seconds = seconds;

    // Add padding....
    this.setState(state => ({
      seconds: state.seconds.toString().padStart(2, '0'),
      minutes: state.minutes.toString().padStart(2, '0'),
      hours: state.hours.toString().padStart(2, '0')
    }));
  }

  componentDidMount() {
    //this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='timer'>
        <div className='col-sm-12 col-xs-12 large-font d-flex flex-column min-vh-100 justify-content-center align-items-center timer-content'>
          <div className='d-flex justify-content-center align-items-center'>
            <input id='inputNumber1' autoFocus autoComplete='false' data-nextfocus='inputNumber2' className='flat-input-1' type="text" value={this.state.hours} placeholder='00' maxLength={2} onChange={this.handleChange} onBlur={this.handleFocusOut} disabled={this.state.disabled} />:
            <input id='inputNumber2' autoComplete='false' data-nextfocus='inputNumber3' className='flat-input-1' type="text" value={this.state.minutes} placeholder='00' maxLength={2} onChange={this.handleChange} onBlur={this.handleFocusOut} disabled={this.state.disabled} />:
            <input id='inputNumber3' autoComplete='false' data-nextfocus='startbutton' className='flat-input-1'  type="text" value={this.state.seconds} placeholder='00' maxLength={2} onChange={this.handleChange} onBlur={this.handleFocusOut} disabled={this.state.disabled} />
          </div>
          <div className='col-sm-12 col-xs-12 d-flex justify-content-center'>
            <button id='startbutton' className='btn btn-flat-1' onClick={this.startTimer}>Start!</button>
          </div>
          {/* <h3>Hours: {this.state.hours}, Minutes: {this.state.minutes}, Seconds: {this.state.seconds}</h3> */}
          
        </div>
        <div className='d-none d-sm-block tip-flat-1'>
          <p><b>Note:</b> A Simple Countdown Timer Made With ReactJS</p>
        </div>
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      {/* <nav className="navbar navbar-dark navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:3000">Timer App</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="http://localhost:3000/about">About</a>
              </li>
            </ul>
            <span className="navbar-text">
              Time
            </span>
          </div>
        </div>
      </nav> */}

      <header className="App-header">
      </header>
      <div className='container'>
        <div className='row'>
          {/* <BiArchive /> Timer App! */}
          <Timer />
        </div>
      </div>
    </div>
  );
}

export default App;
