
import { MoreHorizontal, TrendingUp, Play, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TokenCardProps {
  token: {
    id: string;
    name: string;
    symbol: string;
    logo: string;
    timeAgo: string;
    contractAddress: string;
    holders: number;
    price: number;
    priceChange: number;
    marketCap: string;
    volume: string;
    buyPercentage: number;
    sellPercentage: number;
    isPositive: boolean;
    risk: 'low' | 'medium' | 'high';
    features?: string[];
  };
}

const TokenCard = ({ token }: TokenCardProps) => {
  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'text-green-400';
      case 'medium': return 'text-yellow-400';
      case 'high': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 mb-2">
      {/* 头部信息 */}
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full overflow-hidden bg-gray-800 flex items-center justify-center">
            <span className="text-lg">{token.logo}</span>
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium">{token.symbol}</span>
              <span className="text-gray-400 text-xs">{token.name}</span>
            </div>
            <div className="flex items-center space-x-2 text-xs text-gray-400">
              <span>{token.timeAgo}</span>
              <span className="truncate max-w-20">{token.contractAddress}</span>
              <Button variant="ghost" size="sm" className="p-0 h-auto">
                <MoreHorizontal className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className={`p-1 rounded-full ${getRiskColor(token.risk)} bg-gray-800`}
        >
          <Zap className="w-3 h-3" />
        </Button>
      </div>

      {/* 统计信息 */}
      <div className="flex items-center justify-between text-xs mb-2">
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1">
            <TrendingUp className="w-3 h-3 text-gray-400" />
            <span className="text-white">{token.holders}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className="text-gray-400">💎</span>
            <span className="text-white">{token.price.toFixed(6)}</span>
          </div>
          <div className="flex items-center space-x-1">
            <span className={token.isPositive ? 'text-green-400' : 'text-red-400'}>
              Tx {Math.abs(token.priceChange)}
            </span>
          </div>
        </div>
      </div>

      {/* 价格和市值信息 */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-1">
            <span className="text-green-400">{token.buyPercentage}%</span>
            <span className="text-red-400">{token.sellPercentage}%</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <span>V {token.volume}</span>
          <span>MC {token.marketCap}</span>
        </div>
      </div>

      {/* 特殊功能标识 */}
      {token.features && token.features.length > 0 && (
        <div className="flex items-center space-x-1 mt-2">
          {token.features.map((feature, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-400 px-1 rounded">
              {feature}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenCard;
