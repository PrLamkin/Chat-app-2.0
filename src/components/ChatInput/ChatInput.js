import React, { useState } from "react";
import db from "../../firebase";
import { useStateValue } from "../../StateProvider";
import "./ChatInput.css";
import firebase from "firebase";

function ChatInput({ channelName, channelId }) {
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        if (channelId) {
            db.collection("rooms").doc(channelId).collection("messages", {
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp,
            user: user.displayName,
            userImage: user.photoURL,
            })
        }
    };

    return (
        <div className="ChatInput">
            <form>
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={`Message #${channelName}`}/>
                <button type="submit" onClick={sendMessage}>Send</button>
            </form>
        </div>
    )
}

export default ChatInput