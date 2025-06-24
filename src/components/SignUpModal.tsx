
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
  useColorModeValue,
} from '@chakra-ui/react'

interface SignUpModalProps {
  isOpen: boolean
  onClose: () => void
}

const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const bgColor = useColorModeValue('gray.800', 'gray.800')
  const inputBg = useColorModeValue('gray.700', 'gray.700')

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay bg="blackAlpha.600" />
      <ModalContent bg={bgColor} border="1px solid" borderColor="gray.700" maxW="400px">
        <ModalHeader color="white" fontSize="lg" fontWeight="semibold">
          Sign Up
        </ModalHeader>
        <ModalCloseButton color="gray.400" />
        <ModalBody pb={6}>
          <VStack spacing={4}>
            <Input
              placeholder="Email"
              bg={inputBg}
              border="1px solid"
              borderColor="gray.600"
              color="white"
              _placeholder={{ color: 'gray.400' }}
              _focus={{ borderColor: 'blue.400' }}
            />
            
            <Input
              type="password"
              placeholder="Password"
              bg={inputBg}
              border="1px solid"
              borderColor="gray.600"
              color="white"
              _placeholder={{ color: 'gray.400' }}
              _focus={{ borderColor: 'blue.400' }}
            />
            
            <Button
              w="full"
              bg="white"
              color="black"
              fontWeight="medium"
              _hover={{ bg: 'gray.200' }}
            >
              Create Account
            </Button>
            
            <HStack w="full" alignItems="center">
              <Divider borderColor="gray.600" />
              <Text color="gray.400" fontSize="sm" px={4}>
                or
              </Text>
              <Divider borderColor="gray.600" />
            </HStack>
            
            <Button
              w="full"
              variant="outline"
              borderColor="gray.600"
              color="white"
              _hover={{ bg: 'gray.700' }}
            >
              Continue with Google
            </Button>
            
            <Text color="gray.400" fontSize="sm" textAlign="center">
              Already have an account?{' '}
              <Text as="span" color="blue.400" cursor="pointer">
                Sign in
              </Text>
            </Text>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default SignUpModal
