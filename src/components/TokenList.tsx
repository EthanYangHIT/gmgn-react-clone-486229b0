import { VStack, Flex, Button, Menu, MenuButton, MenuList, MenuItem, Image, Text, HStack, InputGroup, InputLeftElement, Input, Center } from '@chakra-ui/react';
import { ChevronDown, Search, Filter, Settings } from 'lucide-react';
import { useState } from 'react';
import TokenCard from './TokenCard';
import pumpfunSvg from "/images/pumpfun.svg";
import believeSvg from "/images/believe.svg";
import boopSvg from "/images/boop.svg";
import launchlabSvg from "/images/launchlab.svg";
import moonitSvg from "/images/moonit.svg";
import icon1Svg from "/images/icon1.svg";
import icon2Svg from "/images/icon2.svg";
import solSvg from "/images/sol.svg";

const tokens = [
  {
    initials: 'ho',
    name: 'hotai...',
    description: 'hotair rises',
    time: '0s',
    address: '2hcKV...ump',
    progress: 60,
    icon: "https://gmgn.ai/external-res/3ba1e3d584d4245be8bbcc8d01191cd3.webp",
    stats: {
      dev_buy: '7%',
      creator_sells: '7%',
      live_listeners: 1,
    },
    metrics: {
      holders: 1,
      buyers: 0,
      tx: 0,
      volume: '285',
      marketCap: '4.2K',
    },
  },
  {
    initials: 'po',
    name: 'ponke',
    description: 'ponke rises',
    time: '1s',
    address: '3hcKV...ump',
    icon: 'https://gmgn.ai/external-res/c79c7af9154b9fca99fdd12d5aa5f895.webp',
    progress: 80,
    stats: {
      dev_buy: '5%',
      creator_sells: '2%',
      live_listeners: 10,
    },
    metrics: {
      holders: 5,
      buyers: 2,
      tx: 10,
      volume: '1285',
      marketCap: '14.2K',
    },
  },
  {
    initials: 'sa',
    name: 'sartoshi',
    description: 'sartoshi rises',
    time: '1m',
    address: '4hcKV...ump',
    progress: 20,
    icon: 'https://gmgn.ai/external-res/4eb614875a1a2242a4552215b730be3d.webp',
    stats: {
      dev_buy: '15%',
      creator_sells: '12%',
      live_listeners: 11,
    },
    metrics: {
      holders: 50,
      buyers: 20,
      tx: 100,
      volume: '11285',
      marketCap: '114.2K',
    },
  },
  {
    initials: 'bl',
    name: 'bloot',
    description: 'bloot rises',
    time: '5m',
    address: '5hcKV...ump',
    progress: 45,
    icon: 'https://gmgn.ai/external-res/72302069c23aabae7f58fbbf346a47f7.webp',
    stats: {
      dev_buy: '8%',
      creator_sells: '4%',
      live_listeners: 25,
    },
    metrics: {
      holders: 150,
      buyers: 70,
      tx: 300,
      volume: '51285',
      marketCap: '214.2K',
    },
  },
  {
    initials: 'dg',
    name: 'dogen',
    description: 'dogen rises',
    time: '10m',
    address: '6hcKV...ump',
    progress: 90,
    icon: 'https://gmgn.ai/external-res/5cdd98f7c6601f9e97b721b33f785f5e.webp',
    stats: {
      dev_buy: '2%',
      creator_sells: '1%',
      live_listeners: 50,
    },
    metrics: {
      holders: 500,
      buyers: 250,
      tx: 1000,
      volume: '101285',
      marketCap: '514.2K',
    },
  },
  // You can add more token objects here based on the new structure
];

const filters = [
  { name: "Pump.fun", icon: pumpfunSvg },
  { name: "Believe", icon: believeSvg },
  { name: "Boop", icon: boopSvg },
  { name: "Launchlab", icon: launchlabSvg },
  { name: "Moonit", icon: moonitSvg },
];

const TokenList = () => {
  const borderColor = "gray.800";
  const progressOptions = ["🌱 New Creation", "🕛 Completing", "🐣 Completed"];
  const [selectedProgressOption, setSelectedProgressOption] = useState(
    progressOptions[0]
  );

  const platformOptions = [
    { name: "🪖 Trenches", icon: undefined },
    { name: "Pump.fun", icon: pumpfunSvg },
    { name: "Believe", icon: believeSvg },
    { name: "Boop", icon: boopSvg },
    { name: "Launchlab", icon: launchlabSvg },
    { name: "Moonit", icon: moonitSvg },
  ];

  const [selectedPlatformOptions, setSelectedPlatformOptions] = useState(
    platformOptions[0]
  );

  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <VStack spacing={0} align="stretch" bg="black">
      {/* Moved from Header */}
      <Flex
        px={4}
        py={2}
        align="center"
        justify="space-between"
        borderColor={borderColor}
      >
        <VStack spacing={4} w="full" alignItems={"flex-start"}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  fontSize={"16px"}
                  fontWeight={600}
                  _active={{ bg: "transparent" }}
                >
                  <HStack w="full" justifyContent="space-between">
                    <HStack spacing={2}>
                      {selectedPlatformOptions.icon && (
                        <Image
                          src={selectedPlatformOptions.icon}
                          alt={selectedPlatformOptions.name}
                          w={4}
                          h={4}
                        />
                      )}
                      <Text color="white" fontSize="sm">
                        {selectedPlatformOptions.name}
                      </Text>
                      <ChevronDown
                        size={16}
                        color="white"
                        style={{
                          transform: isOpen ? "scaleY(-1)" : "scaleY(1)",
                          transition: "transform 0.5s cubic-bezier(.4,0,.2,1)",
                        }}
                      />
                    </HStack>
                  </HStack>
                </MenuButton>
                <MenuList bg="#222" borderColor="#333" p={2}>
                  {platformOptions.map((item) => (
                    <MenuItem
                      key={item.name}
                      color="white"
                      bg={
                        selectedPlatformOptions === item
                          ? "rgb(102, 96, 93)"
                          : "transparent"
                      }
                      borderRadius="8px"
                      fontSize={"16px"}
                      fontWeight={"bold"}
                      _active={{ background: "rgb(102, 96, 93)" }}
                      onClick={() => setSelectedPlatformOptions(item)}
                    >
                      <HStack spacing={0}>
                        {item.icon && (
                          <Image
                            src={item.icon}
                            alt={item.name}
                            w={4}
                            h={4}
                            mr="4px"
                          />
                        )}
                        <Text>{item.name}</Text>
                      </HStack>
                    </MenuItem>
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
          <HStack justifyContent="space-between" w="full">
            <HStack spacing={2}>
              <Image
                src={icon1Svg}
                alt="icon1"
                w="16px"
                h="16px"
                filter="brightness(0) invert(1)"
              />
              <Image
                src={icon2Svg}
                alt="icon2"
                w="16px"
                h="16px"
                filter="brightness(0) invert(1)"
              />
            </HStack>
            <Center p="8px" bgColor="rgba(26,27,31)" borderRadius="8px">
              <Settings size={18} />
            </Center>
          </HStack>
        </VStack>
      </Flex>

      {/* New Creations Filter Bar */}
      <Flex
        px={4}
        py={2}
        align="center"
        justify="space-between"
        bg="black"
        borderBottom="1px solid"
        borderColor={borderColor}
      >
        <HStack spacing={4}>
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  size="sm"
                  px="0"
                  _active={{ bg: "transparent" }}
                >
                  <HStack spacing={2}>
                    <Text color="white" fontSize="sm" fontWeight="medium">
                      {selectedProgressOption}
                    </Text>
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
                <MenuList bg="#222" borderColor="#333">
                  {progressOptions.map((item) => (
                    <MenuItem
                      key={item}
                      color="white"
                      bg={"transparent"}
                      _active={{ background: "rgb(102, 96, 93)" }}
                      onClick={() => setSelectedProgressOption(item)}
                    >
                      {item}
                    </MenuItem>
                  ))}
                </MenuList>
              </>
            )}
          </Menu>
        </HStack>
        <HStack spacing={2}>
          <InputGroup size="sm" maxW={"70px"}>
            <InputLeftElement
              pointerEvents="none"
              h="24px"
              display="flex"
              alignItems="center"
            >
              <Image src={solSvg} alt="SOL" w={4} h={4} />
            </InputLeftElement>
            <Input
              placeholder="0"
              bg="gray.800"
              borderColor="gray.700"
              rounded="md"
              _active={{ borderColor: "gray.600" }}
              h="24px"
            />
          </InputGroup>
          <Menu>
            <MenuButton
              h="24px"
              px="8px"
              rounded={"md"}
              fontSize={"14px"}
              bg={"gray.800"}
            >
              <HStack>
                <Text>P1</Text>
                <ChevronDown size={16} />
              </HStack>
            </MenuButton>
          </Menu>
          <InputGroup size="sm" maxW={"85px"}>
            <InputLeftElement
              pointerEvents="none"
              h="24px"
              display="flex"
              alignItems="center"
            >
              <Search size={14} color="white" />
            </InputLeftElement>
            <Input
              placeholder="Search"
              bg="gray.800"
              borderColor="gray.700"
              rounded="md"
              _active={{ borderColor: "gray.600" }}
              h="24px"
            />
          </InputGroup>
          <Filter size={"14px"} color="gray" />
        </HStack>
      </Flex>

      {tokens.map((token, index) => (
        <TokenCard key={index} token={token} />
      ))}
    </VStack>
  );
};

export default TokenList;
