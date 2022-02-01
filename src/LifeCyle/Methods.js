import React,{ Component } from "react";

export default class Methods extends React.Component {

    constructor(props) {
        super();
    
        //méthode attachée
        console.log(this.props);
        this.addLikes = this.addLikes.bind(this);
        this.state = { likes: 0 };
      }
   
      addLikes() {
        this.setState((oldState) => ({
          likes: oldState.likes + 1,
        }));
      }
      //méthode non attachée
      displayMessage() {
        console.log("hello it's me !!!");
      }
    
      render() {
        return (
          <div>
            <p>Like : {this.state.likes}</p>
            <button onClick={this.addLikes}>Like</button>
            <button onClick={this.displayMessage}>Click me</button>
          </div>
        );
      }
}