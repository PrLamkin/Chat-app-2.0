import { Avatar } from '@material-ui/core';
import React from "react";
import "./Header.css";
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
            </div>
            
            <div className="header_right">
            </div>

        </div>
    )
}

export default Header