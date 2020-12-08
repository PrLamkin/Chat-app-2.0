import React from "react";
import "./SideBarOption.css";


function SideBarOption({ Icon, title }) {
    return ( <div className="SideBarOption">
        { Icon && <Icon className="SideBarOption_Icon"/> }
        { Icon ? (
            <h3> {title} </h3>
        ): (
            <h3 className="SideBarOption_Channel"> <span className="SideBarOption_Hash">#</span> {title} </h3>
        )}
    </div>
    );
}

export default SideBarOption;