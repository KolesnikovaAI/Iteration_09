//шаблон классового компонента создается командой rcc

import React, { Component } from 'react'

export default class Ccomponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       surname:'Ivanov',
       visibility: false ,
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick () {
    this.setState({surname:'Sidorov'})
    this.setState(state => ({
      visibility: !state.visibility
    }));
  }
   
  render() {
    if ( this.state.visibility){
    return (
      <div>
        <h1>Class component. {this.props.numbers.join(',')}</h1>
        <div>Hi, {this.props.name} {this.state.surname}!</div>
        <button onClick={this.handleClick}>Click!</button>
      </div>
    );
  }
  else {
    return (
      <button onClick={this.handleClick}>Click!</button>
    )
  }
}}

Ccomponent.defaultProps = {//значение props по умолчанию
   name: 'Alex'
}