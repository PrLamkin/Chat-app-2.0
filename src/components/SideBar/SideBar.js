import React from "react";
import "./SideBar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";

function SideBar() {
    return <div className="sideBar">
        <div className="sideBar_Header">
            <div className="sideBar_Info">
                <h2>placeholder</h2>
                <h3>
                    <FiberManualRecordIcon />
                placeholdername
                </h3>
            </div>
            <CreateIcon />
            <SideBarOption Icon={} title="Threads" />
        </div>
    </div>
}

export default SideBar;