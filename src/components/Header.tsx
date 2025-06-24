
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
} from '@chakra-ui/react'
import { Search, Settings, MoreHorizontal, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import SignUpModal from './SignUpModal'

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [showSignUpModal, setShowSignUpModal] = useState(false)

  const bgColor = useColorModeValue('black', 'black')
  const borderColor = useColorModeValue('gray.800', 'gray.800')

  // 未登录时的简化头部
  if (!isLoggedIn) {
    return (
      <>
        <Box
          position="sticky"
          top={0}
          zIndex={50}
          bg={bgColor}
          borderBottom="1px solid"
          borderColor={borderColor}
        >
          <Flex align="center" justify="space-between" px={4} py={3}>
            {/* 左侧：Logo 和链选择器 */}
            <HStack spacing={4}>
              <HStack spacing={2}>
                <Box w={6} h={6} display="flex" alignItems="center" justifyContent="center">
                  <Image src="/gmgn-logo.svg" alt="GMGN" w={5} h={5} />
                </Box>
                <Menu>
                  <MenuButton
                    as={Button}
                    variant="outline"
                    size="sm"
                    color="white"
                    borderColor="gray.600"
                    bg="transparent"
                    _hover={{ color: 'gray.300' }}
                    rightIcon={<ChevronDown size={16} color="gray.400" />}
                  >
                    <HStack spacing={2}>
                      <Image src="/public/images/solana-logo.png" alt="Solana" w={4} h={4} />
                      <Text>SOL</Text>
                    </HStack>
                  </MenuButton>
                  <MenuList bg="gray.800" borderColor="gray.700" minW="120px">
                    <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                      <HStack spacing={2}>
                        <Image src="/public/images/solana-logo.png" alt="Solana" w={5} h={5} />
                        <Text>SOL</Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                      <HStack spacing={2}>
                        <Image src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" w={5} h={5} />
                        <Text>ETH</Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                      <HStack spacing={2}>
                        <Image src="https://cryptologos.cc/logos/coinbase-coin-logo.png" alt="Base" w={5} h={5} />
                        <Text>Base</Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                      <HStack spacing={2}>
                        <Image src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BSC" w={5} h={5} />
                        <Text>BSC</Text>
                      </HStack>
                    </MenuItem>
                    <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                      <HStack spacing={2}>
                        <Image src="https://cryptologos.cc/logos/tron-trx-logo.png" alt="Tron" w={5} h={5} />
                        <Text>Tron</Text>
                      </HStack>
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            </HStack>

            {/* 中间：搜索和设置图标 */}
            <HStack spacing={4} color="gray.400">
              <Box cursor="pointer" _hover={{ color: 'white' }} transition="colors 0.2s">
                <Search size={20} />
              </Box>
              <Box cursor="pointer" _hover={{ color: 'white' }} transition="colors 0.2s">
                <Settings size={20} />
              </Box>
            </HStack>

            {/* 右侧：登录按钮 */}
            <HStack spacing={3}>
              <Button
                variant="ghost"
                color="white"
                _hover={{ color: 'gray.300' }}
                onClick={() => setShowSignUpModal(true)}
              >
                Sign Up
              </Button>
              <Button
                bg="white"
                color="black"
                fontWeight="medium"
                _hover={{ bg: 'gray.200' }}
                onClick={() => setIsLoggedIn(true)}
              >
                Log In
              </Button>
            </HStack>
          </Flex>
        </Box>
        
        <SignUpModal 
          isOpen={showSignUpModal} 
          onClose={() => setShowSignUpModal(false)} 
        />
      </>
    )
  }

  // 已登录时的完整头部
  return (
    <Box
      position="sticky"
      top={0}
      zIndex={50}
      bg={bgColor}
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      {/* 顶部工具栏 */}
      <Flex align="center" justify="space-between" px={4} py={2} fontSize="sm">
        <HStack spacing={4}>
          <HStack spacing={2}>
            <Box w={6} h={6} display="flex" alignItems="center" justifyContent="center">
              <Image src="/gmgn-logo.svg" alt="GMGN" w={4} h={4} />
            </Box>
            <Menu>
              <MenuButton
                as={Button}
                variant="ghost"
                size="sm"
                color="white"
                fontWeight="medium"
                _hover={{ color: 'gray.300' }}
                rightIcon={<ChevronDown size={16} color="gray.400" />}
              >
                <HStack spacing={2}>
                  <Image src="/public/images/solana-logo.png" alt="Solana" w={4} h={4} />
                  <Text>SOL</Text>
                </HStack>
              </MenuButton>
              <MenuList bg="gray.800" borderColor="gray.700" minW="120px">
                <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                  <HStack spacing={2}>
                    <Image src="/public/images/solana-logo.png" alt="Solana" w={5} h={5} />
                    <Text>SOL</Text>
                  </HStack>
                </MenuItem>
                <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                  <HStack spacing={2}>
                    <Image src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" w={5} h={5} />
                    <Text>ETH</Text>
                  </HStack>
                </MenuItem>
                <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                  <HStack spacing={2}>
                    <Image src="https://cryptologos.cc/logos/coinbase-coin-logo.png" alt="Base" w={5} h={5} />
                    <Text>Base</Text>
                  </HStack>
                </MenuItem>
                <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                  <HStack spacing={2}>
                    <Image src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BSC" w={5} h={5} />
                    <Text>BSC</Text>
                  </HStack>
                </MenuItem>
                <MenuItem bg="gray.800" color="white" _hover={{ bg: 'gray.700' }}>
                  <HStack spacing={2}>
                    <Image src="https://cryptologos.cc/logos/tron-trx-logo.png" alt="Tron" w={5} h={5} />
                    <Text>Tron</Text>
                  </HStack>
                </MenuItem>
              </MenuList>
            </Menu>
          </HStack>
          <HStack spacing={2} color="gray.400">
            <Search size={16} />
            <Settings size={16} />
            <MoreHorizontal size={16} />
          </HStack>
        </HStack>
        <HStack spacing={2} color="gray.400">
          <Text fontSize="xs">≡ 0</Text>
          <ChevronDown size={12} />
          <Button
            variant="ghost"
            size="sm"
            color="gray.400"
            _hover={{ color: 'white' }}
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </Button>
        </HStack>
      </Flex>

      {/* 导航标签 */}
      <Box overflowX="auto" borderBottom="1px solid" borderColor={borderColor}>
        <HStack px={4} py={2} spacing={6} fontSize="sm" minW="max-content">
          <Text color="white" fontWeight="medium" whiteSpace="nowrap">Trenches</Text>
          <Text color="gray.400" whiteSpace="nowrap">New</Text>
          <Text color="gray.400" whiteSpace="nowrap">Trending</Text>
          <Text color="gray.400" whiteSpace="nowrap">CopyTrade</Text>
          <Text color="gray.400" whiteSpace="nowrap">Monitor</Text>
          <Text color="gray.400" whiteSpace="nowrap">Track</Text>
          <Text color="gray.400" whiteSpace="nowrap">Hold</Text>
        </HStack>
      </Box>

      {/* Trenches 子导航 */}
      <Flex align="center" justify="space-between" px={4} py={3} bg="gray.900/50">
        <HStack spacing={2}>
          <Box w={5} h={5} display="flex" alignItems="center" justifyContent="center">
            <Image src="/gmgn-logo.svg" alt="GMGN" w={3} h={3} />
          </Box>
          <Text color="white" fontWeight="medium">Trenches</Text>
          <ChevronDown size={16} color="gray.400" />
        </HStack>
        <HStack spacing={4} color="gray.400">
          <HStack spacing={1}>
            <Text fontSize="xs">TP/SL</Text>
            <Settings size={12} />
          </HStack>
          <Button variant="ghost" size="sm" p={1}>
            <MoreHorizontal size={16} />
          </Button>
        </HStack>
      </Flex>

      {/* New Creations 过滤器 */}
      <Flex align="center" justify="space-between" px={4} py={2} bg="black">
        <HStack spacing={2}>
          <Text color="green.400" fontSize="sm">🚀 New Creations</Text>
          <ChevronDown size={16} color="gray.400" />
          <HStack spacing={1} ml={4}>
            <Text color="gray.400" fontSize="xs">≡ 0</Text>
            <Text color="gray.400" fontSize="xs">P1</Text>
            <ChevronDown size={12} color="gray.400" />
          </HStack>
        </HStack>
        <HStack spacing={2}>
          <Box bg="gray.800" rounded="md" px={2} py={1}>
            <Search size={12} color="gray.400" />
          </Box>
          <Button variant="ghost" size="sm" p={1}>
            <MoreHorizontal size={16} color="gray.400" />
          </Button>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
