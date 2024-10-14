// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { useState } from 'react';
import './App.css'
import { Component } from 'react';

// function App() {
//   const [counter, setCounter] = useState(0); 

//   return (
//     <>
//       <div>counter : {counter}</div>
//       <button 
//         onClick={() => {
//           setCounter((prev) => prev + 1)
//         }}
//       >+</button>

//       <button 
//         onClick={() => {
//           setCounter((prev) => prev + -1)
//         }}
//       >-</button>
//     </>);
// }

class App extends Component {
  state = { counter: 2 }

  render() {
    return (
      <>
        <div>counter {this.state.counter}</div>
        <button 
          onClick={() => this.setState({ counter: this.state.counter + 1})}
        >+</button>
        <button 
          onClick={() => this.setState({ counter: this.state.counter - 1})}
        >-</button>
      </>
    )
  }
}

export default App;
