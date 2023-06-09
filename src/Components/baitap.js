import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
class Baitap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hk1: '',
      hk2: '',
      diemtb: ''
    };
  }

  myChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value }, () => {
      const { hk1, hk2 } = this.state;
      const diemtb = (parseFloat(hk1) + parseFloat(hk2)) / 2;
      this.setState({ diemtb });
    });
  }

  handleSubmit = (event) => {
    const { diemtb } = this.state;
    if (diemtb >= 8) {
      alert("Bạn đạt học sinh giỏi");
    } else if (diemtb >= 6.5) {
      alert("Bạn đạt học sinh khá");
    } else if (diemtb >= 5) {
      alert("Bạn đạt học sinh trung bình");
    } else {
      alert("Bạn ở lại !");
    }
    event.preventDefault();
  }

  render() {
    const { hk1, hk2, diemtb } = this.state;
    return (
      <>
        <Form onSubmit={this.handleSubmit} className="baitap-form" align="center">
          <Form.Group controlId="hk1">
            <Form.Label>Điểm Học Kỳ 1</Form.Label>
            <Form.Control
              type="number"
              name="hk1"
              value={hk1}
              onChange={this.myChange}
              placeholder="Điểm Học Kỳ 1"
            />
          </Form.Group>

          <Form.Group controlId="hk2">
            <Form.Label>Điểm Học Kỳ 2</Form.Label>
            <Form.Control
              type="number"
              name="hk2"
              value={hk2}
              onChange={this.myChange}
              placeholder="Điểm Học Kỳ 2"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>

          <p>Điểm trung bình: {Math.round(diemtb)}</p>
        </Form>
      </>
    );
  }
}

export default Baitap;

;