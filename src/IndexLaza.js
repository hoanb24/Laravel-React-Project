import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CartPage from "./CartPage";
import swal from "sweetalert";


class IndexLaza extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      allProducts: [],
      newProducts: [],
      saleProducts: [],
      searchTerm: "",
      searchResults: [],
      cart: [],
      isCartVisible: false
    };
  }

  showCart = () => {
    this.setState({ isCartVisible: true });
  };


  addToCart = (product) => {
    const { cart } = this.state;
    const updatedCart = [...cart, { ...product, quantity: 1 }];
    this.setState({ cart: updatedCart });
  
    const products = updatedCart;
    // Thêm sản phẩm vào session
    sessionStorage.setItem("cart", JSON.stringify(products));
  
    // Hiển thị thông báo thành công
    swal("Success!", "Hàng đã được thêm vào giỏ.", "success");
    console.log(updatedCart);
  };
  
  handleSearch = (event) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearchSubmit = () => {
    const { allProducts, searchTerm } = this.state;

    // Lọc sản phẩm dựa trên giá trị của searchTerm
    const searchResults = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    this.setState({ searchResults });
  };

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

  render() {
    const {
      allProducts,
      newProducts,
      saleProducts,
      searchTerm,
      searchResults,
      cart,
      isCartVisible,
    } = this.state;
    const products = searchResults.length > 0 ? searchResults : allProducts;
    const showSearchResults = searchResults.length > 0;

    return (
      <div className="container">
        {/* <div className="row">
          <div className="col-md-3">
            <h2>Giỏ hàng</h2>
            <ul>
              {this.state.cart.map((product) => (
                <li key={product.id}>{product.name}</li>
              ))}
            </ul>
          </div>
        </div> */}
        <div className="input-group mb-3 justify-content-end 2 search">
          <input
            type="text"
            className="form-control col-2"
            placeholder="Tìm kiếm sản phẩm..."
            value={searchTerm}
            onChange={this.handleSearch}
          />
          <button
            className="btn btn-primary"
            type="button"
            onClick={this.handleSearchSubmit}
          >
            Tìm kiếm
          </button>
        </div>

        {showSearchResults && (
          <p>Tìm thấy {searchResults.length} sản phẩm</p>
        )}

        {showSearchResults ? (
          <div className="row">
            {products.map((product) => (
              <div className="col-md-3" key={product.id}>
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
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5
                      className={`card-title ${
                        product.promotion_price !== 0 ? "text-danger" : ""
                      }`}
                    >
                      {product.name}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <span>
                      <p className="card-text price">
                        đ {product.unit_price}
                      </p>
                      {product.new === 1 && (
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
                    <button
                   className="btn btn-primary"
                   onClick={() => this.addToCart(product)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            <h2 className="ap"></h2>
            {allProducts.map((product) => (
              <div className="col-md-3" key={product.id}>
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
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5
                      className={`card-title ${
                        product.promotion_price !== 0 ? "text-danger" : ""
                      }`}
                    >
                      {product.name}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <span>
                      <p className="card-text price">
                        đ {product.unit_price}
                      </p>
                      {product.new === 1 && (
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
                    <button
                       className="btn btn-primary"
                       onClick={() => this.addToCart(product)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <h2 className="new"></h2>
            {newProducts.map((product) => (
              <div className="col-md-3" key={product.id}>
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
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5
                      className={`card-title ${
                        product.promotion_price !== 0 ? "text-danger" : ""
                      }`}
                    >
                      {product.name}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <span>
                      <p className="card-text price">
                        đ {product.unit_price}
                      </p>
                      {product.new === 1 && (
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
                    <button
                      className="btn btn-primary"
                      onClick={() => this.addToCart(product)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
            <h2 className="sale"></h2>
            {saleProducts.map((product) => (
              <div className="col-md-3" key={product.id}>
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
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5
                      className={`card-title ${
                        product.promotion_price !== 0 ? "text-danger" : ""
                      }`}
                    >
                      {product.name}
                    </h5>
                    <p className="card-text">{product.description}</p>
                    <span>
                      <p className="card-text price">
                        đ {product.unit_price}
                      </p>
                      {product.new === 1 && (
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
                    <button
                      className="btn btn-primary"
                      onClick={() => this.addToCart(product)}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    );
  }
}

export default IndexLaza;
