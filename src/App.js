import React, { useState, useEffect } from "react";
import "./App.css";
import Shop from "./pages/Shop.js";
import CartPage from "./pages/Cart.js";
import Manager from "./manager/shopManager.js";
function App() {
  const driver = Manager();
  const [_totalPages, setPages] = useState(0);
  const [_products, setProduct] = useState([]);
  const [pagination, setPage] = useState({
    currentPage: 1,
    startRange: 0,
    endRange: 10,
  });
  const [cart, setCart] = useState([]);
  async function getProducts() {
    var count = await driver.getTotalCount();
    var x = await driver.getItemsInRange(
      pagination.startRange,
      pagination.endRange
    );

    setPages(count);
    setProduct(x);
  }
  
  useEffect(() => {
    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  async function _addProduct(prod_name, prod_value) {
    await driver.addItemNew(prod_name, prod_value);
    await getProducts();
  }
  function appPrevPage(prevPageInfo) {
    setPage(prevPageInfo);
  }
  function appNextPage(nextPageInfo) {
    setPage(nextPageInfo);
  }

  function addToCart(product) {
    var cart_prod = {};
    var productFound = false;
    var prodIndex = null;
    cart.forEach((item, index) => {
      if (item.id === product._id) {
        productFound = true;
        prodIndex = index;
        cart_prod = {
          ...item,
          quantity: item.quantity + 1,
        };
        let newArr = [...cart];
        newArr[prodIndex] = cart_prod;
        setCart(newArr);
      }
    });
    if (!productFound) {
      cart_prod = {
        name: product._name,
        value: product._value,
        quantity: 1,
        id: product._id,
      };
      setCart([...cart, cart_prod]);
    }
  }

  function removeProductFromCart(id) {
    let newCart = cart.filter((item, i) => item.id !== id);
    setCart(newCart);
  }

  return (
    <div className="App">
      <div className="row">
        <div className="col-8">
          <Shop
            addToCart={addToCart}
            totalPages={_totalPages}
            products={_products}
            pageInfo={pagination}
            shopPrevPage={appPrevPage}
            shopNextPage={appNextPage}
            addProduct={_addProduct}
          ></Shop>
        </div>
        <div className="col-4">
          <CartPage
            cart={cart}
            removeProduct={removeProductFromCart}
          ></CartPage>
        </div>
      </div>
    </div>
  );
}

export default App;
