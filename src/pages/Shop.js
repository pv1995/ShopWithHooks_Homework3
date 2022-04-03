import React from "react";
// import PropTypes from "prop-types";
import Table from "../components/table.js";
import Form from "../components/form.js";

const Shop = (props) => {
  console.log(props);
  // function handleproductADD(name,val) {

  //     addProduct(name,val);
  // }
  return (
    <div className="m-4">
      <div className="my-4">
        <Form addProductFromForm={props.addProduct}></Form>
      </div>

      <div className="my-2">
        <Table
          list={props.products}
          pageInformation={props.pageInfo}
          tablePrevPage={props.shopPrevPage}
          tableNextPage={props.shopNextPage}
          tablePages={props.totalPages}
          addToCart={props.addToCart}
        ></Table>
      </div>
    </div>
  );
};

export default Shop;
