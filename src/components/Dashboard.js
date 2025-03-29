import React, { useContext } from 'react';
import {
  Box,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
  Text,
  Heading,
  Icon,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Badge,
  Link,
  Spinner,
  Center,
  useColorModeValue,
  Button,
} from '@chakra-ui/react';
import { FaChartLine, FaChartPie, FaCheckCircle, FaExternalLinkAlt } from 'react-icons/fa';
import { DataContext } from '../context/DataContext';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const StatCard = ({ title, value, icon, accentColor, helpText }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ translateY: -5 }}
    >
      <Box
        bg="dark.100"
        p={6}
        borderRadius="lg"
        boxShadow="xl"
        border="1px solid"
        borderColor="gray.700"
        _hover={{ borderColor: accentColor, boxShadow: `0 4px 20px -5px ${accentColor}30` }}
        transition="all 0.3s ease"
      >
        <Flex justifyContent="space-between">
          <Stat> {/* <-- Add this wrapper */}
            <StatLabel color="gray.400" fontSize="sm">{title}</StatLabel>
            <StatNumber fontSize="2xl" fontWeight="bold" mt={2}>
              {value}
            </StatNumber>
            {helpText && (
              <StatHelpText color="gray.400" fontSize="xs" mt={1}>
                {helpText}
              </StatHelpText>
            )}
          </Stat> {/* <-- Close the wrapper here */}
          <Box
            p={2}
            borderRadius="md"
            bg={`${accentColor}20`}
            color={accentColor}
            height="fit-content"
          >
            <Icon as={icon} boxSize={6} />
          </Box>
        </Flex>
      </Box>
    </MotionBox>
  );
};

const Dashboard = () => {
  const { 
    grantsData, 
    loading, 
    error, 
    totalGrantsValue, 
    totalSavings, 
    averageGrantValue 
  } = useContext(DataContext);

  if (loading) {
    return (
      <Center h="300px">
        <Spinner size="xl" color="doge.500" thickness="4px" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center h="300px">
        <Text color="red.400">Error loading data: {error}</Text>
      </Center>
    );
  }

  // Format currency values
  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: 'USD',
      notation: 'compact',
      compactDisplay: 'short',
      maximumFractionDigits: 1
    }).format(value);
  };

  return (
    <Box py={6} id="analytics">
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
      >
        <Heading mb={8} textAlign="center" size="xl">
          <Text as="span" className="gradient-text">
            $FDA
          </Text>
          {" "}Dashboard
        </Heading>
      </MotionBox>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <StatCard
          title="Total Grant Value"
          value={formatCurrency(totalGrantsValue)}
          icon={FaChartLine}
          accentColor="#F6A623"
          helpText="Cumulative value of all grants"
        />
        <StatCard
          title="Total Savings"
          value={formatCurrency(totalSavings)}
          icon={FaCheckCircle}
          accentColor="#00C49F"
          helpText="Amount saved through efficiency"
        />
        <StatCard
          title="Average Grant Value"
          value={formatCurrency(averageGrantValue)}
          icon={FaChartPie}
          accentColor="#8B5CF6"
          helpText="Mean value per grant"
        />
      </SimpleGrid>

      <MotionBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        mt={12}
      >
        <Box
          bg="dark.100"
          p={6}
          borderRadius="lg"
          boxShadow="xl"
          border="1px solid"
          borderColor="gray.700"
          overflowX="auto"
        >
          <Heading size="md" mb={4}>Recent High-Value Grants</Heading>
          
          <TableContainer>
            <Table variant="simple" size="sm">
              <Thead>
                <Tr>
                  <Th color="gray.400">Date</Th>
                  <Th color="gray.400">Agency</Th>
                  <Th color="gray.400">Recipient</Th>
                  <Th isNumeric color="gray.400">Value</Th>
                  <Th isNumeric color="gray.400">Savings</Th>
                  <Th color="gray.400">Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                {grantsData.map((grant, index) => (
                  <Tr key={index} _hover={{ bg: 'dark.200' }} transition="background 0.2s">
                    <Td>{grant.date}</Td>
                    <Td>
                      <Text noOfLines={1} maxW="200px">
                        {grant.agency}
                      </Text>
                    </Td>
                    <Td>
                      <Text noOfLines={1} maxW="200px">
                        {grant.recipient}
                      </Text>
                    </Td>
                    <Td isNumeric fontWeight="medium" color="doge.300">
                      {formatCurrency(grant.value)}
                    </Td>
                    <Td isNumeric>
                      {grant.savings ? (
                        <Badge colorScheme="green" variant="subtle" px={2} py={1}>
                          {formatCurrency(grant.savings)}
                        </Badge>
                      ) : (
                        <Text fontSize="sm" color="gray.500">N/A</Text>
                      )}
                    </Td>
                    <Td>
                      {grant.link ? (
                        <Link href={grant.link} isExternal color="brand.400">
                          <Flex align="center">
                            <Text mr={1} fontSize="sm">View</Text>
                            <Icon as={FaExternalLinkAlt} boxSize={3} />
                          </Flex>
                        </Link>
                      ) : (
                        <Text fontSize="sm" color="gray.500">N/A</Text>
                      )}
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
          
          <Flex justify="center" mt={6}>
            <Button
              variant="outline"
              colorScheme="brand"
              size="sm"
              rightIcon={<Icon as={FaExternalLinkAlt} />}
            >
              View All Grants
            </Button>
          </Flex>
        </Box>
      </MotionBox>
    </Box>
  );
};

export default Dashboard;
