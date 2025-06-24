
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
    <div className="bg-black border-b border-gray-800 px-4 py-3 hover:bg-gray-900/30 transition-colors">
      <div className="flex items-start justify-between">
        {/* 左侧：头像 + 信息 */}
        <div className="flex items-start space-x-3 flex-1">
          {/* 头像 */}
          <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <span className="text-lg">{token.logo}</span>
          </div>
          
          {/* 主要信息 */}
          <div className="flex-1 min-w-0">
            {/* 第一行：代币名称和时间 */}
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-white font-medium text-sm">{token.symbol}</span>
              <span className="text-gray-500 text-xs">{token.name}</span>
            </div>
            
            {/* 第二行：时间和合约地址 */}
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gray-400 text-xs">{token.timeAgo}</span>
              <span className="text-gray-500 text-xs font-mono truncate">{token.contractAddress}</span>
              <button className="text-gray-500 hover:text-gray-300">
                <MoreHorizontal className="w-3 h-3" />
              </button>
            </div>
            
            {/* 第三行：统计信息 */}
            <div className="flex items-center space-x-4 text-xs">
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">👥</span>
                <span className="text-white">{token.holders}</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span className="text-green-400">▲ {token.buyPercentage}%</span>
                <span className="text-red-400">▼ {token.sellPercentage}%</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">🏃</span>
                <span className="text-white">Run</span>
              </div>
              
              <div className="flex items-center space-x-1">
                <span className="text-gray-400">⏱</span>
                <span className="text-white">{Math.floor(Math.random() * 20) + 1}</span>
              </div>
            </div>
            
            {/* 特殊标识 */}
            {token.features && token.features.length > 0 && (
              <div className="flex items-center space-x-1 mt-2">
                {token.features.map((feature, index) => (
                  <span key={index} className="text-xs bg-gray-800 text-gray-400 px-1.5 py-0.5 rounded">
                    {feature}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* 右侧：价格和市值信息 */}
        <div className="text-right flex-shrink-0 ml-4">
          <div className="flex items-center justify-end space-x-2 mb-1">
            <span className="text-gray-400 text-xs">👥 {token.holders}</span>
            <span className="text-yellow-400 text-xs">⭐ {Math.floor(Math.random() * 10) + 1}</span>
            <span className="text-white text-xs">💰 {token.price.toFixed(6)}</span>
            <span className="text-gray-400 text-xs">TX {Math.floor(Math.random() * 50) + 1}</span>
          </div>
          
          <div className="flex items-center justify-end space-x-2 text-xs text-gray-400">
            <span>V {token.volume}</span>
            <span>MC {token.marketCap}</span>
          </div>
          
          {/* 添加按钮 */}
          <div className="mt-2">
            <button className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
              <span className="text-black text-lg font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
