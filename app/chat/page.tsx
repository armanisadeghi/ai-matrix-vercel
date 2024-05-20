'use client';

import { io, Socket } from 'socket.io-client';
import React, { useState, useCallback, useEffect } from 'react';

export default function Page() {
  const [message, setMessage] = useState<string>('');
  const [aiResponse, setAiResponse] = useState<string>('');
  const [socket, setSocket] = useState<Socket | null>(null);

  const URL = 'https://e2069eb72e59.ngrok.app/';

  const connectSocket = useCallback(() => {
    // Only create a new socket if one doesn't already exist
    if (!socket) {
      const newSocket: Socket = io(URL, { autoConnect: false });
      newSocket.connect();

      newSocket.on('connect', () => {
        console.log('Connected to the Socket.IO server.');
        // Send the message after establishing the connection
        newSocket.emit('streaming_chat', {
          promptMessage: message,
          task: 'basic_chat',
          index: 1,
          uid: '1234567890',
        });
      });

      newSocket.on('error', (error: any) =>
        console.error('Socket.IO error:', error),
      );

      newSocket.on('chat_response', (data: any) => {
        console.log('Received chunk:', data);
        // Check if the 'data' field exists in the response object and append it
        if (data && typeof data === 'object' && 'data' in data) {
          setAiResponse((prevResponse) => prevResponse + data.data); // Append the text from the 'data' field
        }
      });

      setSocket(newSocket);
    }
  }, [message, socket]);

  // Clean up the socket when the component unmounts
  useEffect(() => {
    return () => {
      if (socket) {
        socket.disconnect();
        console.log('Disconnected from the server.');
      }
    };
  }, [socket]);

  return (
    <div>
      <input
        id="messageInput"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message..."
        className="w-full rounded-md border border-gray-300 p-2 text-black"
      />
      <button
        className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-white"
        onClick={connectSocket} // This triggers connection and message send
        disabled={!message.trim()}
        type="button"
      >
        Send
      </button>
      <textarea
        id="aiResponse"
        value={aiResponse}
        readOnly
        placeholder="AI Response..."
        className="mt-2 h-48 w-full rounded-md border border-gray-300 p-2 text-black"
      />
    </div>
  );
}
