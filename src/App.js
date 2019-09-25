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
        <div className="App justify-content-center">
          <Form  className={"col-lg-6 offset-lg-3"}>
              <h2>Input your birthday</h2>
              <div className={"row justify-content-center"}>
                  <FormControl  className={"col-lg-5 "}
                      type = "date"
                      onChange = {event => this.setState({date: event.target.value})}
                  />
              </div>
              <br/>
              <Button onClick={this.changeBirthday()}>Submit</Button>
              <AgeState date = {this.state.date}/>
          </Form>

        </div>
    );
  }
}

export default App;
