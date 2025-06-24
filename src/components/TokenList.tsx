
import { Star, TrendingUp, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TokenListProps {
  activeTab: string;
}

const TokenList = ({ activeTab }: TokenListProps) => {
  const mockTokens = [
    {
      id: 1,
      name: 'PEPE',
      symbol: 'PEPE',
      price: '$0.000008',
      change24h: '+15.67%',
      volume: '$45.2M',
      marketCap: '$3.4B',
      logo: '🐸',
      isPositive: true,
      isWatched: false,
    },
    {
      id: 2,
      name: 'Bonk',
      symbol: 'BONK',
      price: '$0.000012',
      change24h: '-8.32%',
      volume: '$23.1M',
      marketCap: '$890M',
      logo: '🐕',
      isPositive: false,
      isWatched: true,
    },
    {
      id: 3,
      name: 'SHIB',
      symbol: 'SHIB',
      price: '$0.000009',
      change24h: '+5.44%',
      volume: '$78.5M',
      marketCap: '$5.2B',
      logo: '🐶',
      isPositive: true,
      isWatched: false,
    },
    {
      id: 4,
      name: 'DOGE',
      symbol: 'DOGE',
      price: '$0.087',
      change24h: '+2.13%',
      volume: '$234M',
      marketCap: '$12.4B',
      logo: '🐕‍🦺',
      isPositive: true,
      isWatched: true,
    },
  ];

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-white">
          {activeTab === 'trending' && '热门代币'}
          {activeTab === 'new' && '新发代币'}
          {activeTab === 'watchlist' && '我的关注'}
          {activeTab === 'analytics' && '数据分析'}
        </h2>
        <Button variant="ghost" size="sm" className="text-gmgn-green">
          查看更多
        </Button>
      </div>

      <div className="space-y-2">
        {mockTokens.map((token) => (
          <div
            key={token.id}
            className="bg-gmgn-surface rounded-lg p-4 border border-gmgn-hover hover:border-gmgn-green/30 transition-all duration-200"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-gmgn-hover flex items-center justify-center text-lg">
                  {token.logo}
                </div>
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="font-medium text-white">{token.symbol}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className={`p-1 ${
                        token.isWatched ? 'text-gmgn-yellow' : 'text-gray-400'
                      }`}
                    >
                      <Star className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="text-xs text-gray-400">{token.name}</div>
                </div>
              </div>

              <div className="text-right">
                <div className="font-bold text-white">{token.price}</div>
                <div
                  className={`text-sm font-medium ${
                    token.isPositive ? 'text-gmgn-green' : 'text-gmgn-red'
                  }`}
                >
                  {token.change24h}
                </div>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between text-xs text-gray-400">
              <div>成交量: {token.volume}</div>
              <div>市值: {token.marketCap}</div>
              <Button variant="ghost" size="sm" className="p-1">
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenList;
