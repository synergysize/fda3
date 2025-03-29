import React from 'react';
import { Box, Container } from '@chakra-ui/react';
import Hero from '../components/Hero';
import About from '../components/About';
import Dashboard from '../components/Dashboard';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <Box>
      <Hero />
      <About />
      <Container maxW="1200px" py={16}>
        <Dashboard />
      </Container>
      <Chatbot />
    </Box>
  );
};

export default Home;