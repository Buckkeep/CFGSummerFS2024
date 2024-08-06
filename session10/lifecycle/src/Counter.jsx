import React, { Component } from "react";

export default class Counter extends Component {

  constructor(props) {
    super(props)
    this.state = {
        count: 0
    }
    console.log("Constructor initialising state")
  }

  componentDidMount() {
    console.log("Did Mount: Components have mounted.")
  }

  componentDidUpdate() {
    console.log("Did Update: Component has updated.")
  }

  componentWillUnmount() {
    console.log("Will Unmount: The component is about to unmount")
  }

  increment = () => {
    this.setState({count: this.state.count + 1})
  }

  render() {
    console.log("Render: Components are rendering")
    return(
        <>
            <h2>Count {this.state.count}</h2>
            <button onClick={this.increment}>Increment</button>
        </>
    )
  }
}
