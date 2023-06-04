import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import StudentTable from './components/studentTable';
import NewStudent from './components/newStudent';
class App extends Component {
  state = { 
    modalSwitch:false
 }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <StudentTable />
        <NewStudent 
          onAddStudent={ this.state.modalSwitch }
          onModalExit={ this.handleModalExit   }
          />
        <button type="button" className="btn btn-primary" onClick={this.handleAddStudent}>Add Student</button>
      </React.Fragment>      
    );
  }
  handleAddStudent=()=>{
    this.setState({modalSwitch: true});
  }
  handleModalExit=()=>{
    this.setState({modalSwitch: false});
  }
}

export default App;
