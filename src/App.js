import React, { Component } from 'react';

import { CardList } from "./components/card-list/card-list.component";
import { SearchBox} from "./components/search-box/search-box.component";

import './App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {//vai correr o bloco de código quando o react render pela primeira vez a webpage
    fetch('https://jsonplaceholder.typicode.com/users')//fazer um api request ao url retorna uma promise
        .then(response => response.json()) //retorna a promesa em json que é enviada para outra promesa
        .then(users =>this.setState({ monsters: users}));
  }

  handleChange = (e) => { //arrow function usa o this automaticamente LEXICAL SCOPING
     this.setState({searchField: e.target.value})
  };

  render() {
    const { monsters, searchField } = this.state;
    const filterdMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
        <div className="App">
            <h1> Monsters Rolodex </h1>
            <SearchBox
                placeholder='search monsters'
                handleChange={this.handleChange}
            />
            <CardList monsters ={filterdMonsters} />
        </div>
    );
  }
}

export default App;
