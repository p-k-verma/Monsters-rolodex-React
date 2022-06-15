import React, { Component } from 'react'
import './search-box.styles.css'

export default class searchBox extends Component {
  render() {
    return (
      <div>
        <input type="search" className='search-box' placeholder='search monsters' onChange={ this.props.onChangeHandler } />
      </div>
    )
  }
}
