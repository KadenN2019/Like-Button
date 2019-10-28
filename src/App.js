import React, { Component } from 'react';
import './App.css';

class MyComponent extends Component{
  state = {
    likes: 0,
    word: 'likes'
  }
  
  handleClick = e =>{
    if(this.state.likes === 0){
      this.setState({
        word: 'like'
      })
      }else{
        this.setState({
          word: 'likes'
        })
    }
    this.setState({
      likes: this.state.likes +1
    })
  }


  
  render(){

    return(
      <div id="body">
        <button id="two" onClick={this.handleClick}>{this.state.likes} {this.state.word}</button>
      </div>
    )
  }
}


export default MyComponent;
