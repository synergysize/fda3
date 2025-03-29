import React from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  VStack,
  Text,
  Link,
  Button,
  Divider,
  useColorModeValue,
  Icon,
  Stack,
} from '@chakra-ui/react';
import { FaTwitter, FaDiscord, FaTelegram, FaGithub, FaEthereum } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Footer = () => {
  return (
    <Box bg="dark.100" color="white">
      <Container as={Stack} maxW="1200px" py={10}>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align={{ base: 'center', md: 'flex-start' }}
          gap={8}
        >
          <VStack spacing={4} align={{ base: 'center', md: 'flex-start' }}>
            <Box>
              <MotionBox
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Text fontSize="2xl" fontWeight="bold" className="gradient-text">$FDA</Text>
              </MotionBox>
              <Text fontSize="md" color="gray.300" fontWeight="medium">First Doge Agent</Text>
            </Box>
            <Text color="gray.400" fontSize="sm" maxW="300px" textAlign={{ base: 'center', md: 'left' }}>
              The official tokenized representative of the DOGE initiative for transparent government grant management.
            </Text>
            <HStack spacing={4} pt={2}>
              {[
                { icon: FaTwitter, label: 'Twitter', href: '#' },
                { icon: FaDiscord, label: 'Discord', href: '#' },
                { icon: FaTelegram, label: 'Telegram', href: '#' },
                { icon: FaGithub, label: 'GitHub', href: '#' },
              ].map((social) => (
                <MotionBox
                  key={social.label}
                  whileHover={{ y: -4, color: '#F6A623' }}
                  transition={{ duration: 0.2 }}
                >
                  <Link href={social.href} isExternal aria-label={social.label}>
                    <Icon as={social.icon} boxSize={5} />
                  </Link>
                </MotionBox>
              ))}
            </HStack>
          </VStack>

          <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 8, md: 16 }}>
            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
              <Text fontWeight="bold" fontSize="lg">Platform</Text>
              <Link href="#">Home</Link>
              <Link href="#about">About</Link>
              <Link href="#analytics">Analytics</Link>
              <Link href="#chatbot">Chatbot</Link>
            </VStack>

            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
              <Text fontWeight="bold" fontSize="lg">Resources</Text>
              <Link href="#">Documentation</Link>
              <Link href="#">API</Link>
              <Link href="#">FAQ</Link>
              <Link href="#">Terms of Service</Link>
            </VStack>

            <VStack align={{ base: 'center', md: 'flex-start' }} spacing={3}>
              <Text fontWeight="bold" fontSize="lg">$FDA Token</Text>
              <Link href="#">Tokenomics</Link>
              <Link href="#">Buy $FDA</Link>
              <Link href="#">Governance</Link>
              <HStack spacing={2} pt={1}>
                <Icon as={FaEthereum} />
                <Text fontSize="sm" color="gray.300">0x1234...5678</Text>
              </HStack>
            </VStack>
          </Stack>
        </Flex>

        <Divider my={6} borderColor="gray.700" />

        <Flex
          direction={{ base: 'column', md: 'row' }}
          justify="space-between"
          align="center"
          fontSize="sm"
        >
          <Text color="gray.400">© 2025 First Doge Agent ($FDA). All rights reserved.</Text>
          <HStack spacing={4} mt={{ base: 4, md: 0 }}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Use</Link>
            <Link href="#">Contact</Link>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;