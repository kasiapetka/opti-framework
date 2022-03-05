import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Summary from "./Summary";

const ToDoList = () => {
    const [items, setItems] = useState(["werwer", "weqeqw"]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    return (
        <div>
            <h4>ToDoList</h4>
            <p>
                <input
                    type="text"
                    value={newItem}
                    onChange={(event) => setNewItem(event.target.value)}
                />{" "}
                <button onClick={addItem}>Add</button>
            </p>

            <div>
                {items.map((item, i) => (
                    <ToDoItem key={i} todo={item} />
                ))}
            </div>
            <Summary allItems={items?.length ? items?.length : 0} />
        </div>
    );
};

export default ToDoList;
