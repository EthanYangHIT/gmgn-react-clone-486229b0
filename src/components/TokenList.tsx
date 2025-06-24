
import React from 'react';
import { Box, Text, VStack, HStack, Button, Grid } from '@chakra-ui/react';
import { TrendingUp, TrendingDown } from 'lucide-react';

const TokenList = () => {
  const tokens = [
    { symbol: 'SOL', name: 'Solana', price: '$199.34', change: '+12.5%', positive: true },
    { symbol: 'BONK', name: 'Bonk', price: '$0.000012', change: '-8.2%', positive: false },
    { symbol: 'WIF', name: 'dogwifhat', price: '$2.45', change: '+5.8%', positive: true },
  ];

  return (
    <Box bg="gray.800" rounded="lg" border="1px solid" borderColor="gray.700" p={6}>
      <VStack spacing={4} align="stretch">
        <HStack justify="space-between">
          <Text fontSize="lg" fontWeight="semibold" color="white">热门代币</Text>
          <Button size="sm" variant="outline" borderColor="gray.600" color="white">
            查看全部
          </Button>
        </HStack>
        
        <Grid templateColumns="1fr 1fr 1fr" gap={4} fontSize="sm" color="gray.400" p={2} bg="gray.700/30">
          <Text>代币</Text>
          <Text textAlign="center">价格</Text>
          <Text textAlign="right">24h变化</Text>
        </Grid>

        {tokens.map((token, index) => (
          <Grid key={index} templateColumns="1fr 1fr 1fr" gap={4} p={2} fontSize="sm" _hover={{ bg: 'gray.700/20' }}>
            <VStack align="start" spacing={1}>
              <Text fontWeight="medium" color="white">{token.symbol}</Text>
              <Text fontSize="xs" color="gray.400">{token.name}</Text>
            </VStack>
            <Text textAlign="center" fontWeight="medium" color="white">{token.price}</Text>
            <HStack justify="flex-end" spacing={1}>
              {token.positive ? <TrendingUp size={14} color="green" /> : <TrendingDown size={14} color="red" />}
              <Text color={token.positive ? 'green.400' : 'red.400'}>{token.change}</Text>
            </HStack>
          </Grid>
        ))}
      </VStack>
    </Box>
  );
};

export default TokenList;
