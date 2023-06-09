import React, { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      address: "",
      class: "PNV24A",
      myArray: []
    };
    this.Submit = this.Submit.bind(this);
    this.myChange = this.myChange.bind(this);
    this.mychangeClass = this.mychangeClass.bind(this);
  }

  myChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  mychangeClass(event) {
    this.setState({ class: event.target.value });
  }

  Submit(event) {
    const { username, address, class: className } = this.state;
    const newData = { username, address, className };
    this.setState((prevState) => ({
      myArray: [...prevState.myArray, newData],
      username: "",
      address: "",
      class: "PNV24A",
    }));
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form align="center">
          <h1>Xin mời nhập tên của bạn </h1>
          Nhập tên :{" "}
          <input type="text" name="username" onChange={this.myChange} />
          <br></br>
          <br></br>
          <select
            value={this.state.value}
            onChange={this.mychangeClass}
            name="class"
          >
            <option value="PNV24A">PNV24A</option>
            <option value="PNV24B">PNV24B</option>
          </select>{" "}
          <br></br> <br></br>
          Nhập địa chỉ :{" "}
          <input type="text" name="address" onChange={this.myChange} />
          <br></br> <br></br>
          <input type="button" onClick={this.Submit} value={"Submit"} />
        </form>
        <br></br> <br></br>
        <table align="center">
          <tbody>
            <tr>
              <th>STT</th>
              <th>Tên</th>
              <th>Lớp</th>
              <th>Địa chỉ</th>
            </tr>
            {this.state.myArray.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{item.username}</td>
                <td>{item.className}</td>
                <td>{item.address}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Form;
