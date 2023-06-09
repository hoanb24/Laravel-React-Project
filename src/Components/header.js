import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
        <section class="banner">
          <div class="img-b">
            <img
              src="https://danavtc.edu.vn/Portals/0/logo.png?ver=2019-10-13-182116-600"
              alt=""
            />
          </div>
          <div class="content-b">
            <div>
              <h1>TRƯỜNG CAO ĐẲNG NGHỀ ĐÀ NẴNG</h1>
              <h4>DANANG VOCATIONAL TRAINNING COLLEGE</h4>
            </div>
            <div>
              <i class="fa-solid fa-location-dot"></i> 99 Tô Hiến Thành, Sơn
              Trà, Đà Nẵng
            </div>
            <div>
              <i class="fa-solid fa-envelope"></i> danavtc@danavtc.edu.vn
            </div>
            <div>
              <i class="fa-solid fa-square-phone"></i> 02363.942.790 –
              02363.940.946
            </div>
          </div>
          <div class="dn">
            <span>
              Đăng nhập | Liên Hệ |{" "}
              <img
                src="https://danavtc.edu.vn/Portals/_default/skins/danavtc/img/icon-en.png"
                alt=""
              />
            </span>
          </div>
          <div class="search">
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Tìm kiếm"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <span class="input-group-text" id="basic-addon2">
                  <i class="fa-solid fa-magnifying-glass"></i>
                </span>
              </div>
            </div>
          </div>
        </section>
      );
    };
  }

