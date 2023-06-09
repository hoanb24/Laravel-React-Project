import React, { useState } from "react";
import { Container, Table, Button, Modal, Form } from "react-bootstrap";
import data from "./data";

const AdminPage = () => {
  const [productData, setProductData] = useState(data.productData);
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalId, setModalId] = useState(0);
  const [modalImg, setModalImg] = useState("");
  const [modalPrice, setModalPrice] = useState(0);

  const handleAddProduct = () => {
    setModalTitle("Thêm sản phẩm");
    setModalId(0);
    setModalImg("");
    setModalPrice(0);
    setShowModal(true);
  };

  const handleEditProduct = (id) => {
    const product = productData.find((p) => p.id === id);
    if (product) {
      setModalTitle(product.title);
      setModalId(product.id);
      setModalImg(product.img);
      setModalPrice(product.price);
      setShowModal(true);
    }
  };

  const handleDeleteProduct = (id) => {
    const updatedData = productData.filter((product) => product.id !== id);
    setProductData(updatedData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (modalId === 0) {
      // Thêm sản phẩm mới
      const newProduct = {
        id: productData.length + 1,
        img: modalImg,
        title: event.target.title.value,
        desc: "",
        price: parseFloat(modalPrice),
      };
      setProductData([...productData, newProduct]);
    } else {
      // Chỉnh sửa thông tin sản phẩm
      const updatedData = productData.map((product) =>
        product.id === modalId
          ? {
              ...product,
              img: modalImg,
              title: event.target.title.value,
              price: parseFloat(modalPrice),
            }
          : product
      );
      setProductData(updatedData);
    }

    setShowModal(false);
  };

  return (
    <Container>
      <h1>Quản lý sản phẩm</h1>
      <Button variant="primary" onClick={handleAddProduct}>
        Thêm sản phẩm
      </Button>
      <Table striped bordered>
        <thead>
          <tr>
            <th>ID</th>
            <th>Ảnh</th>
            <th>Tên</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {productData.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>
                <img
                  src={product.img}
                  alt={product.title}
                  style={{ width: "100px" }}
                />
              </td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>
                <Button
                  variant="info"
                  onClick={() => handleEditProduct(product.id)}
                >
                  Chỉnh sửa
                </Button>{" "}
                <Button
                  variant="danger"
                  onClick={() => handleDeleteProduct(product.id)}
                >
                  Xóa
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="title">
              <Form.Label>Tên sản phẩm</Form.Label>
              <Form.Control
                type="text"
                defaultValue={modalTitle === "Thêm sản phẩm" ? "" : modalTitle}
                required
              />
            </Form.Group>
            <Form.Group controlId="img">
              <Form.Label>URL ảnh</Form.Label>
              <Form.Control
                type="text"
                defaultValue={modalImg}
                onChange={(e) => setModalImg(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group controlId="price">
              <Form.Label>Giá</Form.Label>
              <Form.Control
                type="number"
                step="0.01"
                defaultValue={modalPrice}
                onChange={(e) => setModalPrice(e.target.value)}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              {modalTitle === "Thêm sản phẩm" ? "Thêm" : "Lưu"}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AdminPage;
