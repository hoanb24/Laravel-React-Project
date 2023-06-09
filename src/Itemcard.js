import React from "react";
import swal from "sweetalert";
import { useCart } from "react-use-cart";

const Itemcard = (props) => {
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
    swal({
      title: "Success",
      text: "Item added to cart successfully",
      icon: "success",
      button: "OK",
    });
  };

  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        <img src={props.img} class="card-img-top img-fluid" alt="..." style={{height:"200px"}}/>
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <h5 class="card-title">$ {props.price}</h5>
          <p class="card-text">{props.desc}</p>

          <button
            class="btn btn-success"
            onClick={() => handleAddToCart(props.item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Itemcard;
