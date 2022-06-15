import React, { Component } from 'react';
import "../card/card.styles.css"

export default class card extends Component {
  render() {

    const {id, name, email} = this.props.monster;

    return (
      <div>
        <div className='card-container' key={id}>
                <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                <h2>{name}</h2>
                <p>{email}</p>
        </div>
      </div>
    )
  }
}
