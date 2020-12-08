import React, { useEffect, useState } from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";
import db from "../../firebase";
import Message from "../Message/Message";

function Chat() {
    const { roomId } = useParams();
    const [roomDetails, setRoomDetails] = useState(null)
    const [roomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection("rooms")
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        db.collection("rooms").doc(roomId)
        .collection("messages")
        .orderBy("timestamp", "asc")
        .onSnapshot(
            (snapshot) => setRoomMessages(snapshot.docs.map(doc => doc.data()))
        );
    }, [roomId])

    console.log(roomDetails);
    console.log("messages >>> ", roomMessages)

    return <div className="chat">
        <div className="chat_header">
            <div className="chat_headerleft">
                <h4 className="chat_channelname">
                    <strong>{roomDetails?.name}</strong>
                    <StarBorderOutlined />
                </h4>
            </div>

            <div className="chat_headerright">
                <p>
                    <InfoOutlined /> Details
                </p>
            </div>
        </div>

        <div className="chat_messages">
            {roomMessages.map(({message, timestamp, user, userImage}) => (
                <Message
                message={message}
                timestamp={timestamp}
                user={user}
                userImage={userImage}
                />
            ))}
        </div>
    </div>
    
}

export default Chat;