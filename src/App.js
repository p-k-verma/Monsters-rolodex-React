import React, { Component } from 'react'
import axios from 'axios'
// import logo from './logo.svg'
export default class App extends Component {
    constructor(){
        console.log("1");
        super();
        this.state = {
            monsters: []
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

  render() {
    console.log("2");
    return (
        <>
            <div>App</div>
            { this.state.monsters.map((dataw)=>{
               return <p key={dataw.name}>Hi this is for the {dataw.name} </p>
            }) }
            {/* <button onClick={()=>this.setState({string: "bccccc"})}>Chnge the text</button> */}
            {/* <img src={ logo } alt="" /> */}
        </>
    )
  }
}
