import React, { Component } from 'react'





export default class Nav extends Component {
   constructor(props) {
     super(props)
   
     this.state  = {
      title: 'Navigation',
      subtitle: 'Main menu',
      show: 'show'

     }
   
   }
   showNav = () => {//функция,выполняемая при событии
      this.setState({show:'hide'});//метод setState указываем какой state и как меняем
   }
   
  render() {
   //let nav = {  
   //   'main': '/index',
   //   'about': '/about',
   //   'price': '/buy/price'
   // } Перенесем массив с данными в родителя(в App). там для <Nav /> пропишем атрибут nav = {nav}. 
   let nav = this.props.nav;//присвоим переменную nav, чтобы везде не писать this.props.nav
    return (
      <div>
         <button type="button" onClick={this.showNav}>Show menu</button>{/*Событие(нажатие на кнопку) и функция,выполняемая при событии */}
         <h1>{this.state.title}</h1>
         <h2>{this.state.subtitle}</h2>
         <p>{this.state.show}</p>
         <ul>
            {Object.keys(nav).map(elem=> {
               return <li>
                     <a href = {nav[elem]}>{elem}</a>
               </li>
            })}
         </ul>
        
      </div>
    )
  }
}