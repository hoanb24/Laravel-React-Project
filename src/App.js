import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Home";
import { Row, Col } from "react-bootstrap";
import Cart from "./Cart";
import Index from "./Components";
// import ShowProduct from "./ShowProduct";
import { CartProvider } from "react-use-cart";
// import "./index.css";
// import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AdminPage from "./Adminpage";
import ShowProduct from "./ShowProLaza";
import IndexLaza from "./IndexLaza";
import ReviewPage from "./ShoppingCart";
import Signin from './Login/Signin';
export default class App extends React.Component {
  render() {
    return (
   
          <>
            {/* <CartProvider>
            <Index />
          </CartProvider> */}
            {/* <ShowProduct /> */}
            {/* <IndexLaza/> */}
            {/* <ReviewPage/> */}
            <Signin/>
          </>
  
    );
  }
}
// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import { Row, Col } from "react-bootstrap";
// import Cart from "./Cart";
// import Index from "./Components";
// import ShowProduct from "./ShowProduct";
// import { CartProvider } from "react-use-cart";
// import AdminPage from "./Adminpage";
// import './App.css';

// export default function App() {
//   return (
//     <BrowserRouter>
//       <CartProvider>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/admin" element={<AdminPage />} />
//         </Routes>
//       </CartProvider>
//     </BrowserRouter>
//   );
// }



// import React, { Component } from 'react';
// import './App.css';
// import { ReactDOM } from 'react';
// import Header from './Components/header';
// import Content from './Components/content';
// import { Card, Row, Col } from 'react-bootstrap';
// import Baitap from './Components/baitap';
// // import StudentList from './Components/liststudent';
// import StudentList from './Components/mockapi';
// import StudentTable from './Components/axios';
// import Index from './Components';
// import React from "react";
// import Home from "./Home";

// import { Row, Col } from 'react-bootstrap';
// export default class App  {
//   render() {
//     return (
//       // <div>
//       //   {/* <Baitap></Baitap> */}
//       //   {/* <Form></Form> */}
//       //   {/* <Header/>
//       //   <Content/>
//       //   <Api/> */}
//       //   {/* <StudentList/> */}
//       //   {/* <StudentTable/> */}
//       //   <Index/>
//       // </div>
//       <>
//         <Home/>
//       </>
//     )
//   }
// }

// function App(){
//   return (
//     // <div>
//     //   {/* <Banner/>
//     //   <Menu/>
//     //   <Adv/> */}
//     //   <Member khoa="Công nghệ thông tin" lop="19cntt1a" sdt="123"/>
//     //   <Member khoa="Công nghệ thông tin" lop="19cntt1b" sdt="234"/>
//     // </div>
//     // <div>
//     // <MemberState/>
//     // </div>
//     <div>
//     <Form/>
//     </div>
//   );
// }

// function Banner (){
//   return (

// <section class="banner">

//       <div class="img-b"><img src="https://danavtc.edu.vn/Portals/0/logo.png?ver=2019-10-13-182116-600" alt=""/></div>
//       <div class="content-b">
//       <div>
//         <h1 >TRƯỜNG CAO ĐẲNG NGHỀ ĐÀ NẴNG</h1>
//         <h4 >DANANG VOCATIONAL TRAINNING COLLEGE</h4>
//       </div>
//       <div><i class="fa-solid fa-location-dot"></i> 99 Tô Hiến Thành, Sơn Trà, Đà Nẵng</div>
//       <div><i class="fa-solid fa-envelope"></i>  danavtc@danavtc.edu.vn</div>
//       <div><i class="fa-solid fa-square-phone"></i>  02363.942.790 – 02363.940.946</div>
//       </div>
//       <div class="dn">
//           <span>Đăng nhập | Liên Hệ | <img src="https://danavtc.edu.vn/Portals/_default/skins/danavtc/img/icon-en.png" alt=""/>
//           </span>
//       </div>
//       <div class="search">
//         <div class="input-group mb-3">
//           <input type="text" class="form-control" placeholder="Tìm kiếm" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
//           <div class="input-group-append">
//             <span class="input-group-text" id="basic-addon2"><i class="fa-solid fa-magnifying-glass"></i></span>
//           </div>
//         </div>
//     </div>
//       </section>
//   );
// }
// function Menu (){
//   return (
//     <section>
//     <ul>
//       <li>TRANG CHỦ</li>
//       <li>GIỚI THIỆU</li>
//       <li>KHOA - PHÒNG</li>
//       <li>ĐÀO TẠO</li>
//       <li>TUYỂN SINH</li>
//       <li>NGHIÊN CỨU KH</li>
//       <li>HOẠT ĐỘNG</li>
//       <li>LỊCH CÔNG TÁC</li>
//       <li>SINH VIÊN</li>
//       <li>ĐOÀN THỂ</li>
//     </ul>
//   </section>
//   );
// }
// function Adv (){
//   return (
//     <section>

//   <div class="adv"><img src="https://danavtc.edu.vn/Portals/0/EasyDNNnews/Uploads/2004/ts2022012.jpg" alt=""/></div>
//   </section>
//   );
// }

// function Member (props){
//   return(
//     <div className='member'>
//       <h2>{props.khoa}</h2>
//       <p>Tuổi : {props.lop}</p>
//       <p>Số điện thoại : {props.sdt}</p>
//     </div>
//   )
// }

// class Member_state extends React.Component {
//     constructor(props){
//       super(props);
//       this.state = {
//         khoa :'Công nghệ thông tin',
//         lop : '19cntt1a'
//       };
//     };
//     doikhoa = () => {
//       this.setState({
//         khoa :'du lich',
//         lop : '19cntt1a'
//       })
//     };
//     render(){
//       return (
//         <div>
//           <h2>khoa : {this.state.khoa}</h2>
//           <h2>lop : {this.state.lop} </h2>
//           <button type='button' onClick={this.doikhoa}>thay doi khoa theo hoc</button>
//         </div>
//       );
//     }
// }

// class MemberState extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         imgIndex: 0,
//         imgUrls: [
//           'https://img6.thuthuatphanmem.vn/uploads/2022/03/04/mau-background-bau-troi-xanh-duong_034134240.jpg',
//           'https://cpad.ask.fm/926/277/998/-149996991-1t40ghd-g50a4kj9pmtlgfp/original/filye.jpg',
//           'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW4AqVs5MyYMFX8xeTXgjELuAPJUOvsgPXfGXmeGIxa_eCar9_19as_3OPsYhKTy-wEhw&usqp=CAU'
//         ]
//       };
//     }

//     tang = () => {
//       const { imgIndex, imgUrls } = this.state;
//       const nextIndex = (imgIndex + 1) % imgUrls.length; // Lặp lại các chỉ số của mảng

//       this.setState({
//         imgIndex: nextIndex,
//         imgUrl: imgUrls[nextIndex]
//       });
//     };

//     render() {
//       return (
//         <div>
//           <img src={this.state.imgUrls[this.state.imgIndex]} alt="Ảnh mới" /> <br></br> <br></br>
//           <button type="button" onClick={this.tang}>Thay đổi ảnh</button>
//         </div>
//       );
//     }
//   }

// class Vongdoi extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {so: 1};
//   }

//   componentDidMount() {
//     this.intervalId = setInterval(() => {
//       if (this.state.so < 10) {
//         this.setState({so: this.state.so + 1});
//       } else {
//         clearInterval(this.intervalId);
//       }
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.intervalId);
//   }

//   render() {
//     return(
//       <div>
//         {this.state.so < 10 && <h1>Số {this.state.so}</h1>}
//       </div>
//     );
//   }
// }

// class Api extends Component {
//   constructor() {
//     super();
//     this.state = { data: [] };
//   }

//   async componentDidMount() {
//     const response = await fetch('https://643918404660f26eb1aa3099.mockapi.io/Food');
//     const json = await response.json();
//     this.setState({ data: json });
//   }

//   render() {
//     return (
//       <Row>
//         {this.state.data.map((e) => (
//           <Col sm={6} md={4} lg={3} key={e.id}>
//             <Card>
//               <Card.Img variant="top" src={e.anh} />
//               <Card.Body>
//                 <Card.Title>{e.ten}</Card.Title>
//                 <Card.Text>{e.mo_ta}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     );
//   }
// }
