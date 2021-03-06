import logo from './logo.svg';
import React, { Component } from 'react'
import {Cardlist} from './components/card-list/card-list-components'
import { SearchBox } from './components/search.box/search.box.component'
import './App.css';


class App extends Component{
  constructor(){
    super();
    this.state ={
    monsters:[],
    searchField : ''} }


componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(res=> res.json())
  .then(users => this.setState({monsters : users}));
}


render(){

  const {monsters , searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
  monster.name.toLowerCase().includes(searchField.toLowerCase()));



  return(
    <div className = "App">
      <h1>Monster Rolodex</h1>
      <SearchBox 
        placeholder = 'Search monster'
        handleChange ={e =>{ 
        this.setState({searchField : e.target.value},() => console.log(this.state))
        }}
      />
      <Cardlist 
        monsters = {filteredMonsters}
      />
    </div>
  )
}
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;



// https://jsonplaceholder.typicode.com/users
