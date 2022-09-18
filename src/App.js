import { useState } from 'react';
import './App.css';
import ToDoList from './ToDoList';

function App() {

  const [inputItem, setInputItem] = useState("");

  const [items, setItems] = useState([]);

  const inputEvent = (event) => {
    setInputItem(event.target.value)
  }

  const addItem = () => {
    setItems((oldItems)=>{
      return [...oldItems, inputItem]
    })
    setInputItem("")
  }

  
  const deleteItems = (id) => {
    setItems((oldItems)=>{
      return oldItems.filter((arrEle, index) =>{
        return index !==id;
      })
    })
  }

  return (
    <div className="App">
      <div className="cart">
        <h1>ToDo List</h1>
        <input type="text" placeholder='Add Item' onChange={inputEvent} value={inputItem} />
        <button onClick={addItem}>+</button>
        <ol>
          {items.map((itemValue, index) =>{
            return <ToDoList 
            key={index}
            id={index}
            text={itemValue}
            onSelect={deleteItems}
            />
          })}
        </ol>

      </div>

    </div>
  );
}

export default App;
