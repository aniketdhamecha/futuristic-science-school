import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useChatbot } from '../../hooks/useChatbot';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import FloatingButton from './FloatingButton';

const ChatBot = () => {
  const {
    isOpen,
    isExpanded,
    messages,
    isTyping,
    showNotification,
    messagesEndRef,
    toggleChat,
    toggleExpand,
    sendMessage,
    setShowNotification
  } = useChatbot();

  return (
    <>
      {/* 1. STYLED CONTEXT TRIGGER BUTTON */}
      <FloatingButton
        onClick={toggleChat}
        isOpen={isOpen}
        showNotification={showNotification}
        setShowNotification={setShowNotification}
      />

      {/* 2. CONTEXT CHAT DIALOG PANEL */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 35, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30, x: 15 }}
            transition={{ type: 'spring', stiffness: 320, damping: 25 }}
            className={`fixed bottom-24 right-4 md:right-8 z-50 rounded-3xl border border-slate-900 bg-slate-950/80 backdrop-blur-2xl flex flex-col overflow-hidden shadow-2xl transition-all duration-300 pointer-events-auto border-cyan-500/10 shadow-cyan-500/5 ${
              isExpanded
                ? 'w-[calc(100vw-2rem)] md:w-[480px] h-[calc(100vh-10rem)] md:h-[680px]'
                : 'w-[calc(100vw-2rem)] md:w-[380px] h-[calc(100vh-10rem)] md:h-[550px]'
            }`}
          >
            {/* Header Dashboard panel */}
            <ChatHeader
              isExpanded={isExpanded}
              onToggleExpand={toggleExpand}
              onClose={toggleChat}
            />

            {/* Main messages scrolling logs */}
            <ChatMessages
              messages={messages}
              isTyping={isTyping}
              messagesEndRef={messagesEndRef}
              onSelectQuestion={sendMessage}
            />

            {/* Bottom active text panels */}
            <ChatInput onSend={sendMessage} />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
