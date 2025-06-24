
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
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-lg p-3 hover:bg-gray-800/50 transition-colors">
      <div className="flex items-center justify-between">
        {/* 左侧：头像 + 基本信息 */}
        <div className="flex items-center space-x-3 flex-1">
          {/* 头像 */}
          <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden">
            <span className="text-lg">{token.logo}</span>
          </div>
          
          {/* 代币信息 */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center space-x-2">
              <span className="text-white font-medium text-sm">{token.symbol}</span>
              <span className="text-gray-400 text-xs">{token.name}</span>
            </div>
            <div className="flex items-center space-x-2 mt-0.5">
              <span className="text-gray-500 text-xs">{token.timeAgo}</span>
              <span className="text-gray-500 text-xs font-mono">{token.contractAddress}</span>
            </div>
          </div>
        </div>

        {/* 中间：数据指标 */}
        <div className="flex items-center space-x-4 px-4">
          {/* 持有者数量 */}
          <div className="flex items-center space-x-1">
            <span className="text-gray-400 text-xs">👥</span>
            <span className="text-white text-xs font-medium">{token.holders}</span>
          </div>
          
          {/* 买卖比例 */}
          <div className="flex items-center space-x-1">
            <span className="text-green-400 text-xs">▲ {token.buyPercentage}%</span>
            <span className="text-red-400 text-xs">▼ {token.sellPercentage}%</span>
          </div>
          
          {/* 状态指标 */}
          <div className="flex items-center space-x-2">
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-400 text-xs">100%</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-400 text-xs">100%</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-green-400 text-xs">100%</span>
            </div>
          </div>
        </div>

        {/* 右侧：价格和操作 */}
        <div className="flex items-center space-x-4">
          {/* 价格信息 */}
          <div className="text-right">
            <div className="flex items-center space-x-2">
              <span className="text-green-400 text-sm font-medium">+6</span>
              <span className="text-gray-400 text-xs">↑ 0.00011</span>
              <span className="text-gray-400 text-xs">× 6</span>
            </div>
            <div className="flex items-center space-x-2 mt-0.5">
              <span className="text-white text-xs">V ${token.volume}</span>
              <span className="text-white text-xs">MC ${token.marketCap}</span>
            </div>
          </div>
          
          {/* 操作按钮 */}
          <div className="flex items-center space-x-2">
            <button className="w-6 h-6 rounded bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition-colors">
              <span className="text-gray-300 text-xs">📈</span>
            </button>
            <button className="w-6 h-6 rounded bg-green-500 hover:bg-green-400 flex items-center justify-center transition-colors">
              <span className="text-black text-sm font-bold">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
