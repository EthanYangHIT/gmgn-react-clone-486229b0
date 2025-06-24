
import React, { useState } from 'react';
import { Box, VStack, HStack, Text, Button, Input, Select, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { ArrowUpDown } from 'lucide-react';

const TradingPanel = () => {
  const [amount, setAmount] = useState('');
  const [selectedToken, setSelectedToken] = useState('SOL');

  return (
    <Box bg="gray.800" p={6} rounded="lg" border="1px solid" borderColor="gray.700">
      <VStack spacing={6} align="stretch">
        <Text fontSize="lg" fontWeight="semibold" color="white">
          交易面板
        </Text>

        <Tabs variant="enclosed" colorScheme="green">
          <TabList>
            <Tab color="gray.400" _selected={{ color: 'white', bg: 'green.500' }}>买入</Tab>
            <Tab color="gray.400" _selected={{ color: 'white', bg: 'red.500' }}>卖出</Tab>
          </TabList>

          <TabPanels>
            <TabPanel p={0} pt={4}>
              <VStack spacing={4} align="stretch">
                <VStack spacing={2} align="start">
                  <Text fontSize="sm" color="gray.400">选择代币</Text>
                  <Select
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                  >
                    <option value="SOL">SOL - Solana</option>
                    <option value="BONK">BONK - Bonk</option>
                    <option value="WIF">WIF - dogwifhat</option>
                  </Select>
                </VStack>

                <VStack spacing={2} align="start">
                  <Text fontSize="sm" color="gray.400">金额</Text>
                  <Input
                    placeholder="输入金额"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                  />
                </VStack>

                <HStack spacing={2}>
                  <Button size="sm" variant="outline" borderColor="gray.600" color="white">
                    25%
                  </Button>
                  <Button size="sm" variant="outline" borderColor="gray.600" color="white">
                    50%
                  </Button>
                  <Button size="sm" variant="outline" borderColor="gray.600" color="white">
                    75%
                  </Button>
                  <Button size="sm" variant="outline" borderColor="gray.600" color="white">
                    MAX
                  </Button>
                </HStack>

                <Button
                  w="full"
                  bg="green.500"
                  color="black"
                  fontWeight="medium"
                  _hover={{ bg: 'green.400' }}
                  leftIcon={<ArrowUpDown size={16} />}
                >
                  买入 {selectedToken}
                </Button>
              </VStack>
            </TabPanel>

            <TabPanel p={0} pt={4}>
              <VStack spacing={4} align="stretch">
                <VStack spacing={2} align="start">
                  <Text fontSize="sm" color="gray.400">选择代币</Text>
                  <Select
                    value={selectedToken}
                    onChange={(e) => setSelectedToken(e.target.value)}
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                  >
                    <option value="SOL">SOL - Solana</option>
                    <option value="BONK">BONK - Bonk</option>
                    <option value="WIF">WIF - dogwifhat</option>
                  </Select>
                </VStack>

                <VStack spacing={2} align="start">
                  <Text fontSize="sm" color="gray.400">数量</Text>
                  <Input
                    placeholder="输入数量"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    bg="gray.700"
                    borderColor="gray.600"
                    color="white"
                    _placeholder={{ color: 'gray.400' }}
                  />
                </VStack>

                <Button
                  w="full"
                  bg="red.500"
                  color="white"
                  fontWeight="medium"
                  _hover={{ bg: 'red.400' }}
                  leftIcon={<ArrowUpDown size={16} />}
                >
                  卖出 {selectedToken}
                </Button>
              </VStack>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </VStack>
    </Box>
  );
};

export default TradingPanel;
