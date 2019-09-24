import React from 'react';
import './App.css';
import {Form , FormControl ,Button} from 'react-bootstrap'
import './AgeState'
import AgeState from "./AgeState";
class App extends React.Component {

  constructor(){
    super()
    this.state ={
      date :""
    }
  }
  changeBirthday(){
    console.log(this.state)
  }
  render() {
    return (
        <div className="App">
          <h3>Input your birthday</h3>
          <Form inline >
            <FormControl className={"text-center"}
            type = "date"
            onChange = {event => this.setState({date: event.target.value})}
            />
          </Form>
          <Button onClick={this.changeBirthday()}>Submit</Button>
            <AgeState date = {this.state.date}/>
        </div>
    );
  }
}

export default App;
