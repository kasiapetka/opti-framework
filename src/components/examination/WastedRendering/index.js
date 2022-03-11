import React from "react";
import ToDoList from "./ToDoList";
import ToDoListOpti from "./ToDoListOpti";
import Jumbotron
    from "../../Jumbotron";
const WastedRendering = () => {
    return (
        <div>
            <Jumbotron title={"Wasted Rendering"} description={"Wasted Rendering Wasted Rendering"} />
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
