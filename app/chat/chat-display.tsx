// app/chat/chat-display.tsx
'use client';

import React from 'react';
import { Textarea } from '#/ui/catalyst/textarea';

interface ChatDisplayProps {
  aiResponse: string;
}

export const ChatDisplay: React.FC<ChatDisplayProps> = ({ aiResponse }) => {
  return (
    <Textarea
      id="aiResponse"
      value={aiResponse}
      readOnly
      placeholder="AI Response..."
      resizable={false}
      className="flex-grow overflow-y-auto" // Allows internal scrolling
    />
  );
};
