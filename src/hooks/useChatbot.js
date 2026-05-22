import { useState, useEffect, useRef } from 'react';
import { chatbotFaq } from '../data/chatbotFaq';

export const useChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const messagesEndRef = useRef(null);

  // Initialize with a welcome message on mount
  useEffect(() => {
    resetChat();
    
    // Trigger notification popup badge after 5 seconds to invite interaction
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowNotification(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll to the latest message
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const resetChat = () => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: "Welcome to A Success Science School! 👋 I am your AI Academic Assistant. How can I help you and your family navigate our elite science stream, residential campus, admissions process, or daily schedules today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isWelcome: true
      }
    ]);
  };

  const toggleChat = () => {
    setIsOpen(prev => {
      const next = !prev;
      if (next) {
        setShowNotification(false);
      }
      return next;
    });
  };

  const toggleExpand = () => {
    setIsExpanded(prev => !prev);
  };

  const sendMessage = async (text) => {
    if (!text.trim()) return;

    const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text,
      timestamp: userTimestamp
    };

    // Append user message immediately
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    // Simulate AI computing duration
    await new Promise(resolve => setTimeout(resolve, 900));

    const botAnswer = getBotResponse(text);
    const botTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const botMessage = {
      id: `bot-${Date.now()}`,
      sender: 'bot',
      text: botAnswer,
      timestamp: botTimestamp
    };

    setMessages(prev => [...prev, botMessage]);
    setIsTyping(false);
  };

  // Keyword scanning lookup
  const getBotResponse = (query) => {
    const cleanQuery = query.toLowerCase().trim();

    // Check FAQ data keywords
    for (const faq of chatbotFaq) {
      const match = faq.keywords.some(keyword => {
        // Match exact word or substring
        return cleanQuery.includes(keyword) || keyword.includes(cleanQuery);
      });
      if (match) {
        return faq.answer;
      }
    }

    // Smart fallback responses based on generic intents
    if (cleanQuery.includes("hi") || cleanQuery.includes("hello") || cleanQuery.includes("hey")) {
      return "Greetings! How can A Success Science School support your child's academic aspirations today? Ask me about our Admissions, NEET/JEE test preparation, high-tech labs, or separate hostels.";
    }

    if (cleanQuery.includes("thank") || cleanQuery.includes("thanks") || cleanQuery.includes("great")) {
      return "You are very welcome! It is our honor to cultivate scientific excellence. Please let me know if you have any other questions regarding enrollment, routines, or safety shields!";
    }

    // Dynamic Default Fallback
    return "I am A Success School's dedicated AI assistant. I couldn't locate an exact match for that specific inquiry. Try selecting one of our quick action buttons or asking about 'hostel routine', 'admissions required documents', 'JEE prep groups', or 'chemistry labs'!";
  };

  return {
    isOpen,
    isExpanded,
    messages,
    isTyping,
    showNotification,
    messagesEndRef,
    toggleChat,
    toggleExpand,
    sendMessage,
    resetChat,
    setShowNotification
  };
};
