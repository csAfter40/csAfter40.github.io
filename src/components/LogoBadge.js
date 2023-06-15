import React from "react";

export default function LogoBadge({logo, title}) {
    return (
        <div className="logo-badge" title={title}>
            <img src={logo} alt={title}/>
        </div>
    )
}