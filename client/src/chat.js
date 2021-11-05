import React from 'react'

function chat({room, socket, username}) {
    return (
        <div>
            <div className="chat-header">
                <h4>Live Chat</h4>
            </div>
            <div className="chat-body"></div>
            <div className="chat-footer">
                <input type="text" name="currentMessage" id="" placeholder="type..." />
            </div>
        </div>
    )
}

export default chat;
