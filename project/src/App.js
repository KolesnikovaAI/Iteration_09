//import logo from './logo.svg';
import './App.css';// импорт(вставка) файла стилей
import Technologies from './Technologies';
import Header from './Header';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Nav from './Nav';
import Count from './Count';
import GitInfo from './GitInfo';


//'./' в той же папке,что уже находимся

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
}*/


let user ={
  img:'https://avatars.githubusercontent.com/u/33893288?v=4',
  url:'https://api.github.com/users/VasilyMur'
}

const App = () =>{
  let nav = {
    'main': '/index',
    'about': '/about',
    'price': '/buy/price'
  }
  return (//должен быть один родительский тег
  
  <div>
    <Header />
    <Nav nav = {nav}/>
    <Technologies  />
    <Fcomponent name = 'Ivan'/>
    <Ccomponent numbers = {[1,2,3,4]}/>
    <Count />
    <GitInfo img = {user.img} url = {user.url}/>
    
  </div>)
}

/*const Technologies = () =>{
  return (
<div className="App">
      <ul>
        <li>css</li>
        <li>html</li>
        <li>JS</li>
      </ul>
    </div>
  )
}

const Header = () =>{
  return (//должен быть один родительский тег
    <div>
      <a href = "#s">Menu</a>
      <a href = "#s">Home</a>
      <a href = "#s">Messages</a>
    </div>
  )
}
//Создадим для каждого компонента свой файл и импортируем
*/

export default App;
