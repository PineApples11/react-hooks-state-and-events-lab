import React,{useState} from "react";
import items from "../data/items";

function Item({ name, category }) {
  const [isInCart,setIsInCart]=useState(false)

function handleCartClick(){
  setIsInCart((prevState) => !prevState);
}

const itemClass = isInCart? "in-cart": "";
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart? "remove":"add"} onClick={handleCartClick}>
        {isInCart? "Remove from cart":"Add to cart"}</button>
    </li>
  );
}

export default Item;
