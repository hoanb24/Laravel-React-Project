import React from "react";
import swal from "sweetalert";
import { useCart } from "react-use-cart";

const CartPage = ({ cart, hideCart }) => { // Add the cart and hideCart props
  const {
    isEmpty,
    totalUniqueItems,
    cartTotal,
    totalItems,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();

  const handleBuyNow = () => {
    const invoiceMessage = `Hóa đơn của bạn:
    Tổng giá trị: $${cartTotal}
    Danh sách mặt hàng: 
    ${items
      .map(
        (item) =>
          `${item.title} - Số lượng: ${item.quantity} - Giá: ${item.price}`
      )
      .join("\n")}`;

    swal("Mua thành công!", invoiceMessage, "success");
    emptyCart();
  };

  if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>;
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
              {cart.map((item, index) => { // Use the cart prop instead of items
                return (
                  <tr key={index}>
                    <td>
                      <img src={item.img} style={{ height: "6rem" }} alt={item.title} />
                    </td>
                    <td>{item.title}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>
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
                    </td>
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
          <button
            className="btn btn-danger m-2"
            onClick={() => emptyCart()}
          >
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

export default CartPage;
