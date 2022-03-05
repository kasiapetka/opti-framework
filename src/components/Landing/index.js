import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
    return (
        <React.Fragment>
            <h1>React Optimization framework</h1>
            <div className="grid-3c-container">
                <div className="grid-item">
                    <Link to="/wasted-rendering">WastedRendering</Link>
                </div>
                <div className="grid-item">2</div>
                <div className="grid-item">3</div>
                <div className="grid-item">4</div>
                <div className="grid-item">5</div>
                <div className="grid-item">6</div>
                <div className="grid-item">7</div>
                <div className="grid-item">8</div>
                <div className="grid-item">9</div>
            </div>
        </React.Fragment>
    );
};

export default Landing;
