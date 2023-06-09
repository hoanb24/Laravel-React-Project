import React, { Component } from "react";
import { BrowserRouter as Router, NavLink, Route, Routes } from "react-router-dom";

export default class Content extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<TrangChu />} />
        <Route path="/gioi-thieu" element={<GioiThieu />} />
        <Route path="/khoa-phong" element={<KhoaPhong />} />
        <Route path="/dao-tao" element={<DaoTao />} />
        <Route path="/tuyen-sinh" element={<TuyenSinh />} />
        <Route path="/nghien-cuu-khoa-hoc" element={<NghienCuuKhoaHoc />} />
      </Routes>
    );
  }
}

function TrangChu() {
  return (
    <a href="https://www.google.com.vn/?hl=vi">Trang chủ</a>
  );
}

function GioiThieu() {
  return <h1>Giới thiệu</h1>;
}

function KhoaPhong() {
  return <h1>Khoa - Phòng</h1>;
}

function DaoTao() {
  return <h1>Đào tạo</h1>;
}

function TuyenSinh() {
  return <h1>Tuyển sinh</h1>;
}

function NghienCuuKhoaHoc() {
  return <h1>Nghiên cứu khoa học</h1>;
}
