import React, { Component } from 'react'


export default class GitInfo extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        
     }
   }

  getGitInfo () {
  fetch('https://api.github.com/users/VasilyMur')
 .then(response=>response.json())
 .then(response=>{
    console.log(response)
 }); 
   }

   
   render() {
     return (
       <div>
         <input placeholder={'Введите GIT'}/>
         <button onClick = {this.getGitInfo}>GO!</button>
         <p>{this.props.url}</p>
         <img src= {this.props.img}/>
       </div>
     )
   }
}



