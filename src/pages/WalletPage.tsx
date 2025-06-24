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
  Avatar,
  IconButton,
  Input,
  Center,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  useDisclosure,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react'
import { Copy, ExternalLink, TrendingUp, TrendingDown, Share2, RefreshCw, UserPlus, Twitter, CheckCircle, Circle } from 'lucide-react'
import CloseIcon from "../images/nodata.svg?react";
import { useState } from 'react'
import CopyTradeDrawer from '@/components/CopyTradeDrawer';
import avatarPng from "/images/avatar.png";

const tabs = ["7D PnL", "Profit", "Distribution"]
const timeTabs = ["1d", "7d", "30d", "All"]

const bottomTabs = [
  { label: 'Recent PnL', key: 'recent' },
  { label: 'Holdings', key: 'holdings' },
  { label: 'Activity', key: 'activity' },
  { label: 'Deployed Tokens', key: 'deployed' },
];

const WalletPage = () => {
  const bgColor = useColorModeValue('gray.900', 'gray.900')
  const cardBg = useColorModeValue('gray.800', 'gray.800')
  const borderColor = useColorModeValue('gray.700', 'gray.700')
  const [activeTab, setActiveTab] = useState("7D PnL")
  const [activeTime, setActiveTime] = useState("7d")
  const [activeBottomTab, setActiveBottomTab] = useState('recent');
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box minH="100vh" color="white">
      <Container maxW="7xl" p="12px">
        <VStack spacing={"12px"} align="stretch">
          {/* 头像、昵称、地址、Add Twitter、Copy trade */}
          <Flex align="center" justify="space-between">
            <HStack spacing={3} align="center">
              <Avatar size="lg" name="FqBMib" />
              <VStack align="flex-start" spacing={0}>
                <HStack spacing={0}>
                  <Text color="white" fontWeight="bold" fontSize="14px">FqBMi...8ak</Text>
                  <IconButton aria-label="edit" icon={<RefreshCw size={14} />} size="xs" variant="ghost" colorScheme="gray" />
                  <IconButton aria-label="share" icon={<Share2 size={14} />} size="xs" variant="ghost" colorScheme="gray" />
                  <IconButton aria-label="refresh" icon={<RefreshCw size={14} />} size="xs" variant="ghost" colorScheme="gray" />
                </HStack>
                <HStack spacing={1}>
                  <Text color="gray.400" fontSize="12px">FqBMib</Text>
                  <IconButton aria-label="copy" icon={<Copy size={14} />} size="xs" variant="ghost" colorScheme="gray" />
                </HStack>
                <Button leftIcon={<Twitter size={16} />} size="xs" bgGradient="linear(to-r, #7EDFA3, #3E9AEF)" color="black" borderRadius="full" px={3} h="22px" fontSize="12px" mt={1}>
                  Add Twitter
                </Button>
              </VStack>
            </HStack>
            <HStack spacing={2}>
              <Button leftIcon={<Copy size={16} />} bg="#23242A" color="white" borderRadius="full" px={4} h="36px" fontWeight="bold" fontSize="14px" onClick={onOpen}>
                Copy trade
              </Button>
              <IconButton aria-label="add-user" icon={<UserPlus size={20} />} bg="#23242A" borderRadius="full" w="36px" h="36px" />
            </HStack>
          </Flex>

          {/* Tabs */}
          <Flex justify="space-between" align="center">
            <HStack spacing={1}>
              {tabs.map(tab => (
                <Button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  bg={activeTab === tab ? '#23242A' : 'transparent'}
                  color={activeTab === tab ? 'white' : 'gray.400'}
                  fontWeight="normal"
                  borderRadius="10px"
                  px={1.5}
                  h="36px"
                  fontSize="12px"
                >
                  {tab}
                </Button>
              ))}
            </HStack>
            <HStack spacing={1}>
              {timeTabs.map(tab => (
                <Button
                  key={tab}
                  onClick={() => setActiveTime(tab)}
                  bg={activeTime === tab ? '#23242A' : 'transparent'}
                  color={activeTime === tab ? 'white' : 'gray.400'}
                  fontWeight="normal"
                  borderRadius="8px"
                  px={2}
                  h="28px"
                  fontSize="12px"
                >
                  {tab}
                </Button>
              ))}
            </HStack>
          </Flex>

          {/* 7D Realized PnL 卡片 */}
          <Box bg="#18191B" borderRadius="16px" p={"16px"}>
            <Flex justify="space-between" align="center" mb={2}>
              <HStack>
                <Text color="white" fontWeight="bold" fontSize="14px">7D Realized PnL</Text>
                <RefreshCw size={16} color="#888" />
                <Text color="gray.400" fontSize="12px">USD</Text>
              </HStack>
              <Text color="white" fontWeight="bold" fontSize="14px">Win Rate</Text>
            </Flex>
            <Flex justify="space-between" align="flex-end" alignItems="flex-end">
              <VStack align="flex-start" spacing={0}>
                <Text color="white" fontWeight="bold" fontSize="14px">0%</Text>
                <Text color="gray.400" fontSize="12px">$0</Text>
              </VStack>
              <VStack align="flex-end" spacing={0}>
                <Text color="white" fontWeight="bold" fontSize="14px">0%</Text>
                <Text color="gray.400" fontSize="12px">$0 (--)</Text>
              </VStack>
            </Flex>
            <HStack mt={4} spacing={8}>
              <VStack align="flex-start" spacing={0}>
                <Text color="gray.400" fontSize="12px">Total PnL</Text>
                <Text color="gray.400" fontSize="12px">Unrealized Profits</Text>
              </VStack>
              <VStack align="flex-end" spacing={0} flex={1} alignSelf="flex-end">
                <Text color="gray.400" fontSize="12px">$0</Text>
                <Text color="gray.400" fontSize="12px">$0</Text>
              </VStack>
            </HStack>
            <Box borderBottom="1px dashed" borderColor="#23242A" mt={8} />
          </Box>

          {/* Phishing check 区块 */}
          <Box bg="#18191B" borderRadius="16px" p="16px">
            <HStack mb={3}>
              <Text color="white" fontWeight="bold" fontSize="14px">
                <span role="img" aria-label="phishing">
                  🐦
                </span>{" "}
                Phishing check
              </Text>
            </HStack>
            <VStack align="flex-start" spacing={2}>
              <HStack>
                <Circle size={16} color="#2ED573" fill="#2ED573" />
                <Text color="white" fontSize="12px">
                  Blacklist: 0 (0%)
                </Text>
              </HStack>
              <HStack>
                <Circle size={16} color="#2ED573" fill="#2ED573" />
                <Text color="white" fontSize="12px">
                  Didn't buy: 0 (0%)
                </Text>
              </HStack>
              <HStack>
                <Circle size={16} color="#2ED573" fill="#2ED573" />
                <Text color="white" fontSize="12px">
                  Sold {">"} Bought: 0 (0%)
                </Text>
              </HStack>
              <HStack>
                <Circle size={16} color="#2ED573" fill="#2ED573" />
                <Text color="white" fontSize="12px">
                  Buy/Sell within 5 secs: 0 (0%)
                </Text>
              </HStack>
            </VStack>
          </Box>

          {/* Holdings/PnL Section */}
          <Box>
            <HStack spacing={1} mb={4}>
              {bottomTabs.map(tab => (
                <Button
                  key={tab.key}
                  onClick={() => setActiveBottomTab(tab.key)}
                  bg={activeBottomTab === tab.key ? '#23242A' : 'transparent'}
                  color={activeBottomTab === tab.key ? 'white' : 'gray.400'}
                  fontWeight="normal"
                  borderRadius="10px"
                  px={3}
                  h="32px"
                  fontSize="13px"
                  minW="unset"
                  _hover={{ bg: activeBottomTab === tab.key ? '#23242A' : '#23242A33' }}
                >
                  {tab.label}
                </Button>
              ))}
            </HStack>
            {/* 内容区 */}
            {activeBottomTab === 'recent' && (
              <>
                <Flex
                  justify="space-between"
                  color="gray.400"
                  fontSize="12px"
                  py="10px"
                  borderBottom="1px solid #2D2D2F"
                >
                  <Text>Token / Last Active</Text>
                  <HStack spacing="12">
                    <Text>Balance</Text>
                    <Text>USD ($)</Text>
                    <Text>Position %</Text>
                    <Text>Holding Duration</Text>
                    <Text>P/L</Text>
                  </HStack>
                </Flex>
                <VStack py="20" spacing="4">
                  <CloseIcon />
                  <Text color="gray.500" fontSize="14px">
                    No buying or selling in the last 30 days.
                  </Text>
                </VStack>
              </>
            )}
            {activeBottomTab === 'holdings' && (
              <VStack py="20" spacing="4">
                <Text color="gray.500" fontSize="14px">
                  No holdings.
                </Text>
              </VStack>
            )}
            {activeBottomTab === 'activity' && (
              <VStack py="20" spacing="4">
                <Text color="gray.500" fontSize="14px">
                  No activity.
                </Text>
              </VStack>
            )}
            {activeBottomTab === 'deployed' && (
              <VStack py="20" spacing="4">
                <Text color="gray.500" fontSize="14px">
                  No deployed tokens.
                </Text>
              </VStack>
            )}
          </Box>
        </VStack>
      </Container>
      <CopyTradeDrawer isOpen={isOpen} onClose={onClose} />
    </Box>
  )
}

export default WalletPage
