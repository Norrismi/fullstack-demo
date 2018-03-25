import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

//import everything for testing redux connection
import { connect } from "react-redux";
import { testAction } from "./ducks/reducer";

class App extends Component {
  componentDidMount() {
    // axios.get("/api/test").then(response => {
    //   console.log(response);
    // });
    //Finally, test your component to make sure everything is connected
    this.props.testAction();
  }
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <div>
          {this.props.testData.map((val, i) => (
            <div key={i}> {`${val.id} ${val.fname} ${val.id}`} </div>
          ))}
        </div>
      </div>
    );
  }
}

//put your redux store on props in the connected component
// You'll follow this same pattern for every connected component
const mapStateToProps = state => state;
export default connect(mapStateToProps, { testAction })(App);
