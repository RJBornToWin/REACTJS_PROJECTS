import React from "react";

import "./PageFooter.css"

function PageFooter(props) {
    return (
        <div className="Page-footer">
            <div className="Footer-title-area">
                <h4>
                    {props.text}
                </h4>
            </div>
        </div>
    );
}

export default PageFooter;