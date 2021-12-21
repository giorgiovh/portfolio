import React, { Component } from 'react';
// import { Route } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

class App extends Component {
  state = {
    navItems: [
      {url: "/", name: "Home"}, 
      {url: "/projects", name: "Projects"}, 
      {url: "/skills", name: "Skills"},
      {url: "/education", name: "Education"},
      {url: "/experience", name: "Experience"},
      {url: "/contact", name: "Contact"},
    ]
  }
  render() {
    return (
      <>
        <NavBar navItems={this.state.navItems}/>
        <h1>Hello</h1>
      </>
    );
  }
}

export default App;

