import React from "react";

class ClassConter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "Hi",
    };
  }

//   onChange() {
//     this.setState(
//         {value: this.state.value + }
//     )
//   }

  render() {
    return (
      <div>
        <h1>{this.state.value}</h1>
        <input
          value={this.state.value}
        //   onChange={this.onChange}
        />
      </div>
    );
  }
}

export default ClassConter
