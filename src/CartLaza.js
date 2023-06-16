import React from "react";
import { useCart } from "react-use-cart";
import swal from "sweetalert";
import axios from "axios";
const CartDisplay = () => {
  const { updateItemQuantity, removeItem, emptyCart } = useCart();
  const cartData = JSON.parse(sessionStorage.getItem("cart")); // Lấy dữ liệu từ session 'cart'
  const id_user = JSON.parse(sessionStorage.getItem("id_user")); 
  const handleBuyNow = async () => {
    const invoiceMessage = `Hóa đơn của bạn:
      Tổng giá trị: $${cartTotal}
      Danh sách mặt hàng: 
      ${cartData
        .map((item) => `${item.name} - Số lượng: ${item.quantity} - Giá: ${item.unit_price}`)
        .join("\n")}`;
  
    swal("Mua thành công!", invoiceMessage, "success");
  
    // Loop through cartData and send each item to the server
    for (const item of cartData) {
      await axios.post("http://localhost:8000/api/add-orders", {
        name: item.name,
        price: item.unit_price,
        image: item.image,
        quantity: item.quantity,
        id_user:id_user
      }).catch(() => {
        swal("Thêm không thành công", "", "error");
      });
    }
  
    sessionStorage.removeItem("cart"); // Xóa dữ liệu giỏ hàng từ session
  };
  

  if (!cartData || cartData.length === 0) {
    return <h1 className="text-center">Your Cart is Empty</h1>;
  }

  const cartTotal = cartData.reduce(
    (total, item) => total + item.unit_price * item.quantity,
    0
  );
  const totalUniqueItems = cartData.length;
  const totalItems = cartData.reduce((total, item) => total + item.quantity, 0);

  return (
    <section>
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart ({totalUniqueItems}), total Items: ({totalItems})
          </h5>
          <table className="table table-light table-hover m-0">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {cartData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={`http://localhost:8000/source/image/product/${item.image}`}
                        style={{ height: "6rem", objectFit: "cover", height:150, width:150 }}
                        alt={item.title}
                      />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.unit_price}</td>
                    <td>{item.quantity}</td>
                    {/* <td>
                      <button
                        className="btn btn-info ms-2 me-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2 me-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger ms-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td> */}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2>Total Price: $ {cartTotal}</h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger m-2" onClick={() =>{
             sessionStorage.removeItem("cart");
             swal("Success!", "Xóa giỏ hàng thành công.", "success");
          }}>
            Clear Cart
          </button>

          <button className="btn btn-primary m-2" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default CartDisplay;
