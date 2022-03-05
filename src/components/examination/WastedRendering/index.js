import React from "react";
import ToDoList from "./ToDoList";
import ToDoListOpti from "./ToDoListOpti";

const WastedRendering = () => {
    return (
        <div>
            <h1>WastedRendering</h1>
            <div className="grid-2c-container">
                <div className="grid-item">
                    <ToDoList />
                </div>
                <div className="grid-item">
                    <ToDoListOpti />
                </div>
            </div>
        </div>
    );
};

export default WastedRendering;
