import { React, useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setter] = useState('All')

  function changeFilter(event) {
    //console.log(event.target.value)
    setter(event.target.value)
  }

  //filter for selected category
  let newArray = []
  if (selectedCategory !== 'All') {
    newArray = items.filter(item => item.category === selectedCategory)
  }
  else {
    newArray = items
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
      <select onChange={changeFilter} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
      {newArray.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
