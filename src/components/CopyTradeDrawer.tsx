import React from 'react';
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  VStack,
  HStack,
  Text,
  Button,
  Input,
  IconButton,
  useDisclosure,
  Badge,
  Divider,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Flex,
  Switch,
} from '@chakra-ui/react';
import { Info, X, Zap, User, Menu as MenuIcon, ChevronDown, Check } from 'lucide-react';
import { useState } from 'react';

interface CopyTradeDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CopyTradeDrawer: React.FC<CopyTradeDrawerProps> = ({ isOpen, onClose }) => {
  const [sellMethod, setSellMethod] = useState('copy');
  const [amount, setAmount] = useState('1');
  const isConfirmDisabled = !amount || parseFloat(amount) <= 0;

  // States for transaction settings
  const [slippage, setSlippage] = useState({ isAuto: true, value: '0' });
  const [priorityFee, setPriorityFee] = useState({ isAuto: true, value: '0.005' });
  const [isMevOn, setIsMevOn] = useState(false);

  return (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen} size="full">
      <DrawerOverlay />
      <DrawerContent bg="#18191B" color="white" maxW="420px" h="100vh" borderRadius={0}>
        <DrawerHeader px={4} py={4} borderBottomWidth="1px" borderColor="#23242A" display="flex" alignItems="center" justifyContent="space-between">
          <HStack spacing={2}>
            <Text fontWeight="bold" fontSize="20px">CopyTrade</Text>
            <Button variant="ghost" size="xs" color="gray.400" leftIcon={<Info size={16} />} px={1} h="24px">Tutorial</Button>
          </HStack>
          <IconButton aria-label="close" icon={<X size={20} />} variant="ghost" color="gray.400" onClick={onClose} />
        </DrawerHeader>
        <DrawerBody px={4} py={4}>
          <VStack align="stretch" spacing={4}>
            {/* 顶部说明 */}
            <HStack spacing={2}>
              <Text fontSize="15px" fontWeight="bold" bgGradient="linear(to-r, #FFD600, #FF00C7)" bgClip="text">
                Lightning mode, rapid on-chain
              </Text>
              <Info size={16} color="#FFD600" />
            </HStack>

            {/* 钱包选择 */}
            <Box bg="#23242A" borderRadius="10px" px={4} py={2} display="flex" alignItems="center" justifyContent="space-between">
              <HStack spacing={2}>
                <Badge bg="#23242A" color="white" borderRadius="6px" px={2} py={1} fontWeight="normal">W1 Wallet...</Badge>
                <Text color="gray.400" fontSize="14px">FqBM...8ak</Text>
                <IconButton aria-label="copy" icon={<Info size={14} />} size="xs" variant="ghost" colorScheme="gray" />
              </HStack>
              <HStack spacing={2}>
                <Text color="gray.400" fontSize="14px">0</Text>
                <IconButton aria-label="menu" icon={<Info size={14} />} size="xs" variant="ghost" colorScheme="gray" />
              </HStack>
            </Box>

            {/* Copy From 输入框 */}
            <Box>
              <Text color="gray.400" fontSize="13px" mb={1}>Copy From</Text>
              <Input value="FqBMibXWE43hRUp64Kbc1yZ8ZBZFUtTR5TAzYJu2bB8ak" bg="#23242A" borderRadius="8px" border="none" color="white" fontSize="15px" px={3} py={2} readOnly />
            </Box>

            {/* 购买方式 tab */}
            <HStack spacing={2}>
              <Button bg="#23242A" color="white" borderRadius="8px" px={4} h="32px" fontSize="14px" fontWeight="normal">Max Buy Amount</Button>
              <Button bg="#23242A" color="gray.400" borderRadius="8px" px={4} h="32px" fontSize="14px" fontWeight="normal">Fixed Buy</Button>
              <Button bg="#23242A" color="gray.400" borderRadius="8px" px={4} h="32px" fontSize="14px" fontWeight="normal">Fixed Ratio</Button>
            </HStack>

            {/* 金额输入 */}
            <InputGroup size="md">
              <InputLeftElement pointerEvents="none" h="100%" w="90px" pl={2}>
                <Text color="gray.400" fontSize="14px">Amount</Text>
              </InputLeftElement>
              <Input
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                bg="#23242A"
                borderRadius="8px"
                border="none"
                color="white"
                fontSize="15px"
                pl="90px"
                pr="48px"
                h="40px"
                textAlign="left"
              />
              <InputRightElement pointerEvents="none" h="100%" pr={3}>
                <Text color="gray.400" fontSize="15px">SOL</Text>
              </InputRightElement>
            </InputGroup>
            <HStack justify="space-between" color="gray.500" fontSize="13px">
              <Text>≈$144.48(1SOL)</Text>
              <Text>Bal: 0SOL</Text>
            </HStack>

            {/* Sell Method 区块 */}
            <Box>
              <Text color="gray.400" fontSize="13px" mb={2}>Sell Method</Text>
              <HStack spacing={0} bg="#2D2E33" borderRadius="8px" p="2px">
                <Button
                  flex={1}
                  bg={sellMethod === 'copy' ? '#393A3F' : 'transparent'}
                  color={sellMethod === 'copy' ? 'white' : 'gray.400'}
                  borderRadius="7px"
                  h="32px"
                  fontSize="14px"
                  fontWeight="normal"
                  onClick={() => setSellMethod('copy')}
                  _hover={{ bg: sellMethod === 'copy' ? '#393A3F' : '#393A3F80' }}
                >
                  Copy Sells
                </Button>
                <Button
                  flex={1}
                  bg={sellMethod === 'not' ? '#393A3F' : 'transparent'}
                  color={sellMethod === 'not' ? 'white' : 'gray.400'}
                  borderRadius="7px"
                  h="32px"
                  fontSize="14px"
                  fontWeight="normal"
                  onClick={() => setSellMethod('not')}
                  _hover={{ bg: sellMethod === 'not' ? '#393A3F' : '#393A3F80' }}
                >
                  Not Sells
                </Button>
              </HStack>
            </Box>

            <Divider borderColor="#23242A" />

            {/* Transaction Settings */}
            <VStack align="stretch" spacing={3}>
              <Flex justify="space-between" align="center" color="gray.400">
                <HStack spacing={4}>
                  <HStack spacing={1}>
                    <Zap size={16} />
                    <Text fontSize="12px">{slippage.isAuto ? 'Auto' : `${slippage.value}%`}</Text>
                  </HStack>
                  <HStack spacing={1}>
                    <User size={16} />
                    <Text fontSize="12px">{priorityFee.isAuto ? 'Auto(0.001)' : priorityFee.value}</Text>
                  </HStack>
                  <HStack spacing={1}>
                    {isMevOn ? <Check size={16} /> : <MenuIcon size={16} />}
                    <Text fontSize="12px">{isMevOn ? 'ON' : 'OFF'}</Text>
                  </HStack>
                </HStack>
                <ChevronDown size={20} />
              </Flex>

              <Flex justify="space-between" align="center">
                <Text color="gray.400" fontSize="12px">Slippage</Text>
                <HStack>
                  <Button
                    bg={slippage.isAuto ? "#393A3F" : "#18191B"}
                    color="white"
                    borderRadius="md"
                    size="sm"
                    px={4}
                    h="32px"
                    w="80px"
                    fontSize="12px"
                    borderWidth={slippage.isAuto ? "0px" : "1px"}
                    borderColor="white"
                    onClick={() => setSlippage({ ...slippage, isAuto: true })}
                  >
                    Auto
                  </Button>
                  <InputGroup size="sm" w="80px">
                    <Input
                      value={slippage.value}
                      onChange={(e) => setSlippage({ isAuto: false, value: e.target.value })}
                      bg="#23242A"
                      borderColor="#393A3F"
                      borderRadius="md"
                      textAlign="left"
                      pl={3}
                      pr="24px"
                      h="32px"
                      fontSize="12px"
                    />
                    <InputRightElement pointerEvents="none" children="%" color="gray.500" pr={2} />
                  </InputGroup>
                </HStack>
              </Flex>

              <Flex justify="space-between" align="center">
                <HStack>
                  <Text color="gray.400" fontSize="12px">Priority Fee(SOL)</Text>
                  <Info size={14} color="gray.500" />
                </HStack>
                <HStack>
                  <Button
                    bg={priorityFee.isAuto ? "#393A3F" : "#18191B"}
                    color="white"
                    borderRadius="md"
                    size="sm"
                    px={4}
                    h="32px"
                    w="80px"
                    fontSize="12px"
                    borderWidth={priorityFee.isAuto ? "0px" : "1px"}
                    borderColor="white"
                    onClick={() => setPriorityFee({ ...priorityFee, isAuto: true })}
                  >
                    Auto 0.001
                  </Button>
                  <Input
                    value={priorityFee.value}
                    onChange={(e) => setPriorityFee({ isAuto: false, value: e.target.value })}
                    bg="#23242A"
                    borderColor="#393A3F"
                    borderRadius="md"
                    w="80px"
                    h="32px"
                    textAlign="left"
                    pl={3}
                    fontSize="12px"
                  />
                </HStack>
              </Flex>

              <Flex justify="space-between" align="center">
                <HStack>
                  <Text color="gray.400" fontSize="12px">Max Auto Prio Fee</Text>
                  <Info size={14} color="gray.500" />
                </HStack>
                <InputGroup size="sm" w="calc(160px + 0.5rem)">
                  <Input defaultValue="0.001" bg="#23242A" borderColor="#393A3F" borderRadius="md" textAlign="left" pl={3} pr="40px" h="32px" fontSize="12px" />
                  <InputRightElement pointerEvents="none" children="SOL" color="gray.500" pr={3} />
                </InputGroup>
              </Flex>

              <Flex justify="space-between" align="center">
                <Text color="gray.400" fontSize="12px">Anti-MEV RPC</Text>
                <Switch colorScheme="purple" isChecked={isMevOn} onChange={(e) => setIsMevOn(e.target.checked)} />
              </Flex>
            </VStack>

            <Button
              bg="white"
              color="black"
              w="100%"
              h="48px"
              borderRadius="12px"
              fontSize="16px"
              mt={4}
              isDisabled={isConfirmDisabled}
              opacity={isConfirmDisabled ? 0.3 : 1}
              _hover={{ bg: "white" }}
              onClick={onClose}
            >
              Confirm
            </Button>
            
            <Text color="gray.500" fontSize="12px" textAlign="center" pt={2}>
              Note: Ensure your account has enough balance for auto trading to run smoothly.
            </Text>

          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CopyTradeDrawer; 