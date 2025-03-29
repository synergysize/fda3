import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Flex, 
  HStack, 
  Text, 
  Button, 
  useDisclosure, 
  IconButton, 
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  useColorModeValue,
  Image,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const logoText = "$FDA";

  return (
    <Box 
      as="nav" 
      position="fixed" 
      w="100%" 
      zIndex={1000} 
      boxShadow={scrolled ? "lg" : "none"}
      bg={scrolled ? "rgba(15, 26, 45, 0.85)" : "transparent"}
      backdropFilter={scrolled ? "blur(10px)" : "none"}
      transition="all 0.3s ease"
    >
      <Flex
        h="80px"
        alignItems="center"
        justifyContent="space-between"
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <MotionBox 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Flex alignItems="center">
            <Box 
              as="span" 
              fontSize="3xl" 
              fontWeight="bold"
              letterSpacing="tighter"
              mr={2}
              className="gradient-text"
            >
              {logoText}
            </Box>
            <Heading 
              as="h1" 
              size="md" 
              display={{ base: 'none', md: 'block' }}
              background="linear-gradient(to right, white, rgba(255,255,255,0.7))"
              backgroundClip="text"
              fontWeight="medium"
            >
              First Doge Agent
            </Heading>
          </Flex>
        </MotionBox>

        {/* Desktop Navigation */}
        <HStack 
          spacing={8} 
          display={{ base: 'none', md: 'flex' }}
        >
          <MotionBox 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Text as={Link} to="/" fontWeight="medium" _hover={{ color: 'doge.500' }}>Home</Text>
          </MotionBox>
          <MotionBox
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Text as={Link} to="#about" fontWeight="medium" _hover={{ color: 'doge.500' }}>About</Text>
          </MotionBox>
          <MotionBox
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Text as={Link} to="#analytics" fontWeight="medium" _hover={{ color: 'doge.500' }}>Analytics</Text>
          </MotionBox>
          <MotionBox
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <Text as={Link} to="#chatbot" fontWeight="medium" _hover={{ color: 'doge.500' }}>Chatbot</Text>
          </MotionBox>
        </HStack>

        <MotionBox
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          display={{ base: 'none', md: 'block' }}
        >
          <Button 
            colorScheme="doge" 
            borderRadius="full" 
            px={6}
            fontWeight="bold"
            _hover={{ 
              transform: 'translateY(-2px)', 
              boxShadow: '0 10px 25px -5px rgba(246, 166, 35, 0.4)' 
            }}
            transition="all 0.3s ease"
          >
            Connect Wallet
          </Button>
        </MotionBox>

        {/* Mobile Navigation Button */}
        <IconButton
          display={{ base: 'flex', md: 'none' }}
          onClick={onOpen}
          icon={<HamburgerIcon />}
          variant="ghost"
          fontSize="24px"
          aria-label="Open Menu"
          colorScheme="whiteAlpha"
        />

        {/* Mobile Navigation Drawer */}
        <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent bg="dark.300">
            <DrawerCloseButton color="white" />
            <DrawerHeader borderBottomWidth="1px">
              <Text className="gradient-text" fontSize="2xl">First Doge Agent</Text>
            </DrawerHeader>
            <DrawerBody>
              <VStack spacing={6} align="start" mt={8}>
                <Text as={Link} to="/" fontWeight="medium" onClick={onClose}>Home</Text>
                <Text as={Link} to="#about" fontWeight="medium" onClick={onClose}>About</Text>
                <Text as={Link} to="#analytics" fontWeight="medium" onClick={onClose}>Analytics</Text>
                <Text as={Link} to="#chatbot" fontWeight="medium" onClick={onClose}>Chatbot</Text>
                <Button 
                  colorScheme="doge" 
                  size="md" 
                  borderRadius="full"
                  w="full"
                  mt={4}
                >
                  Connect Wallet
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>
    </Box>
  );
};

export default Navbar;