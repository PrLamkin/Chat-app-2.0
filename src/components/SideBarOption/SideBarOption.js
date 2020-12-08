import React from "react";
import { useHistory } from "react-router";
import db from "../../firebase";
import "./SideBarOption.css";


function SideBarOption({ Icon, title, id, addChannelOption }) {
    const history = useHistory();

    const selectChannel = () => {
        if(id) {
            history.push(`/room/${id}`)
        } else {
            history.push(title)
        }
    }

    const addChannel = () => {
        const channelName = prompt("Please enter the channel name")

        if (channelName) {
            db.collection("rooms").add({
                name: channelName
            })
        }
    };

    return ( <div className="SideBarOption" onClick={addChannelOption ? addChannel : selectChannel}>
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