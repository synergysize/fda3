import React from 'react';
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Stack,
  SimpleGrid,
  Icon,
  HStack,
  VStack,
  Badge,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaShieldAlt, FaChartLine, FaRobot, FaLock, FaExternalLinkAlt, FaEthereum } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);

const Hero = () => {
  return (
    <Box 
      pt="120px" 
      pb="60px" 
      pos="relative" 
      overflow="hidden"
      id="home"
      bg="linear-gradient(180deg, rgba(15, 26, 45, 1) 0%, rgba(15, 26, 45, 0.9) 100%)"
    >
      {/* Background elements */}
      <Box 
        position="absolute" 
        top="-20%" 
        left="-10%" 
        height="400px" 
        width="400px" 
        background="radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0) 70%)" 
        borderRadius="full"
        zIndex="0"
      />
      <Box 
        position="absolute" 
        bottom="-10%" 
        right="-5%" 
        height="350px" 
        width="350px" 
        background="radial-gradient(circle, rgba(246, 166, 35, 0.15) 0%, rgba(246, 166, 35, 0) 70%)" 
        borderRadius="full"
        zIndex="0"
      />
      
      <Container maxW="1200px" zIndex="1" position="relative">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* Left Side - Text Content */}
          <Box>
            <MotionHeading
              as="h1"
              size="3xl"
              fontWeight="bold"
              lineHeight="1.2"
              mb={6}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Welcome to the{" "}
              <Box as="span" className="gradient-text">
                First Doge Agent
              </Box>
            </MotionHeading>
            
            <MotionText
              fontSize="xl"
              color="gray.300"
              mb={8}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              The first tokenized federal data agent ($FDA) providing transparent, real-time access to government grant information with cutting-edge blockchain technology.
            </MotionText>
            
            <MotionBox
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HStack spacing={3} mb={8}>
                <Badge 
                  colorScheme="purple" 
                  p={2} 
                  borderRadius="full" 
                  display="flex" 
                  alignItems="center"
                >
                  <Icon as={FaShieldAlt} mr={1} />
                  Official Data
                </Badge>
                
                <Badge 
                  colorScheme="green" 
                  p={2} 
                  borderRadius="full" 
                  display="flex" 
                  alignItems="center"
                >
                  <Icon as={FaLock} mr={1} />
                  Secure
                </Badge>
                
                <Badge 
                  colorScheme="orange" 
                  p={2} 
                  borderRadius="full" 
                  display="flex" 
                  alignItems="center"
                >
                  <Icon as={FaEthereum} mr={1} />
                  Tokenized
                </Badge>
              </HStack>
            </MotionBox>
            
            <MotionBox
              display="flex"
              flexDir={{ base: "column", sm: "row" }}
              gap={4}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button
                size="lg"
                colorScheme="doge"
                borderRadius="full"
                px={8}
                leftIcon={<FaChartLine />}
                _hover={{ 
                  transform: 'translateY(-2px)', 
                  boxShadow: '0 10px 25px -5px rgba(246, 166, 35, 0.4)' 
                }}
                transition="all 0.3s ease"
              >
                Explore Data
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                borderRadius="full"
                borderColor="brand.500"
                color="brand.400"
                px={8}
                leftIcon={<FaRobot />}
                _hover={{ 
                  transform: 'translateY(-2px)', 
                  borderColor: 'brand.300',
                  boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.2)' 
                }}
                transition="all 0.3s ease"
              >
                Ask $FDA Bot
              </Button>
            </MotionBox>
            
            {/* Metrics */}
            <MotionBox
              mt={12}
              p={6}
              bg="dark.100"
              borderRadius="xl"
              border="1px solid"
              borderColor="gray.700"
              boxShadow="xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.3)" }}
            >
              <Text fontWeight="medium" mb={4}>$FDA Token Metrics</Text>
              <SimpleGrid columns={3} spacing={4} fontSize="sm">
                <Box>
                  <Text color="gray.400">Token Price</Text>
                  <Text fontSize="xl" fontWeight="bold" className="gradient-text">$4.27</Text>
                </Box>
                <Box>
                  <Text color="gray.400">Total Supply</Text>
                  <Text fontSize="xl" fontWeight="bold">21M</Text>
                </Box>
                <Box>
                  <Text color="gray.400">Market Cap</Text>
                  <Text fontSize="xl" fontWeight="bold">$89.67M</Text>
                </Box>
              </SimpleGrid>
              <Button 
                mt={4} 
                size="sm" 
                variant="ghost" 
                colorScheme="brand"
                rightIcon={<FaExternalLinkAlt />}
              >
                View on Etherscan
              </Button>
            </MotionBox>
          </Box>
          
          {/* Right Side - Animated visual */}
          <Flex align="center" justify="center" position="relative">
            <MotionBox
              position="relative"
              w="full"
              h="500px"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
            >
              {/* Central circle */}
              <MotionBox
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                height="220px"
                width="220px"
                borderRadius="full"
                background="radial-gradient(circle, rgba(246, 166, 35, 0.3) 0%, rgba(246, 166, 35, 0.1) 70%)"
                border="2px solid"
                borderColor="doge.500"
                display="flex"
                alignItems="center"
                justifyContent="center"
                boxShadow="0 0 20px rgba(246, 166, 35, 0.4)"
                animate={{ 
                  boxShadow: ['0 0 20px rgba(246, 166, 35, 0.4)', '0 0 40px rgba(246, 166, 35, 0.6)', '0 0 20px rgba(246, 166, 35, 0.4)'],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Text
                  fontSize="5xl"
                  fontWeight="bold"
                  className="gradient-text"
                >
                  $FDA
                </Text>
              </MotionBox>
              
              {/* Floating elements */}
              {[
                { 
                  icon: FaShieldAlt, 
                  text: "Government Data", 
                  position: { top: "15%", left: "20%" }, 
                  delay: 0.2,
                  color: "brand.500" 
                },
                { 
                  icon: FaChartLine, 
                  text: "Analytics", 
                  position: { top: "25%", right: "15%" }, 
                  delay: 0.4,
                  color: "doge.500" 
                },
                { 
                  icon: FaRobot, 
                  text: "AI Assistant", 
                  position: { bottom: "30%", left: "10%" }, 
                  delay: 0.6,
                  color: "blue.400" 
                },
                { 
                  icon: FaEthereum, 
                  text: "Blockchain", 
                  position: { bottom: "15%", right: "20%" }, 
                  delay: 0.8,
                  color: "purple.400" 
                },
              ].map((item, index) => (
                <MotionBox
                  key={index}
                  position="absolute"
                  {...item.position}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ 
                    opacity: 1, 
                    y: 0, 
                    transition: { delay: item.delay, duration: 0.5 } 
                  }}
                  style={{ animation: `float 3s ease-in-out infinite ${index * 0.5}s` }}
                >
                  <Flex
                    bg="dark.100"
                    borderRadius="full"
                    p={4}
                    alignItems="center"
                    boxShadow="lg"
                    border="1px solid"
                    borderColor="gray.700"
                    _hover={{ borderColor: item.color }}
                    transition="all 0.3s ease"
                  >
                    <Icon as={item.icon} color={item.color} boxSize={5} mr={2} />
                    <Text fontWeight="medium">{item.text}</Text>
                  </Flex>
                </MotionBox>
              ))}
              
              {/* Connecting lines (SVG) */}
              <svg
                width="100%"
                height="100%"
                style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none' }}
              >
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="20%"
                  y2="15%"
                  stroke="#8B5CF6"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="85%"
                  y2="25%"
                  stroke="#F6A623"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="10%"
                  y2="70%"
                  stroke="#3182CE"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                />
                <motion.line
                  x1="50%"
                  y1="50%"
                  x2="80%"
                  y2="85%"
                  stroke="#9F7AEA"
                  strokeWidth="1"
                  strokeDasharray="5,5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                />
              </svg>
            </MotionBox>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Hero;