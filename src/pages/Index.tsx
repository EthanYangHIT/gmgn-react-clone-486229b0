
import React from 'react';
import { Box, Container, Grid, GridItem } from '@chakra-ui/react';
import StatsOverview from '../components/StatsOverview';
import TokenList from '../components/TokenList';
import TradingPanel from '../components/TradingPanel';
import NavigationTabs from '../components/NavigationTabs';

const Index = () => {
  return (
    <Box bg="black" minH="100vh" color="white">
      <Container maxW="7xl" py={8}>
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={8}>
          <GridItem>
            <Box space={8}>
              <NavigationTabs />
              <StatsOverview />
              <TokenList />
            </Box>
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
