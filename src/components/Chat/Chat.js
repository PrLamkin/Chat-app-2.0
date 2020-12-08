import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../../firebase";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }
    }, [roomId])

    console.log(roomDetails)

    return <div className="chat">
        <div className="chat_header">
            <div className="chat_headerleft">
                <h4 className="chat_channelname">
                    <strong>{roomDetails.name}</strong>
                    <StarBorderOutlined />
                </h4>
            </div>

            <div className="chat_headerright">
                <p>
                    <InfoOutlined /> Details
                </p>
            </div>
        </div>
    </div>
    
}

export default Chat;