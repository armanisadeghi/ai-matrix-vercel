'use client';

import { io } from 'socket.io-client';
import React, { useEffect, useState } from 'react';

export default function Page() {
  const [message, setMessage] = useState('');
  const [clientMessages, setClientMessages] = useState<string[]>([]);
  const [serverMessages, setServerMessages] = useState<string[]>([]);

  const URL = 'https://e2069eb72e59.ngrok.app/';
  const socket = io(URL, { autoConnect: false });

  useEffect(() => {
    // Connect to the socket
    socket.connect();

    // Event listeners
    socket.on('connect', () =>
      console.log('Connected to the Socket.IO server.'),
    );
    socket.on('error', (error) => console.error('Socket.IO error:', error));
    socket.on('ai_response', (data) => {
      console.log('Received response:', data);
      setServerMessages((prevMessages) => [...prevMessages, data]);
    });

    // Cleanup on unmount
    return () => {
      socket.off('connect');
      socket.off('error');
      socket.off('ai_response');
      socket.close();
      console.log('Disconnected from the server.');
    };
  }, []);

  const settings = {
    customOptions: false,
    aiPreferencesMain: 'Direct AI chat',
    aiPreferencesSecond: 'Chat With One AI',
    quickAnswer: true,
    improveQuestions: false,
    makeSmallTalk: true,
    submitOnEnter: true,
  };

  // Send message function
  const sendMessage = (message: string) => {
    const messageData = {
      message,
      answers: [],
      history: [],
      settings,
      page: 'chatbot.backend_functions.openai_chatbot',
    };
    console.log('Sending message:', messageData);
    socket.emit('user_message', { messageData }, (response: any) => {
      console.log('Server acknowledged the message:', response);
    });
    setClientMessages((prevMessages) => [...prevMessages, message]);
  };

  // Form submission handler
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (message) {
      sendMessage(message);
      setMessage(''); // Clear the input after sending
    }
  };

  return (
    <div>
      <ul className="mb-8 space-y-2">
        {clientMessages.map((message, index) => (
          <li key={index}>
            <strong>Client:</strong> {message}
          </li>
        ))}
        {serverMessages.map((message, index) => (
          <li key={index}>
            <strong>Server:</strong> {message}
          </li>
        ))}
      </ul>
      <form id="chatForm" onSubmit={handleSubmit} className="flex">
        <input
          id="messageInput"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="w-full rounded-md border border-gray-300 p-2 text-black"
        />
        <button
          className="ml-2 rounded-md bg-blue-500 px-4 py-2 text-white"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}
