import React, { useRef } from "react";

const Form = ({ addProductFromForm }) => {
  const inputName = useRef(null);
  const inputAmount = useRef(null);
  function addProduct(e) {
    e.preventDefault();
    addProductFromForm(inputName.current.value, inputAmount.current.value);
  }
  return (
    <div className="mx-4">
      <div className="my-2">
        <form>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="product-name"
              className="form-control"
              id="productName"
              ref={inputName}
              aria-describedby="Enter Product Name"
              placeholder="Enter Product Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="productValue">Product Value</label>
            <input
              type="amount"
              className="form-control"
              id="productValue"
              ref={inputAmount}
              placeholder="Enter Product Price"
            />
          </div>
          <div className="my-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => addProduct(e)}
            >
              ADD PRODUCT
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
