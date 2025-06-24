
import {
  Box,
  Container,
  VStack,
  HStack,
  Text,
  Button,
  Grid,
  GridItem,
  Flex,
  Badge,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react'
import { Copy, ExternalLink, TrendingUp, TrendingDown } from 'lucide-react'

const WalletPage = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const cardBg = useColorModeValue('gray.800', 'gray.800')
  const borderColor = useColorModeValue('gray.700', 'gray.700')

  return (
    <Box bg={bgColor} minH="100vh" color="white">
      <Container maxW="7xl" py={8}>
        <VStack spacing={8} align="stretch">
          {/* 钱包信息头部 */}
          <Box bg={cardBg} p={6} rounded="lg" border="1px solid" borderColor={borderColor}>
            <VStack spacing={4} align="start">
              <HStack justify="space-between" w="full">
                <VStack align="start" spacing={1}>
                  <Text fontSize="sm" color="gray.400">钱包地址</Text>
                  <HStack spacing={2}>
                    <Text fontFamily="mono" fontSize="lg">
                      7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU
                    </Text>
                    <Button size="sm" variant="ghost" color="gray.400">
                      <Copy size={16} />
                    </Button>
                    <Button size="sm" variant="ghost" color="gray.400">
                      <ExternalLink size={16} />
                    </Button>
                  </HStack>
                </VStack>
                <Badge colorScheme="green" px={3} py={1} rounded="full">
                  活跃
                </Badge>
              </HStack>
            </VStack>
          </Box>

          {/* 统计卡片 */}
          <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
            <GridItem>
              <Box bg={cardBg} p={6} rounded="lg" border="1px solid" borderColor={borderColor}>
                <VStack align="start" spacing={3}>
                  <Text color="gray.400" fontSize="sm">总资产价值</Text>
                  <Text fontSize="2xl" fontWeight="bold">$12,345.67</Text>
                  <HStack spacing={2}>
                    <TrendingUp size={16} color="green" />
                    <Text color="green.400" fontSize="sm">+5.2%</Text>
                    <Text color="gray.500" fontSize="sm">24h</Text>
                  </HStack>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box bg={cardBg} p={6} rounded="lg" border="1px solid" borderColor={borderColor}>
                <VStack align="start" spacing={3}>
                  <Text color="gray.400" fontSize="sm">总盈亏</Text>
                  <Text fontSize="2xl" fontWeight="bold" color="green.400">+$2,134.56</Text>
                  <HStack spacing={2}>
                    <TrendingUp size={16} color="green" />
                    <Text color="green.400" fontSize="sm">+17.8%</Text>
                    <Text color="gray.500" fontSize="sm">总收益率</Text>
                  </HStack>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box bg={cardBg} p={6} rounded="lg" border="1px solid" borderColor={borderColor}>
                <VStack align="start" spacing={3}>
                  <Text color="gray.400" fontSize="sm">持有代币数</Text>
                  <Text fontSize="2xl" fontWeight="bold">28</Text>
                  <HStack spacing={2}>
                    <Text color="blue.400" fontSize="sm">12 profitable</Text>
                    <Text color="red.400" fontSize="sm">16 loss</Text>
                  </HStack>
                </VStack>
              </Box>
            </GridItem>

            <GridItem>
              <Box bg={cardBg} p={6} rounded="lg" border="1px solid" borderColor={borderColor}>
                <VStack align="start" spacing={3}>
                  <Text color="gray.400" fontSize="sm">交易次数</Text>
                  <Text fontSize="2xl" fontWeight="bold">156</Text>
                  <HStack spacing={2}>
                    <Text color="gray.400" fontSize="sm">本月</Text>
                    <Text color="green.400" fontSize="sm">+12</Text>
                  </HStack>
                </VStack>
              </Box>
            </GridItem>
          </Grid>

          {/* 持仓列表 */}
          <Box bg={cardBg} rounded="lg" border="1px solid" borderColor={borderColor}>
            <VStack spacing={0} align="stretch">
              <Flex justify="space-between" align="center" p={6} borderBottom="1px solid" borderColor={borderColor}>
                <Text fontSize="lg" fontWeight="semibold">持仓代币</Text>
                <Button size="sm" variant="outline" borderColor="gray.600">
                  查看全部
                </Button>
              </Flex>
              
              {/* 表头 */}
              <Grid templateColumns="2fr 1fr 1fr 1fr 1fr 1fr" gap={4} p={4} bg="gray.700/30" fontSize="sm" color="gray.400">
                <Text>代币</Text>
                <Text textAlign="right">持有量</Text>
                <Text textAlign="right">价值</Text>
                <Text textAlign="right">成本</Text>
                <Text textAlign="right">盈亏</Text>
                <Text textAlign="right">24h变化</Text>
              </Grid>

              {/* 代币行 */}
              {[
                { symbol: 'SOL', name: 'Solana', amount: '12.34', value: '$2,456.78', cost: '$2,100.00', pnl: '+$356.78', change: '+12.5%', positive: true },
                { symbol: 'BONK', name: 'Bonk', amount: '1,234,567', value: '$892.34', cost: '$1,200.00', pnl: '-$307.66', change: '-8.2%', positive: false },
                { symbol: 'WIF', name: 'dogwifhat', amount: '456.78', value: '$1,234.56', cost: '$800.00', pnl: '+$434.56', change: '+5.8%', positive: true },
              ].map((token, index) => (
                <Box key={index}>
                  <Grid templateColumns="2fr 1fr 1fr 1fr 1fr 1fr" gap={4} p={4} fontSize="sm" _hover={{ bg: 'gray.700/20' }}>
                    <VStack align="start" spacing={1}>
                      <Text fontWeight="medium">{token.symbol}</Text>
                      <Text color="gray.400" fontSize="xs">{token.name}</Text>
                    </VStack>
                    <Text textAlign="right">{token.amount}</Text>
                    <Text textAlign="right" fontWeight="medium">{token.value}</Text>
                    <Text textAlign="right" color="gray.400">{token.cost}</Text>
                    <Text textAlign="right" color={token.positive ? 'green.400' : 'red.400'} fontWeight="medium">
                      {token.pnl}
                    </Text>
                    <HStack justify="flex-end" spacing={1}>
                      {token.positive ? <TrendingUp size={14} color="green" /> : <TrendingDown size={14} color="red" />}
                      <Text color={token.positive ? 'green.400' : 'red.400'}>{token.change}</Text>
                    </HStack>
                  </Grid>
                  {index < 2 && <Divider borderColor={borderColor} />}
                </Box>
              ))}
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  )
}

export default WalletPage
