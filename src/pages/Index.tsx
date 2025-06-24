
import { useState } from 'react';
import Header from '@/components/Header';
import TokenCard from '@/components/TokenCard';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();

  const mockTokens = [
    {
      id: '1',
      name: 'TESLA AI',
      symbol: 'TESLA',
      logo: '🔴',
      timeAgo: '2s',
      contractAddress: '4PLCR...tY',
      holders: 115,
      price: 0.00030,
      priceChange: 17,
      marketCap: '$578M',
      volume: '$24.9K',
      buyPercentage: 14,
      sellPercentage: 5,
      isPositive: true,
      risk: 'high' as const,
    },
    {
      id: '2',
      name: 'Cat wif Job',
      symbol: 'JOB',
      logo: '🐱',
      timeAgo: '3s',
      contractAddress: 'AB9AC...uH1',
      holders: 2,
      price: 0.0018,
      priceChange: 3,
      marketCap: '$284.6K',
      volume: '$2K',
      buyPercentage: 0,
      sellPercentage: 0,
      isPositive: true,
      risk: 'medium' as const,
    },
    {
      id: '3',
      name: 'She Was A Fairy',
      symbol: 'Fairy',
      logo: '🧚',
      timeAgo: '6s',
      contractAddress: '6tor W...ump',
      holders: 5,
      price: 0.0033,
      priceChange: 3,
      marketCap: '$22.9K',
      volume: '$3.43',
      buyPercentage: 2,
      sellPercentage: 0,
      isPositive: true,
      risk: 'low' as const,
    },
    {
      id: '4',
      name: 'Squid game season 3 coin',
      symbol: 'S3col...',
      logo: '🦑',
      timeAgo: '7s',
      contractAddress: '746mw...ump',
      holders: 2,
      price: 0.00014,
      priceChange: 4,
      marketCap: '$4K',
      volume: '$3',
      buyPercentage: 1,
      sellPercentage: 0,
      isPositive: true,
      risk: 'high' as const,
      features: ['🔥4', '💎2', '🏃Run', '🕒3']
    },
    {
      id: '5',
      name: 'The Last President',
      symbol: 'TLP',
      logo: '🇺🇸',
      timeAgo: '15s',
      contractAddress: 'EwRFR...ump',
      holders: 2,
      price: 0.0012,
      priceChange: 5,
      marketCap: '$4.1K',
      volume: '$204',
      buyPercentage: 8,
      sellPercentage: 7,
      isPositive: true,
      risk: 'medium' as const,
      features: ['🕒3']
    },
    {
      id: '6',
      name: 'damn',
      symbol: 'damn',
      logo: '💰',
      timeAgo: '15s',
      contractAddress: 'BkanY...ump',
      holders: 6,
      price: 0.0024,
      priceChange: 17,
      marketCap: '$4K',
      volume: '$1K',
      buyPercentage: 4,
      sellPercentage: 4,
      isPositive: true,
      risk: 'low' as const,
      features: ['🔥1', '💎', '🏃Run', '🕒8', '💯100%']
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* 主要内容 */}
      <main className="px-0">
        <div className="max-w-md mx-auto">
          {/* 代币列表 */}
          <div className="px-2">
            {mockTokens.map((token) => (
              <TokenCard key={token.id} token={token} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
