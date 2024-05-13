import React, { useState } from 'react'
import List from './List';

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [fieldValue, setFieldValue] = useState('');

    function handleInput(e) {
        setFieldValue(e.target.value);
    }

    function handleSubmit() {
        if (!fieldValue || fieldValue === '') return;

        setItems([
            ...items,
            {
                name: fieldValue,
                checked: false
            }
        ]);

        setFieldValue('');
    }

    function handleClick(clickedItem) {
        const updatedItems = items.map(item => {
            if (item.name === clickedItem.name) {
                return { ...item, checked: !clickedItem.checked }
            }

            return item;
        });

        setItems(updatedItems);
    }

    const shoppingItems = items.filter(item => !item.checked);
    const cartItems = items.filter(item => item.checked);

    return (
        <div>
            <input value={fieldValue} onChange={handleInput} />
            <button onClick={handleSubmit}>Add product</button>

            <List label="Products" items={shoppingItems} onClick={handleClick} />

            <List label="In cart" items={cartItems} onClick={handleClick} />
        </div>
    )
}

export default ShoppingList