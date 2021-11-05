import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./chat"

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState("");
  const [roomId, setRoomId] = useState("");

  const joinRoom = () => {
    if (username !== "" && roomId !== "") {
      socket.emit("join_room", roomId);
    }
  };
  return (
    <div className="App">
      <h3>Join a Chat </h3>
      <input
        type="text"
        placeholder="Rahul..."
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="text"
        placeholder="Room Id ....."
        onChange={(event) => setRoomId(event.target.value)}
      />
      <button onClick={joinRoom}>Join a Room</button>
      <Chat socket={socket} username={username} room={roomId} />
    </div>
  );
}

export default App;
