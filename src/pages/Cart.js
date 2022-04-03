import React from "react";
// import PropTypes from "prop-types";
import Card from "../components/card.js";

const Cart = ({ cart, removeProduct }) => {
  // console.log(cart, 'This is cart');
  function getCost() {
    var sum = 0;
    for (let i in cart) {
      // console.log(cart[i])
      sum += parseInt(cart[i].value);
    }
    return sum;
  }

  return (
    <div className="m-4">
      <div className="mb-2">
        <h4 className="my-2">Total cart value : {getCost()}</h4>
        <Card products={cart} removeProduct={removeProduct}></Card>
      </div>
    </div>
  );
};

export default Cart;
