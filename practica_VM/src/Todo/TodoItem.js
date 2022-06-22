import React, {Component} from "react";
//import PropTypes from 'prop-types';

const styles = {
   li:{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '.5rem 1rem',
      border: '1px solid grey',
      borderRadius: '4px',
      marginBottom: '.5rem'
   }, 
   input:{
      marginRight: '1rem'
   }
}

//function TodoItem ({todo, index}) {
//   return (
     {/*<li style = {styles.li}>
         <span>
            <input type = "checkbox" style = {styles.input}/>
            &nbsp; {/*специальный символ неразрывный пробел
            <strong>{index + 1}</strong>
            {todo.title}
         </span>
         <button className='rm'>&times;</button>{/*специальный символ
      
   </li>*/}
//  )
//}





export default class TodoItem extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }
   
   
  render() {
   const todo = this.props.todo;
   const index = this.props.index;
    return (
      <div>
        <li style = {styles.li}>
         <span>
            <input type = "checkbox" style = {styles.input}/>
            <strong>{index + 1}</strong>
            &nbsp;{/*специальный символ неразрывный пробел*/}
            {todo.title}
         </span>
         <button className='rm'>&times;</button>{/*специальный символ, стиль кнопки задан в index.css*/}
      
      </li>
      </div>
    )
  }
}



//export default TodoItem

