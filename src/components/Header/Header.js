import { Avatar } from '@material-ui/core';
import React from "react";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <Avatar
                    className="header_avatar"
                    alt={user?.displayName}
                    src={user?.photoURl}
                    />
                <AccessTimeIcon />
            </div>
            
            <div className="header_right">
                
            </div>

        </div>
    )
}

export default Header