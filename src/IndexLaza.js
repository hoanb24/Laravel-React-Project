import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class IndexLaza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      allProducts: [],
      newProducts: [],
      saleProducts: [],
    };
  }

  componentDidMount() {
    // Gọi API và lấy dữ liệu sản phẩm
    fetch("http://127.0.0.1:8000/api/get-product-laza")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          products: data,
          allProducts: data,
          newProducts: data.filter((product) => product.new === 1),
          saleProducts: data.filter(
            (product) => product.promotion_price !== "0"
          ),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  renderProductCards(products) {
    return (
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 " key={product.id}>
            <div
              className={`card mb-4 ${
                product.new === "1" ? "new-product" : ""
              }`}
            >
              {product.promotion_price !== "0" && (
                <span className="badge bg-danger position-absolute top-0 start-0">
                  Sale
                </span>
              )}
              <img
                src={`http://localhost:8000/source/image/product/${product.image}`}
                className="card-img-top"
                alt={product.name}
                style={{objectFit:'cover'}}
              />
              <div className="card-body">
                <h5
                  className={`card-title ${
                    product.promotion_price !== 0   ? "text-danger" : ""
                  }`}
                >
                  {product.name}
                </h5>
                <p className="card-text">{product.description}</p>
                <span>
                  <p className="card-text price">đ {product.unit_price}</p>
                  {product.new === 1  && (
                    <span className="badge bg-primary">New</span>
                  )}
                  {product.promotion_price !== "0" && (
                    <p className="card-text">
                      đ{" "}
                      <span className="text-danger">
                        {product.promotion_price}
                      </span>
                    </p>
                  )}
                </span>
                <button className="btn btn-primary">Mua</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }

  render() {
    const { allProducts, newProducts, saleProducts } = this.state;

    return (
      <div className="container">
        <h2 className="ap"></h2>
        {this.renderProductCards(allProducts)}
        <h2 className="new"></h2>
        {this.renderProductCards(newProducts)}
        <h2 className="sale"></h2>
        {this.renderProductCards(saleProducts)}
      </div>
    );
  }
}

export default IndexLaza;
