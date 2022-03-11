import React, { useState } from "react";
import ToDoItem from "./ToDoItem";
import Summary from "./Summary";
import logo from "../../../../images/todo.jpg";

const ToDoList = () => {
    const [items, setItems] = useState(["werwer", "weqeqw", "werwer", "weqeqw",
        "Treating yourself never looked so easy!",
        "Treating yourself never looked so easy!stage!",
        "Treating yourself never looked so easy! Follore!",
    ]);
    const [newItem, setNewItem] = useState("");

    const addItem = () => {
        const newItems = [...items, newItem];
        setItems(newItems);
        setNewItem("")
    };

    return (
        <div className="container card">
            <div className="card-body">

                <h4 className="card-title">ToDoList</h4>
                <p>
                    <input
                        type="text"
                        value={newItem}
                        onChange={(event) => setNewItem(event.target.value)}
                    />{" "}
                    <button onClick={addItem} className="btn btn-light" disabled={!newItem}>Add</button>
                </p>

                <div>
                    {items.map((item, i) => (
                        <ToDoItem key={i} todo={item} />
                    ))}
                </div>
                <Summary allItems={items?.length ? items?.length : 0} />
            </div>
        </div>
    );
};

export default ToDoList;
