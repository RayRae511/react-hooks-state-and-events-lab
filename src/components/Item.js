import React, { useState } from "react";

function Item({ name, category }) {
  let [cart, setCart] = useState(false)

  function handleOnClick(){
    setCart((cart) => !cart)
  }
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cart ? "remove" : "add"} onClick={handleOnClick}>{cart ? "remove from" : "add to"}Add to Cart</button>
    </li>
  );
}

export default Item;
