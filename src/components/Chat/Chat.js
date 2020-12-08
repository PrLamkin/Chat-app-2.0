import React from "react";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { InfoOutlined, StarBorderOutlined } from "@material-ui/icons";

function Chat() {
    const { roomId } = useParams();

    return <div className="chat">
        <div className="chat_header">
            <div className="chat_headerleft">
                <h4 className="chat_channelname">
                    <strong>placeholder</strong>
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