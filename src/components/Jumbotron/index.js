import React from "react";
import "./Jumbotron.scss"

const Jumbotron = ({ title, description }) => {
    return (
        <React.Fragment>
            <div class="jumbotron" style={{ padding: '2em 1em' }}>
                <h1>{title}</h1>
                <hr class="my-4" />
                <p class="lead">{description}</p>
            </div>
        </React.Fragment>
    );
};

export default Jumbotron;
