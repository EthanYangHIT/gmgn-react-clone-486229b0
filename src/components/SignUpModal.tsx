import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  VStack,
  Input,
  Button,
  Text,
  HStack,
  Divider,
  Center,
  Box,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'

// Telegram SVG
const TelegramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#23242A" />
    <path d="M23.5 10.5L20.5 22.5C20.5 22.5 20.1 23.5 19 23.5C17.9 23.5 15.5 21.5 15.5 21.5L13.5 20.5L10.5 19.5C10.5 19.5 9.5 19.1 9.5 18C9.5 16.9 11.5 16.5 11.5 16.5L21.5 12.5C21.5 12.5 22.5 12.1 22.5 13C22.5 13.9 20.5 21.5 20.5 21.5" stroke="#6CC5F7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

// Phantom SVG
const PhantomIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="#23242A" />
    <path d="M21.5 19.5C21.5 21.5 19.5 23.5 16 23.5C12.5 23.5 10.5 21.5 10.5 19.5C10.5 17.5 12.5 15.5 16 15.5C19.5 15.5 21.5 17.5 21.5 19.5Z" fill="#A18AFF"/>
    <ellipse cx="13.5" cy="19" rx="1" ry="1.5" fill="#fff"/>
    <ellipse cx="18.5" cy="19" rx="1" ry="1.5" fill="#fff"/>
  </svg>
)

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
  setIsSignedIn: (v: boolean) => void
}

const SignUpModal = ({ isOpen, onClose, setIsSignedIn }: SignUpModalProps) => {
  const [inviteCode] = useState('Ba4eGhlu')
  const handleTelegramLogin = () => {
    window.open('https://t.me/your_bot?start=auth', '_blank');
    onClose();
    setIsSignedIn(true);
  };
  const handlePhantomLogin = async () => {
    try {
      if (!window.solana || !window.solana.isPhantom) {
        alert('Phantom wallet not found. Please install Phantom extension.');
        return;
      }
      const { publicKey } = await window.solana.connect();
      const message = new TextEncoder().encode('Sign up to GMGN');
      const { signature } = await window.solana.signMessage(message, 'utf8');
      alert('Wallet connected and message signed!');
      setIsSignedIn(true);
      onClose();
    } catch (err) {
      alert('Wallet connection or signature failed.');
    }
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent
        bg="#18191B"
        borderRadius="18px"
        maxW="400px"
        p={0}
        boxShadow="lg"
      >
        <ModalCloseButton color="white" top="18px" right="18px" size="lg" />
        <ModalBody p={8} pt={7} pb={4}>
          <VStack align="stretch" spacing={6}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" color="white" mb={1}>
                Sign Up
              </Text>
              <Text fontSize="md" color="gray.400">
                Already have an account?{' '}
                <Text as="span" color="#7EDFA3" cursor="pointer" fontWeight="medium">
                  Log In
                </Text>
              </Text>
            </Box>
            <VStack align="stretch" spacing={3}>
              <Box>
                <Text fontSize="sm" color="white" mb={1}>
                  Email
                </Text>
                <Input
                  placeholder="Enter Email"
                  bg="#23242A"
                  border="none"
                  color="white"
                  _placeholder={{ color: 'gray.500' }}
                  h="44px"
                  fontSize="md"
                />
              </Box>
              <Box>
                <Input
                  value={inviteCode}
                  isReadOnly
                  bg="#23242A"
                  border="none"
                  color="white"
                  fontWeight="medium"
                  h="44px"
                  fontSize="md"
                />
                <Text fontSize="sm" color="gray.500" mt={2}>
                  The invite code cannot be changed after binding. Please ensure the correct invite code is entered.
                </Text>
              </Box>
            </VStack>
            <Button
              w="full"
              h="48px"
              bg="#7EDFA3"
              color="black"
              fontWeight="semibold"
              fontSize="xl"
              borderRadius="10px"
              _hover={{ bg: '#6edb9a' }}
              mt={2}
            >
              Sign Up
            </Button>
            <HStack w="full" alignItems="center" spacing={4} pt={2}>
              <Divider borderColor="#23242A" />
              <Text color="gray.400" fontSize="md" whiteSpace="nowrap">
                OR Sign Up
              </Text>
              <Divider borderColor="#23242A" />
            </HStack>
            <HStack w="full" justify="center" spacing={12} pt={2}>
              <VStack spacing={2}>
                <Center
                  w="64px"
                  h="64px"
                  bg="#18191B"
                  borderRadius="full"
                  cursor="pointer"
                  _hover={{ bg: "#23242A" }}
                  onClick={handleTelegramLogin}
                >
                  <TelegramIcon />
                </Center>
                <Text color="white" fontSize="lg">Telegram</Text>
              </VStack>
              <VStack spacing={2}>
                <Center w="64px" h="64px" bg="#18191B" borderRadius="full"
                  cursor="pointer"
                  _hover={{ bg: "#23242A" }}
                  onClick={handlePhantomLogin}
                >
                  <PhantomIcon />
                </Center>
                <Text color="white" fontSize="lg">Phantom</Text>
              </VStack>
            </HStack>
            <HStack w="full" justify="center" pt={2} spacing={2}>
              <Text color="gray.500" fontSize="sm">Terms of Service</Text>
              <Text color="gray.700" fontSize="sm">|</Text>
              <Text color="gray.500" fontSize="sm">Privacy Policy</Text>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SignUpModal
