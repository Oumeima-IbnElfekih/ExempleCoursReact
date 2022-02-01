import React from "react";

export class Update extends React.Component {

    constructor(props) {
        super(props);
        this.addLikes = this.addLikes.bind(this);
        this.state = { likes: 0, name: "init" };
      }
    
      static getDerivedStateFromProps(props, state) {
        return null;
      }
      shouldComponentUpdate(props, state) {
        if (state.likes > 2) {
          console.log(state.likes);
          return false;
        } else {
          return true;
        }
      }
    
      getSnapshotBeforeUpdate(a, b) {
        console.log(a);
        console.log(b);
    
        return { a, b };
      }
      componentDidUpdate() {
        console.log("current state " + this.state.likes);
      }
      addLikes() {
        this.setState((oldState) => ({
          likes: oldState.likes + 1,
          name: "setState",
        }));
        if (false) {
        }
        console.log(this.state.name);
      }
    
      render() {
        return (
          <div>
            {console.log("rendering")}
            <p>Like : {this.state.likes}</p>
            <p>Like : {this.state.name}</p>
            <button onClick={this.addLikes}>Like</button>
          </div>
        );
      }
}