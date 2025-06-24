
import React from 'react';
import { Box, Text, Button, HStack, VStack } from '@chakra-ui/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface TokenCardProps {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const TokenCard = ({ symbol, name, price, change, isPositive }: TokenCardProps) => {
  return (
    <Box
      bg="gray.800"
      p={4}
      rounded="lg"
      border="1px solid"
      borderColor="gray.700"
      _hover={{ borderColor: 'green.500/30' }}
      transition="all 0.2s"
    >
      <VStack align="start" spacing={3}>
        <HStack justify="space-between" w="full">
          <VStack align="start" spacing={1}>
            <Text fontWeight="bold" color="white">{symbol}</Text>
            <Text fontSize="sm" color="gray.400">{name}</Text>
          </VStack>
          <Button size="sm" variant="outline" borderColor="gray.600" color="white">
            Trade
          </Button>
        </HStack>
        <HStack justify="space-between" w="full">
          <Text fontSize="lg" fontWeight="bold" color="white">{price}</Text>
          <HStack spacing={1}>
            {isPositive ? <TrendingUp size={16} color="green" /> : <TrendingDown size={16} color="red" />}
            <Text color={isPositive ? 'green.400' : 'red.400'}>{change}</Text>
          </HStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default TokenCard;
