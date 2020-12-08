import React, { useEffect, useState } from "react";
import "./SideBar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import SideBarOption from "../SideBarOption/SideBarOption";
import { Add, ExpandMore} from "@material-ui/icons";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";

function SideBar() {
    const [channels, setChannels] = useState([]);
    const [{ user }] = useStateValue();

    useEffect (() => {
        db.collection("rooms").onSnapshot(snapshot => (
                setChannels(snapshot.docs.map(doc => ({
                    id: doc.id, 
                    name: doc.data().name,
                })
                )
            )
        ))
    }, [])


    return <div className="sideBar">
        <div className="sideBar_Header">
            <div className="sideBar_Info">
                <h2>AllaboutCars</h2>
                <h3>
                    <FiberManualRecordIcon />
                    {user?.displayName}
                </h3>
            </div>
            <CreateIcon />
        </div>
        <hr />
        <SideBarOption Icon={ ExpandMore } title="Channels" />
        <hr />
        <SideBarOption Icon={ Add } addChannelOption title="add channel" />
        {channels.map(channel => (
            <SideBarOption title={channel.name} id={channel.id} />
        ))}
    </div>
}

export default SideBar;