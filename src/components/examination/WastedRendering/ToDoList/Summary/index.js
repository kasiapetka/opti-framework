import React from "react";

const Summary = ({ allItems }) => {
    return (
        <div style={{ borderTop: "1px solid blue" }}>
            <p>You have {allItems} items in total.</p>
        </div>
    );
};

export default Summary;
