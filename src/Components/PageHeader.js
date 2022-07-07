import React from "react";

import "./PageHeader.css"

function PageHeader(props) {
    return (
        <div className="Page-header">
            <div className="Header-title-area">
                <h2>
                    {props.text}
                </h2>
            </div>
        </div>
    );
}

export default PageHeader;