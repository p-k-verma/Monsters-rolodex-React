import React, { Component } from 'react'
import axios from 'axios'
import CardList from './card-list/CardList';
import SearchBox from './search-box/Search-box';
import "./App.css"
// import logo from './logo.svg'
export default class App extends Component {
    constructor(){
        console.log("1");
        super();
        this.state = {
            monsters: [],
            searchField: "",
        }
    }

    componentDidMount(){
        console.log("3");
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response)=>{
            console.log(response.data);
            this.setState(()=>{
               return {monsters : response.data}
            })
            console.log("4");
        })
    }

    onsearchChange = (event) => {
        const searchField = event.target.value.toLocaleLowerCase();
        this.setState(() => {
            return { searchField }
        })
    }

  render() {
    console.log("2");

    const filteredMonsters = this.state.monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(this.state.searchField);
    });

    return (
        <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox onChangeHandler = { this.onsearchChange }/>
            <CardList monsters = { filteredMonsters } />
        </div>
    )
  }
}
