import {
  Box,
  Flex,
  HStack,
  Text,
  Button,
  VStack,
  Icon,
  CircularProgress,
  CircularProgressLabel,
  Image,
} from "@chakra-ui/react";
import {
  Copy,
  Users,
  Search,
  Zap,
  ChefHat,
  Target,
  HandCoins,
} from "lucide-react";
import QuickBuyIcon from "../images/quickbuy.svg?react";
import PumpfunIcon from "../images/pumpfun.svg?react";

interface TokenCardProps {
  token: {
    initials: string;
    name: string;
    description: string;
    time: string;
    address: string;
    progress: number;
    icon: string;
    stats: {
      dev_buy: string;
      creator_sells: string;
      live_listeners: number;
    };
    metrics: {
      holders: number;
      buyers: number;
      tx: number;
      volume: string;
      marketCap: string;
    };
  };
}

const Stat = ({ icon, label, warn = false }) => (
  <HStack
    spacing={1.5}
    py="2px"
    px="6px"
    rounded="md"
    border="1px"
    borderColor={"gray.400"}
  >
    <Icon as={icon} color={warn ? "#FCAEC0" : "rgb(158,229,181)"} w={4} h={4} />
    <Text
      fontSize="xs"
      color={warn ? "#FCAEC0" : "rgb(158,229,181)"}
      fontWeight="medium"
    >
      {label}
    </Text>
  </HStack>
);

const TokenCard = ({ token }: TokenCardProps) => {
  const {
    initials,
    name,
    description,
    time,
    address,
    progress,
    stats,
    metrics,
    icon,
  } = token;
  const borderColor = "gray.800";

  return (
    <Flex
      p={4}
      borderBottom="1px solid"
      borderColor={borderColor}
      _hover={{ bg: "#1a1b1d" }}
      align="center"
    >
      {/* Left side: Avatar with Progress */}
      <Box position="relative" mr={4}>
        <CircularProgress
          value={progress}
          color="green.400"
          trackColor="gray.700"
          size="68px"
          thickness="4px"
        >
          <CircularProgressLabel>
            <Flex
              w="full"
              h="full"
              align="center"
              justify="center"
            >
              <Image
                src={icon}
                alt={name}
                borderRadius="full"
                boxSize="52px"
                objectFit="cover"
              />
            </Flex>
          </CircularProgressLabel>
        </CircularProgress>
        <Flex
          position="absolute"
          bottom="2px"
          right="2px"
          // bg="rgb(158,229,181)"
          p="4px"
          rounded="full"
          border="1px"
          borderColor="rgb(158,229,181)"
        >
          <PumpfunIcon width={14} height={14} />
        </Flex>
      </Box>

      {/* Right section: 上下两部分 */}
      <VStack align="stretch" spacing={3} flex={1}>
        {/* 上部分：name/description + action button */}
        <HStack justify="space-between" align="flex-start" w="full">
          <HStack align="flex-end" spacing={1}>
            <Text color="white" fontWeight="bold">
              {name}
            </Text>
            <Text color="gray.400">{description}</Text>
          </HStack>
          <Button
            bg="#25272a"
            _hover={{ bg: "#313336" }}
            rounded="lg"
            w="40px"
            h="28px"
            p={0}
          >
            <QuickBuyIcon width={16} height={16} />
          </Button>
        </HStack>
        {/* 下部分：info+stat + metrics */}
        <HStack w="full" align="stretch" justify="space-between">
          {/* 左侧，两行 */}
          <VStack spacing={1} align="flex-start" justify="center" flex={1}>
            <HStack minH="24px" align="center">
              <Text fontSize="sm" color="rgb(158,229,181)" fontWeight="bold">
                {time}
              </Text>
              <Box h="16px" w="1px" bg="gray.700" mx={2} />
              <Text fontSize="sm">{address}</Text>
              <Icon as={Copy} w={4} h={4} cursor="pointer" _hover={{ color: "white" }} />
              <Icon as={Search} w={4} h={4} cursor="pointer" _hover={{ color: "white" }} />
            </HStack>
            <HStack minH="24px" align="center">
              <Stat icon={Users} label={`${stats.dev_buy}`} />
              <Stat icon={ChefHat} label={`${stats.creator_sells}`} warn />
              <Stat icon={Target} label={`${stats.live_listeners}`} />
            </HStack>
          </VStack>
          {/* 右侧，三行 */}
          <VStack spacing={1} align="flex-end" justify="center" flex={1}>
            <HStack minH="24px" align="center" justify="flex-end">
              <HStack spacing={1}>
                <Icon as={Users} color="gray.400" w={4} h={4} />
                <Text color="white" fontSize="sm">{metrics.holders}</Text>
              </HStack>
              <HStack spacing={1}>
                <Icon as={HandCoins} color="gray.400" w={4} h={4} />
                <Text color="white" fontSize="sm">{metrics.buyers}</Text>
              </HStack>
              <HStack spacing={1}>
                <Text color="gray.400" fontSize="sm">TX</Text>
                <Text color="white" fontSize="sm">{metrics.tx}</Text>
              </HStack>
            </HStack>
            {/* 进度条单独一行 */}
            <Box w="48px" h="2px" bg="#FCAEC0" rounded="full" position="relative">
              <Box
                position="absolute"
                left={0}
                top={0}
                h="2px"
                rounded="full"
                bg="rgb(158,229,181)"
                w={`${progress}%`}
                maxW="48px"
                transition="width 0.3s"
              />
            </Box>
            <HStack minH="24px" align="center" justify="flex-end">
              <HStack spacing={1}>
                <Text color="white" fontSize="sm">V</Text>
                <Text color="gray.400" fontSize="sm">${metrics.volume}</Text>
              </HStack>
              <HStack spacing={1}>
                <Text color="white" fontSize="sm">MC</Text>
                <Text color="gray.400" fontSize="sm">${metrics.marketCap}</Text>
              </HStack>
            </HStack>
          </VStack>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default TokenCard;
