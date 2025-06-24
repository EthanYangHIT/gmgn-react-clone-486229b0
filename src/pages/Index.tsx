
import React, { useState } from 'react';
import { Box, Container, Grid, GridItem, VStack } from '@chakra-ui/react';
import StatsOverview from '../components/StatsOverview';
import TokenList from '../components/TokenList';
import TradingPanel from '../components/TradingPanel';
import NavigationTabs from '../components/NavigationTabs';

const Index = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <Box bg="black" minH="100vh" color="white">
      <Container maxW="7xl" py={8}>
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          <GridItem>
            <VStack spacing={8}>
              <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
              <StatsOverview />
              <TokenList />
            </VStack>
          </GridItem>
          <GridItem>
            <TradingPanel />
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Index;
