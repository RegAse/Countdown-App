import AppRouter from './AppRouter';
import { BiArchive } from "react-icons/bi"
import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0 };
  }

  tick() {
    // Here i can do some javascript magic....
    
    this.setState(state => ({
      seconds: state.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        seconds: {this.state.seconds }
      </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="http://localhost:3000">Timer App</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="http://localhost:3000/about">About</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li>
            </ul>
            <span class="navbar-text">
              Navbar text with an inline element
            </span>
          </div>
        </div>
      </nav>

      <header className="App-header">
      </header>
      <div className='container'>
        <div className='row'>
          <h1 className='header-m1'>
            <BiArchive /> Welcome to my Timer
            <Timer/>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
