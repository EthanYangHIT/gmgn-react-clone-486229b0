import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  InputGroup,
  InputLeftElement,
  Input,
  Box,
  HStack,
  VStack,
  Text,
  Avatar,
  Tag,
  Button,
  IconButton,
  useDisclosure,
  Flex,
  Divider,
  InputRightElement,
  Image,
} from '@chakra-ui/react';
import { Search, X } from 'lucide-react';
import icon1Svg from "/images/icon1.svg";
import icon2Svg from "/images/icon2.svg";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const trending = [
  { name: 'TRUMP', icon: 'https://gmgn.ai/external-res/bb01b8a7c76ec610a1d4191735211066.webp', time: '157d', address: '6p6xg...iPN', vol: '$126.5M', liq: '$468.4M', price: '$9.3B', change: '+5.38%', mc: '24h MC' },
  { name: 'Fartco', icon: 'https://gmgn.ai/external-res/854569df0f58dc4c20cabf526eaf0b39.webp', time: '249d', address: '9BB6N...ump', vol: '$110.1M', liq: '$31.9M', price: '$1B', change: '+12.31%', mc: '24h MC' },
  // ... more mock data
];

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const trendingTokens = [
    { name: 'maga', icon: 'https://gmgn.ai/defi/images/tokenmedia/b71639ceb0f9226c0f98a06dfa0d260c_128x128.jpg' },
    { name: 'mini d...', icon: 'https://gmgn.ai/defi/images/tokenmedia/b71639ceb0f9226c0f98a06dfa0d260c_128x128.jpg' },
    { name: 'LINK', icon: icon1Svg },
    { name: 'THOR', icon: icon2Svg },
    { name: 'VISTA', icon: icon1Svg },
  ];

  const recentSearches = [
    // ... existing code ...
  ];

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="full" motionPreset="none">
      <ModalOverlay bg="rgba(0,0,0,0.95)" />
      <ModalContent bg="#18191B" maxW="100vw" minH="100vh" borderRadius={0} p={0}>
        <ModalHeader px={6} pt={6} pb={2} display="flex" alignItems="center" justifyContent="space-between">
          <Text fontSize="16px" fontWeight="bold" color="white">SEARCH</Text>
          <IconButton aria-label="close" icon={<X size={24} />} variant="ghost" color="white" onClick={onClose} size="lg" />
        </ModalHeader>
        <ModalBody px={3} pt={2} pb={0}>
          {/* 搜索输入框 */}
          <InputGroup size="lg" mb={4}>
            <InputLeftElement pointerEvents="none" h="full">
              <Search color="#888" size={20} />
            </InputLeftElement>
            <Input
              placeholder="Search token/contract/wallet"
              bg="#23242A"
              border="none"
              color="white"
              fontSize="16px"
              h="40px"
              borderRadius="12px"
              pl={12}
              _placeholder={{ color: 'gray.500' }}
            />
            <Box position="absolute" right={4} top="50%" transform="translateY(-50%)" color="gray.500" fontSize="14px">
              Ctrl+K
            </Box>
          </InputGroup>

          {/* Trending 24h */}
          <Text fontSize="12px" mt={4} mb={2}>Trending 24h</Text>
          <VStack align="stretch" spacing={2} maxH="70vh" overflowY="auto">
            {trending.map((item, i) => (
              <Flex key={i} align="center" justify="space-between" py={2}>
                <HStack spacing={3} align="center">
                  <Avatar src={item.icon} size="md" />
                  <Box>
                    <Text color="white" fontWeight="bold" fontSize="13px">{item.name}</Text>
                    <HStack spacing={2}>
                      <Text color="gray.400" fontSize="12px">{item.time}</Text>
                      <Text color="gray.500" fontSize="12px">{item.address}</Text>
                    </HStack>
                  </Box>
                </HStack>
                <VStack align="end" spacing={0} minW="180px">
                  <HStack spacing={4} align="center">
                    <VStack align="end" spacing={0} minW="80px">
                      <Text color="gray.400" fontSize="12px">24h V {item.vol}</Text>
                      <Text color="gray.400" fontSize="12px">Liq {item.liq}</Text>
                    </VStack>
                    <VStack align="end" spacing={0} minW="80px">
                      <Text color="white" fontSize="12px">{item.price} <Text as="span" color="green.400" fontSize="12px" ml={1}>{item.change}</Text></Text>
                      <Text color="gray.400" fontSize="12px">{item.mc}</Text>
                    </VStack>
                  </HStack>
                </VStack>
              </Flex>
            ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SearchModal; 