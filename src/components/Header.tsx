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
  InputGroup,
  InputLeftElement,
  Input,
  Tag,
  Icon,
  VStack,
  Center,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Search,
  Settings,
  ChevronDown,
  List,
  Filter,
  Settings2,
  Wallet,
  AlignJustify,
  Folder,
  FolderOpen,
  ShieldCheck,
  AlertCircle,
  Users,
  Trophy,
  RefreshCw,
  ArrowRightLeft,
  Bell,
  Plus,
  LogOut,
  Sun,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import SignUpModal from './SignUpModal';
import ContestBg from '../images/contest.svg?react';
import { useNavigate } from 'react-router-dom';
import SearchModal from './SearchModal';
import LogInModal from "./LogInModal";

// Import images

import solanaWebp from "/images/solana.webp";
import etherWebp from "/images/ether.webp";
import baseWebp from "/images/base.webp";
import bscSvg from "/images/bsc.svg";
import tronWebp from "/images/tron.webp";
import gmgnSvg from "/images/gmgn-logo.svg";

const Header = ({ onSignIn, onSignUp, isSignedIn, onSignOut }) => {
  const borderColor = "gray.800";

  const navigate = useNavigate();
  const { isOpen: isSearchOpen, onOpen: onSearchOpen, onClose: onSearchClose } = useDisclosure();
  const { isOpen: isLoginOpen, onOpen: onLoginOpen, onClose: onLoginClose } = useDisclosure();
  const { isOpen: isSignUpOpen, onOpen: onSignUpOpen, onClose: onSignUpClose } = useDisclosure();

  const [activeNav, setActiveNav] = useState("Trenches");

  const chainOptions = [
    { name: "SOL", image: solanaWebp, alt: "Solana" },
    { name: "ETH", image: etherWebp, alt: "Ethereum" },
    { name: "Base", image: baseWebp, alt: "Base" },
    { name: "BSC", image: bscSvg, alt: "BSC" },
    { name: "Tron", image: tronWebp, alt: "Tron" },
  ];

  const [selectedChain, setSelectedChain] = useState(chainOptions[0]);

  return (
    <Box
      position="sticky"
      top={0}
      zIndex={50}
      bg="black"
      borderBottom="1px solid"
      borderColor={borderColor}
    >
      {/* Top Bar */}
      <Flex h="48px" align="center" justify="space-between" px={3}>
        <HStack spacing={4}>
          <Image src={gmgnSvg} alt="GMGN" w="24px" h="24px" />
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  w="100px"
                  _active={{ bg: "gray.800" }}
                >
                  <HStack w="full" justifyContent="space-between">
                    <HStack spacing={2}>
                      <Image
                        src={selectedChain.image}
                        alt={selectedChain.alt}
                        w={4}
                        h={4}
                      />
                      <Text color="white" fontSize="sm">
                        {selectedChain.name}
                      </Text>
                    </HStack>
                    <ChevronDown
                      size={16}
                      color="white"
                      style={{
                        transform: isOpen ? "scaleY(-1)" : "scaleY(1)",
                        transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
                      }}
                    />
                  </HStack>
                </MenuButton>
                <MenuList bg="#222" borderColor="#333" p={2}>
                  {chainOptions.map((chain) => (
                    <MenuItem
                      key={chain.name}
                      color="white"
                      bg={
                        selectedChain.name === chain.name
                          ? "rgb(102, 96, 93)"
                          : "transparent"
                      }
                      borderRadius="8px"
                      _active={{ background: "rgb(102, 96, 93)" }}
                      onClick={() => setSelectedChain(chain)}
                    >
                      <HStack spacing={2}>
                        <Image src={chain.image} alt={chain.alt} w={5} h={5} />
                        <Text>{chain.name}</Text>
                      </HStack>
                    </MenuItem>
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
          <HStack spacing={4} color="gray.400">
            <Icon as={Search} size={18} cursor="pointer" onClick={onSearchOpen} />
            <Settings size={18} />
          </HStack>
        </HStack>
        <HStack spacing={2}>
          {isSignedIn ? (
            <Menu placement="bottom-end" autoSelect={false}>
              <MenuButton as={Box} p={0} borderRadius="8px" _focus={{ boxShadow: 'none' }}>
                <HStack bg="#23242A" borderRadius="8px" px={3} h="36px" spacing={3} minW="120px" cursor="pointer">
                  <Center w="24px" h="24px" bg="rgba(255,255,255,0.04)" borderRadius="full">
                    <Wallet color="#fff" size={16} />
                  </Center>
                  <HStack spacing={1}>
                    <AlignJustify color="#fff" size={16} />
                    <Text color="white" fontWeight="bold">0</Text>
                  </HStack>
                  <Box h="20px" w="1px" bg="gray.700" mx={1} />
                  <ChevronDown color="#fff" size={16} />
                </HStack>
              </MenuButton>
              <MenuList bg="#18191B" borderRadius="18px" minW="240px" p={3} boxShadow="lg" border="none">
                <VStack align="stretch" spacing={1}>
                  <MenuItem icon={<Folder size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white" onClick={() => navigate('/wallet')}>My Wallet</MenuItem>
                  <MenuItem icon={<FolderOpen size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white">Wallet Manager</MenuItem>
                  <HStack px={3} py={2} spacing={2}>
                    <ShieldCheck size={20} color="#fff" />
                    <Text color="white">Security</Text>
                    <HStack spacing={1} ml="auto">
                      <AlertCircle size={16} color="#F85C7F" />
                      <Text color="#F85C7F" fontSize="sm">Not Bound</Text>
                    </HStack>
                  </HStack>
                  <MenuItem icon={<Users size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white">Referral</MenuItem>
                  <Box bgGradient="linear(to-r, #7EDFA3, #7EDFFA, #A18AFF)" borderRadius="12px" px={3} py={2} my={1} display="flex" alignItems="center" position="relative" overflow="hidden">
                    <ContestBg style={{ position: 'absolute', right: 0, bottom: 0, height: '100%', zIndex: 0 }} />
                    <HStack position="relative" zIndex={1}>
                      <Trophy size={20} color="#fff" />
                      <Text color="white" fontWeight="bold" ml={2}>Contest(S6)</Text>
                    </HStack>
                  </Box>
                  <MenuItem icon={<RefreshCw size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white">Withdraw</MenuItem>
                  <MenuItem icon={<ArrowRightLeft size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white">Exchange WSOL → SOL</MenuItem>
                  <MenuItem icon={<Bell size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white">TG Alert</MenuItem>
                  <MenuItem icon={<Plus size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white">Add Twitter</MenuItem>
                  <MenuItem icon={<LogOut size={20} />} bg="transparent" _hover={{ bg: '#23242A' }} color="white" onClick={onSignOut}>Disconnect</MenuItem>
                </VStack>
              </MenuList>
            </Menu>
          ) : (
            <>
              <Button
                bg="gray.800"
                minW={"85px"}
                color="white"
                size="sm"
                _active={{ bg: "gray.700" }}
                onClick={onSignUpOpen}
              >
                Sign Up
              </Button>
              <Button
                bg="white"
                minW={"85px"}
                color="black"
                size="sm"
                _active={{ bg: "gray.200" }}
                onClick={onLoginOpen}
              >
                Log In
              </Button>
            </>
          )}
        </HStack>
      </Flex>

      {/* Main Navigation */}
      <Box borderColor={borderColor} overflowX="auto">
        <HStack px={4} py={2} spacing={"16px"} fontSize="sm" minW="max-content">
          {[
            "Trenches",
            "New",
            "Trending",
            "CopyTrade",
            "Monitor",
            "Track",
            "Hold",
          ].map((item) => (
            <Text
              key={item}
              color={activeNav === item ? "white" : "gray.400"}
              whiteSpace="nowrap"
              cursor="pointer"
              py={1}
              rounded="md"
              onClick={() => {
                setActiveNav(item);
                if (item === "Trenches") {
                  navigate('/');
                }
              }}
            >
              {item}
            </Text>
          ))}
        </HStack>
      </Box>
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} setIsSignedIn={onSignIn} />
      <SearchModal isOpen={isSearchOpen} onClose={onSearchClose} />
      <SignUpModal isOpen={isSignUpOpen} onClose={onSignUpClose} setIsSignedIn={onSignIn} />
      <LogInModal isOpen={isLoginOpen} onClose={onLoginClose} setIsSignedIn={onSignIn} />
    </Box>
  );
};

export default Header;