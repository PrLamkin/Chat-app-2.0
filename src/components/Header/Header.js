import { Avatar } from '@material-ui/core';
import React from "react";
import "./Header.css";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import { useStateValue } from '../../StateProvider';

function Header() {
    const [{ user }] = useStateValue();

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
                <DriveEtaIcon />
            </div>

        </div>
    )
}

export default Header