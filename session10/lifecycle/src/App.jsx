import { Component } from 'react'
import './App.css'
import Counter from './Counter'
import FuncCounter from './FuncCounter'

class App extends Component {

constructor(props) {
  super(props)
  this.state = {
    showCounter: true
  }
}

toggleCounter = () => {
  this.setState({
    showCounter: !this.state.showCounter
  })
}

render() {
  return (
    <>
    <h1>React Lifecycle Methods Demo</h1>
    <button onClick={this.toggleCounter}>{this.state.showCounter ? "Hide " : "Show "}Counter</button>
    {this.state.showCounter && <Counter />}
    <FuncCounter />
    </>
  )
}
}

export default App
