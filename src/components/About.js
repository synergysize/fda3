import React from 'react';
import {
  Box,
  Container,
  Flex,
  Text,
  Heading,
  SimpleGrid,
  Icon,
  VStack,
  HStack,
  Badge,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaShieldAlt, FaChartLine, FaRobot, FaLock, FaDatabase, FaEthereum, FaUsers, FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const FeatureCard = ({ icon, title, description, accentColor }) => {
  return (
    <MotionBox
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        borderRadius="xl"
        bg="dark.100"
        p={6}
        border="1px solid"
        borderColor="gray.700"
        boxShadow="xl"
        height="100%"
        _hover={{ 
          borderColor: accentColor,
          boxShadow: `0 15px 30px -10px ${accentColor}30` 
        }}
        transition="all 0.3s ease"
      >
        <Flex 
          w="50px" 
          h="50px" 
          bg={`${accentColor}20`} 
          color={accentColor} 
          borderRadius="lg" 
          align="center" 
          justify="center" 
          mb={4}
        >
          <Icon as={icon} boxSize={6} />
        </Flex>
        <Heading size="md" mb={3} fontWeight="semibold">{title}</Heading>
        <Text color="gray.400" fontSize="sm">{description}</Text>
      </Box>
    </MotionBox>
  );
};

const About = () => {
  return (
    <Box py={16} bg="dark.200" id="about">
      <Container maxW="1200px">
        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          mb={12}
          textAlign="center"
        >
          <Badge colorScheme="doge" mb={3}>ABOUT</Badge>
          <Heading mb={4} size="xl">
            The{" "}
            <Text as="span" className="gradient-text">
              First Doge Agent
            </Text>
            {" "}Initiative
          </Heading>
          <Text
            fontSize="lg"
            color="gray.400"
            maxW="800px"
            mx="auto"
          >
            Transforming government data transparency with blockchain technology and AI-powered analytics, $FDA represents a new paradigm in public finance and grant management.
          </Text>
        </MotionBox>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} mb={16}>
          <FeatureCard
            icon={FaDatabase}
            title="Real-Time Data"
            description="Access up-to-the-minute grant allocations from the DOGE API with transparent, verifiable source information."
            accentColor="#F6A623"
          />
          <FeatureCard
            icon={FaShieldAlt}
            title="Official Authority"
            description="Backed by federal data sources, ensuring all information is accurate, reliable, and officially recognized."
            accentColor="#3182CE"
          />
          <FeatureCard
            icon={FaRobot}
            title="AI-Powered Insights"
            description="Advanced chatbot interface allows intuitive querying of complex grant data without technical expertise."
            accentColor="#8B5CF6"
          />
          <FeatureCard
            icon={FaEthereum}
            title="Tokenized Access"
            description="The $FDA token provides governance rights, premium features, and participation in the data verification network."
            accentColor="#00C49F"
          />
        </SimpleGrid>

        <MotionBox
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            bg="dark.100"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="xl"
            border="1px solid"
            borderColor="gray.700"
          >
            <SimpleGrid columns={{ base: 1, lg: 2 }}>
              <Box p={{ base: 6, md: 10 }}>
                <Heading size="lg" mb={4}>
                  The $FDA Tokenomics
                </Heading>
                <Text color="gray.400" mb={6}>
                  The First Doge Agent token ($FDA) is designed to incentivize participation in the data verification network while providing governance and premium access to advanced features.
                </Text>
                <SimpleGrid columns={2} spacing={6} mb={8}>
                  <VStack align="start" spacing={1}>
                    <Text color="gray.400" fontSize="sm">Total Supply</Text>
                    <Text fontSize="xl" fontWeight="bold">21,000,000</Text>
                  </VStack>
                  <VStack align="start" spacing={1}>
                    <Text color="gray.400" fontSize="sm">Initial Price</Text>
                    <Text fontSize="xl" fontWeight="bold">$3.50</Text>
                  </VStack>
                  <VStack align="start" spacing={1}>
                    <Text color="gray.400" fontSize="sm">Governance</Text>
                    <Text fontSize="xl" fontWeight="bold">Yes</Text>
                  </VStack>
                  <VStack align="start" spacing={1}>
                    <Text color="gray.400" fontSize="sm">Staking Rewards</Text>
                    <Text fontSize="xl" fontWeight="bold">7.5% APY</Text>
                  </VStack>
                </SimpleGrid>
                <HStack spacing={4}>
                  <Button colorScheme="doge" size="md" borderRadius="full">
                    Token Details
                  </Button>
                  <Button variant="outline" colorScheme="brand" size="md" borderRadius="full">
                    Whitepaper
                  </Button>
                </HStack>
              </Box>
              <Box bg="dark.300" p={{ base: 6, md: 10 }}>
                <Heading size="md" mb={6}>Token Allocation</Heading>
                <SimpleGrid columns={1} spacing={5}>
                  {[
                    { name: "Treasury", percentage: "35%", icon: FaLock, color: "doge.500" },
                    { name: "Public Sale", percentage: "25%", icon: FaUsers, color: "brand.500" },
                    { name: "Team & Advisors", percentage: "20%", icon: FaUsers, color: "blue.400" },
                    { name: "Ecosystem Development", percentage: "15%", icon: FaDatabase, color: "green.400" },
                    { name: "Community Rewards", percentage: "5%", icon: FaCheckCircle, color: "purple.400" },
                  ].map((item, index) => (
                    <HStack key={index} spacing={4}>
                      <Flex
                        w="40px"
                        h="40px"
                        borderRadius="lg"
                        bg={`${item.color}20`}
                        color={item.color}
                        align="center"
                        justify="center"
                      >
                        <Icon as={item.icon} />
                      </Flex>
                      <Box>
                        <Text fontWeight="medium">{item.name}</Text>
                        <Text color="gray.400" fontSize="sm">{item.percentage} of supply</Text>
                      </Box>
                    </HStack>
                  ))}
                </SimpleGrid>
              </Box>
            </SimpleGrid>
          </Box>
        </MotionBox>
      </Container>
    </Box>
  );
};

export default About;