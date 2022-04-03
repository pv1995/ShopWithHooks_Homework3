import React from "react";
// import PropTypes from "prop-types";

const Card = ({ products, removeProduct }) => {
  function deleteProduct(id) {
    removeProduct(id);
  }
  return products.map((product, i) => {
    console.log("CARDDD", product);
    return (
      <div className="mx-4" key={i}>
        <div className="my-2">
          <div class="card">
            <div class="card-header">Qnty: {product.quantity}</div>
            <div class="card-body">
              <div className="row">
                <div className="col-6">
                  <h5 class="card-title">{product.name}</h5>
                  <p class="card-text">${product.value}</p>
                </div>
                <div className="col-6">
                  <button
                    type="button"
                    className="btn mt-2 btn-primary"
                    onClick={() => {
                      deleteProduct(product.id);
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
};

export default Card;
