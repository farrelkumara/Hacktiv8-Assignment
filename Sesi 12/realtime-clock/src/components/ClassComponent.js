import React from "react";

class ClassComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div className="App">
        <h1>Realtime CLOCK using Class Component</h1>
        <hr />
        <h1>{this.state.date.toLocaleTimeString()}</h1>
        <h1>{this.state.date.toLocaleDateString()}</h1>
      </div>
    );
  }
}

export default ClassComponent;
