
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
    <div className="bg-black border-t border-gray-800 px-3 py-2 hover:bg-gray-900/50 transition-colors">
      {/* 主要信息行 */}
      <div className="flex items-center justify-between">
        {/* 左侧：logo + 基本信息 */}
        <div className="flex items-center space-x-2 flex-1 min-w-0">
          <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-black">{token.logo}</span>
          </div>
          
          <div className="flex items-center space-x-1 min-w-0">
            <span className="text-white font-medium text-sm truncate">{token.symbol}</span>
            <span className="text-gray-500 text-xs">{token.timeAgo}</span>
            <span className="text-gray-600 text-xs truncate">{token.contractAddress}</span>
          </div>
        </div>

        {/* 右侧：统计信息 */}
        <div className="flex items-center space-x-3 flex-shrink-0">
          <div className="flex items-center space-x-1">
            <span className="text-white text-xs">👥 {token.holders}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-white text-xs">💰 {token.price.toFixed(6)}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <span className="text-green-400 text-xs">▲ {token.buyPercentage}%</span>
            <span className="text-red-400 text-xs">▼ {token.sellPercentage}%</span>
          </div>
          
          <div className="flex items-center space-x-2 text-gray-400 text-xs">
            <span>V {token.volume}</span>
            <span>MC {token.marketCap}</span>
          </div>
        </div>
      </div>

      {/* 特殊功能标识 */}
      {token.features && token.features.length > 0 && (
        <div className="flex items-center space-x-1 mt-1 ml-8">
          {token.features.map((feature, index) => (
            <span key={index} className="text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">
              {feature}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default TokenCard;
