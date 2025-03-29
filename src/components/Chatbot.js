import React, { useState, useContext, useRef, useEffect } from 'react';
import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  VStack,
  HStack,
  Icon,
  Avatar,
  useColorModeValue,
  IconButton,
  InputGroup,
  InputRightElement,
  Heading,
  Collapse
} from '@chakra-ui/react';
import { FaRobot, FaPaperPlane, FaRegTimesCircle, FaTimes, FaChevronDown } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { DataContext } from '../context/DataContext';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Hello! I\'m the First Doge Agent ($FDA) chatbot. How can I help you today? You can ask me about grant data like "What\'s the highest grant?" or "How much total savings?"', 
      timestamp: new Date() 
    }
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);
  const { answerQuery } = useContext(DataContext);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => setInput(e.target.value);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = () => {
    if (input.trim() === '') return;

    // Add user message
    const newMessages = [
      ...messages,
      { sender: 'user', text: input, timestamp: new Date() }
    ];
    setMessages(newMessages);
    setInput('');

    // Bot response using context function
    setTimeout(() => {
      const botResponse = answerQuery(input);
      setMessages([
        ...newMessages,
        { sender: 'bot', text: botResponse, timestamp: new Date() }
      ]);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex={999}>
      <AnimatePresence>
        {isOpen && (
          <MotionBox
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            position="absolute"
            bottom="80px"
            right="0"
            width="350px"
            bg="dark.100"
            borderRadius="md"
            overflow="hidden"
            boxShadow="0 10px 30px -5px rgba(0, 0, 0, 0.3)"
            border="1px solid"
            borderColor="gray.700"
          >
            {/* Chat Header */}
            <Flex 
              align="center" 
              justify="space-between" 
              bg="linear-gradient(90deg, #0F1A2D 0%, #1E293B 100%)"
              p={3} 
              borderBottom="1px solid" 
              borderColor="gray.700"
            >
              <HStack>
                <Avatar 
                  size="sm" 
                  bg="doge.500" 
                  icon={<FaRobot fontSize="1.2rem" />} 
                />
                <Box>
                  <Text fontWeight="bold">$FDA Assistant</Text>
                  <Text fontSize="xs" color="gray.400">Federal Data Agent</Text>
                </Box>
              </HStack>
              <IconButton
                aria-label="Close chatbot"
                icon={<FaTimes />}
                size="sm"
                variant="ghost"
                onClick={toggleChat}
              />
            </Flex>

            {/* Chat Messages */}
            <Box 
              height="350px" 
              overflowY="auto" 
              p={3} 
              className="scrollbar-hidden"
            >
              <VStack spacing={3} align="stretch">
                {messages.map((msg, index) => (
                  <MotionFlex
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    justify={msg.sender === 'user' ? 'flex-end' : 'flex-start'}
                  >
                    <Box
                      maxW="80%"
                      bg={msg.sender === 'user' ? 'brand.500' : 'gray.700'}
                      color="white"
                      borderRadius="lg"
                      px={3}
                      py={2}
                      fontSize="sm"
                    >
                      <Text>{msg.text}</Text>
                      <Text fontSize="xs" opacity={0.7} textAlign="right" mt={1}>
                        {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </Text>
                    </Box>
                  </MotionFlex>
                ))}
                <div ref={chatEndRef} />
              </VStack>
            </Box>

            {/* Chat Input */}
            <Box 
              p={3} 
              borderTop="1px solid" 
              borderColor="gray.700"
              background="linear-gradient(0deg, rgba(15, 23, 42, 0.9) 0%, rgba(30, 41, 59, 0.8) 100%)"
            >
              <HStack>
                <InputGroup>
                  <Input
                    placeholder="Ask about grants..."
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    bg="dark.200"
                    border="1px solid"
                    borderColor="gray.600"
                    _focus={{ borderColor: 'doge.500', boxShadow: '0 0 0 1px #F6A623' }}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label="Send message"
                      icon={<FaPaperPlane />}
                      size="sm"
                      variant="ghost"
                      colorScheme="doge"
                      onClick={handleSubmit}
                    />
                  </InputRightElement>
                </InputGroup>
              </HStack>
            </Box>
          </MotionBox>
        )}
      </AnimatePresence>

      {/* Chatbot Toggle Button */}
      <MotionBox
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          onClick={toggleChat}
          size="lg"
          borderRadius="full"
          boxShadow="lg"
          color="white"
          bg={isOpen ? 'brand.600' : 'doge.500'}
          _hover={{ bg: isOpen ? 'brand.700' : 'doge.600' }}
          position="relative"
          rightIcon={isOpen ? <FaChevronDown /> : undefined}
          leftIcon={!isOpen && <FaRobot />}
        >
          {isOpen ? 'Minimize' : 'Ask $FDA'}
        </Button>
      </MotionBox>
    </Box>
  );
};

export default Chatbot;