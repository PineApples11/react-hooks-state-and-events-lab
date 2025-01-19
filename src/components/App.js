import React,{useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // const[items,setItems]=useState(itemData)
const [isDarkMode,setisDarkMode]=useState(false)

function handleDarkModeClick(){
  setisDarkMode(prevMode => !prevMode)
}
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isDarkMode ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeClick}>{isDarkMode?"Dark":"Light"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
