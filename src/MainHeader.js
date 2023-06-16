import React from "react";
import { useNavigate } from "react-router-dom";
import "./header.css";
export default function MainHeader() {
  const navigate = useNavigate();

  const handleCartButtonClick = () => {
    navigate("/shoppingcart");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div>
      <section>
        <div className="logo-bar-content header-content">
          <div className="lzd-logo-content">
            <a href="http://localhost:3000/trangchu">
              <img
                src="//laz-img-cdn.alicdn.com/images/ims-web/TB1T7K2d8Cw3KVjSZFuXXcAOpXa.png"
                alt="Online Shopping Lazada.vn Logo"
              />
            </a>
          </div>
          <button className="log-icon" onClick={handleLogin} >
            <img src="https://cdn-icons-png.flaticon.com/512/6681/6681204.png"/>
          </button>
          <button className="lzd-nav-cart" onClick={handleCartButtonClick}></button>
          <div className="lzd-header-banner">
            <img src="https://icms-image.slatic.net/images/ims-web/ef96c528-97f9-46b7-a279-275e1e8438c2.png" />
          </div>
        </div>
      </section>
    </div>
  );
}
