// app/chat/chat-input.tsx
'use client';

import React, { useState } from 'react';
import { Textarea } from '#/ui/catalyst/textarea';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>('');

  return (
    <Textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      placeholder="Type a message..."
      onKeyDown={(e) => {
        if (e.key === 'Enter' && !e.shiftKey && message.trim()) {
          onSendMessage(message);
          setMessage(''); // Clear message after sending
          e.preventDefault(); // Prevents default action (newline in this case)
        }
      }}
      className="resize-none" // Prevent manual resizing
    />
  );
};
