import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
import './App.css';

const allCategories = ['all',...new Set(items.map((item) => {
  return item.category;
}))]

function App() {
  const [menuItems,setMenuItems] = useState(items);
  const [categories,setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <div className="App">
      <h2>Our Menu</h2>
      <hr/>
      <hr/>
      <hr/>

        
      <Categories filterItems={filterItems} categories={categories}/>
      <hr/>
      <hr/>
      <Menu items={menuItems} />
    </div>
  );
}

export default App;
