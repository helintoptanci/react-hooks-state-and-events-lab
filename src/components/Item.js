import { React, useState } from "react";

function Item({ name, category }) {
  const [inCart, setter] = useState(false)

  function handleClick() {
    setter(!inCart)
  }

  const buttonLabel = inCart? "Remove From Cart" : "Add to Cart"

  const classLabel = inCart? "in-cart" : ""

  return (
    <li className={classLabel}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className="add"
      onClick={handleClick}
      >{buttonLabel}</button>
    </li>
  );
}

export default Item;
