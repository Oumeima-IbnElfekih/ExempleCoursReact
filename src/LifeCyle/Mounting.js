import React,{ Component } from "react";

export default class Mouting extends React.Component {
   
  constructor(props) {
    super(props);
    console.log("je suis le constructeur");
    //méthode attachée
    this.addLikes = this.addLikes.bind(this);
  this.state = { likes: 0 };
  }
  
  static getDerivedStateFromProps(props, state) {
    console.log(props.name);
    console.log("getting props and init states !!!");
    return null;
  }
  componentDidMount() {
    console.log("component did mount !!!");
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
        {console.log("rendering")}
        <p>Like : {this.state.likes}</p>
        <button onClick={this.addLikes}>Like</button>
        <button onClick={this.displayMessage}>Click me</button>
      </div>
    );
  }
   
}