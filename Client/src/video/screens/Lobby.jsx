import React, { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../context/SocketProvider"

const LobbyScreen = () => {
  const [email, setEmail] = useState("");
  const [room, setRoom] = useState("");

  const socket = useSocket();
  const navigate = useNavigate();

  const handleSubmitForm = useCallback(
    (e) => {
      e.preventDefault();
      socket.emit("room:join", { email, room });
    },
    [email, room, socket]
  );

  const handleJoinRoom = useCallback(
    (data) => {
      const { email, room } = data;
      navigate(`/room/${room}`);
    },
    [navigate]
  );

  useEffect(() => {
    socket.on("room:join", handleJoinRoom);
    return () => {
      socket.off("room:join", handleJoinRoom);
    };
  }, [socket, handleJoinRoom]);

  return (
    <div>
      <div className="bg-cover bg-center h-screen courtbg justify-center">
      <h1 className="text-velvet-100 text-center font-custom font-extrabold text-4xl bg-champ-100">Welcome to LawVista Video Confrence</h1>
      <div className="flex flex-colitems-center justify-center mt-28">
      <form onSubmit={handleSubmitForm}>
        <div className="flex flex-col items-center justify-center">
        <div className="bg-champ-100">
        <label htmlFor="email"
        
        >Email ID</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        </div>
        <br />
        <div className="bg-champ-100">
        <label htmlFor="room">Token Number</label>
        <input
          type="text"
          id="room"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
        />
        </div>
        <br />
        <div>
        <button className="mt-5 justify-center items-center bg-champ-100 text-velvet-100 px-5 py-1 text-lg">Join</button>
        </div>
        </div>
      </form>
      </div>
      </div>
    </div>
  );
};

export default LobbyScreen;
