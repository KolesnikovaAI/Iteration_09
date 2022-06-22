import React, { Component } from 'react'

export default class Count extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        count: 0,
     }

     this.increment = this.increment.bind(this);
     this.decrement = this.decrement.bind(this);
     this.resert = this.resert.bind(this);

   }

   increment (){
      this.setState(state => ({
         count: state.count + 1
      })

      )
   }

   decrement (){
      this.setState(state => ({
         count: state.count - 1
      })

      )
   }

   resert (){
      this.setState({
         count: 0
      })
   }
   
  render() {
    return (
      <div>
        <button onClick = {this.increment}>increment</button>
        <button onClick = {this.decrement}>decrement</button>
        <button onClick = {this.resert}>resert</button>
        <h1>Current {this.state.count}</h1>
      </div>
    )
  }
}
