//import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
//rconst сниппет создает конструктор
export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      text: 'Hello',
      text2: 555,
    }

    this.showText = this.showText.bind(this);    //чтобы this передать внутри метода showText(bind-связать)
    this.showText2 = this.showText2.bind(this)
  
  }
  showText () {
    console.log('work');
    this.setState({text: 'Hi'})
  }
  //или написание метода через стрелочную функцию
  //showText = () => {
  //  console.log('work');
  //  this.setState({text: 'Hi'})
  //}


  showText2(event){
    this.setState({text2: event.target.value});//this.setState-какой компонент и как менять
    //console.log(this.state.text2);
    console.log(event.target.value)//event.target-получить элемент на котором произошло событие
  }

  render() {
    return (
      <div>
        <button onClick = {this.showText}>Push1</button>
        <input onInput = {this.showText2}/> {/*defaultValue = {this.state.text} значение input по умолчанию */}
        <p>{this.state.text}</p>
        <p>{this.state.text2}</p>
      </div>
    )
  }
}


/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/
