import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "User",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "User",
      });
    }, 2000);
  }

  render() {
    return (
      <div>
        Parent Comp
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name}></PureComp>
      </div>
    );
  }
}

export default ParentComp;
