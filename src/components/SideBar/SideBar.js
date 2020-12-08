import React, { useEffect, useState } from "react";
import "./SideBar.css";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import CreateIcon from "@material-ui/icons/Create";
import InsertCommentIcon from "@material-ui/icons/InsertComment";
import SideBarOption from "../SideBarOption/SideBarOption";
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, PeopleAlt } from "@material-ui/icons";
import db from "../../firebase";

function SideBar() {
    const [channels, setChannels] = useState([])

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
                <h2>placeholder</h2>
                <h3>
                    <FiberManualRecordIcon />
                placeholdername
                </h3>
            </div>
            <CreateIcon />
        </div>
        <SideBarOption Icon={ InsertCommentIcon } title="Threads" />
        <SideBarOption Icon={ Inbox } title="Mentions" />
        <SideBarOption Icon={ Drafts } title="Saved" />
        <SideBarOption Icon={ BookmarkBorder } title="Channel browser" />
        <SideBarOption Icon={ PeopleAlt } title="People & user groups" />
        <SideBarOption Icon={ Apps } title="Apps" />
        <SideBarOption Icon={ FileCopy } title="File browser" />
        <SideBarOption Icon={ ExpandLess } title="Show less" />
        <hr />
        <SideBarOption Icon={ ExpandMore } title="Channels" />
        <hr />
        <SideBarOption Icon={ Add } addChannelOption="add room" />
        {channels.map(channel => (
            <SideBarOption title={channel.name} id={channel.id} />
        ))}
    </div>
}

export default SideBar;