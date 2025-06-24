import React from 'react';
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
  InputGroup,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';
import { Eye, EyeOff, ScanLine, ArrowRight } from 'lucide-react';

// Mock Icons
const TelegramIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z" fill="#2AABEE"/>
    <path d="M24 10L20.5 22C20.5 22 20.1667 23 19.3333 23C18.5 23 16 21.5 16 21.5L14 20L11 19C11 19 10.1667 18.6667 10.1667 17.6667C10.1667 16.6667 12 16 12 16L21.5 12C21.5 12 22.3333 11.6667 22.3333 12.5C22.3333 13.3333 20.5 20.5 20.5 20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const PhantomIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4286 3.51428C19.1915 3.51428 19.9241 3.81525 20.4682 4.35934C21.0123 4.90343 21.3133 5.63604 21.3133 6.39892V17.601C21.3133 18.3639 21.0123 19.0965 20.4682 19.6406C19.9241 20.1847 19.1915 20.4857 18.4286 20.4857H5.57143C4.80855 20.4857 4.07593 20.1847 3.53184 19.6406C2.98775 19.0965 2.68679 18.3639 2.68679 17.601V6.39892C2.68679 5.63604 2.98775 4.90343 3.53184 4.35934C4.07593 3.81525 4.80855 3.51428 5.57143 3.51428H18.4286ZM12.3796 11.4286C12.3796 12.3082 11.6542 13.0336 10.7746 13.0336C9.89501 13.0336 9.16962 12.3082 9.16962 11.4286C9.16962 10.549 9.89501 9.82363 10.7746 9.82363C11.6542 9.82363 12.3796 10.549 12.3796 11.4286ZM14.8304 11.4286C14.8304 12.3082 14.105 13.0336 13.2254 13.0336C12.3458 13.0336 11.6204 12.3082 11.6204 11.4286C11.6204 10.549 12.3458 9.82363 13.2254 9.82363C14.105 9.82363 14.8304 10.549 14.8304 11.4286ZM12 17.2857C14.6896 17.2857 16.8571 15.1182 16.8571 12.4286H7.14286C7.14286 15.1182 9.31036 17.2857 12 17.2857Z" fill="white"></path></svg>
);

interface LogInModalProps {
  isOpen: boolean;
  onClose: () => void;
  setIsSignedIn: (v: boolean) => void;
}

const LogInModal: React.FC<LogInModalProps> = ({ isOpen, onClose, setIsSignedIn }) => {
  const [showPassword, setShowPassword] = React.useState(false);

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
      const message = new TextEncoder().encode('Log in to GMGN');
      const { signature } = await window.solana.signMessage(message, 'utf8');
      alert('Wallet connected and message signed for login!');
      setIsSignedIn(true);
      onClose();
    } catch (err) {
      alert('Wallet connection or signature failed.');
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.700" />
      <ModalContent bg="#18191B" borderRadius="18px" maxW="400px" p={0} boxShadow="lg">
        <ModalCloseButton color="white" top="18px" right="18px" size="lg" />
        <ModalBody p={8} pt={7} pb={4}>
          <VStack align="stretch" spacing={6}>
            <Box>
              <Text fontSize="2xl" fontWeight="bold" color="white" mb={1}>
                Log In
              </Text>
              <Text fontSize="md" color="gray.400">
                Don't have an account yet?{' '}
                <Text as="span" color="#7EDFA3" cursor="pointer" fontWeight="medium">
                  Sign Up
                </Text>
              </Text>
            </Box>
            <VStack align="stretch" spacing={4}>
              <Box>
                <Text fontSize="sm" color="white" mb={1}>Email</Text>
                <Input placeholder="Enter Email" bg="#23242A" border="none" color="white" _placeholder={{ color: 'gray.500' }} h="44px" fontSize="md" />
              </Box>
              <Box>
                <Text fontSize="sm" color="white" mb={1}>Password</Text>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} placeholder="Enter Password" bg="#23242A" border="none" color="white" _placeholder={{ color: 'gray.500' }} h="44px" fontSize="md" />
                  <InputRightElement h="full">
                    <IconButton aria-label="show password" icon={showPassword ? <EyeOff /> : <Eye />} variant="ghost" color="gray.500" onClick={() => setShowPassword(!showPassword)} />
                  </InputRightElement>
                </InputGroup>
                <Text textAlign="right" color="#7EDFA3" fontSize="sm" mt={2} cursor="pointer">Forgot Password?</Text>
              </Box>
            </VStack>
            <Button w="full" h="48px" bg="#7EDFA3" color="black" fontWeight="semibold" fontSize="xl" borderRadius="10px" _hover={{ bg: '#6edb9a' }}>
              Log In
            </Button>
            <HStack w="full" alignItems="center" spacing={4} pt={2}>
              <Divider borderColor="#23242A" />
              <Text color="gray.400" fontSize="md">OR</Text>
              <Divider borderColor="#23242A" />
            </HStack>
            <HStack w="full" justify="space-around" spacing={4} pt={2}>
              <VStack spacing={2} cursor="pointer" onClick={handleTelegramLogin}>
                <Center w="56px" h="56px" bg="#23242A" borderRadius="full">
                  <TelegramIcon />
                </Center>
                <Text color="white" fontSize="md">Telegram</Text>
              </VStack>
              <VStack spacing={2} cursor="pointer" onClick={handlePhantomLogin}>
                <Center w="56px" h="56px" bg="#5865F2" borderRadius="full">
                  <PhantomIcon />
                </Center>
                <Text color="white" fontSize="md">Phantom</Text>
              </VStack>
              <VStack spacing={2} cursor="pointer">
                <Center w="56px" h="56px" bg="#23242A" borderRadius="full">
                  <ScanLine color="white" />
                </Center>
                <Text color="white" fontSize="md">APP Scan</Text>
              </VStack>
            </HStack>
            <Button variant="link" color="white" fontWeight="normal" rightIcon={<ArrowRight size={16} />}>
              Connect with extension wallet
            </Button>
            <HStack w="full" justify="center" pt={2} spacing={2}>
              <Text color="gray.500" fontSize="sm">Terms of Service</Text>
              <Text color="gray.700">|</Text>
              <Text color="gray.500" fontSize="sm">Privacy Policy</Text>
            </HStack>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default LogInModal; 