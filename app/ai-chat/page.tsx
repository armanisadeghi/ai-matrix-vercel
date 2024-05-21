// app/chat/page.tsx
'use client';

import React, { useState, useCallback } from 'react';
import { ChatInput } from './chat-input';
import { ChatDisplay } from './chat-display';
import { useSocketManager } from './socket-manager';

export default function Page() {
  const [aiResponse, setAiResponse] = useState<string>('');

  const appendResponse = useCallback((newResponse: string) => {
    setAiResponse((prev) => prev + newResponse);
  }, []);

  const sendMessageHandler = useSocketManager(appendResponse);

  const handleSendMessage = (message: string) => {
    sendMessageHandler(message);
  };

  return (
    <div className="flex h-screen flex-col overflow-hidden">
      <ChatDisplay aiResponse={aiResponse} />
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
}
