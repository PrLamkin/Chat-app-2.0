import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";

function Chat() {
    const { roomId } = useParams();

    return <div className="chat">
        <h3>you are in the {roomId} room</h3>
    </div>
    
}

export default Chat;