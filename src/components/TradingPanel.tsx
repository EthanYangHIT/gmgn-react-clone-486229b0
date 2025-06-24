
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { TrendingUp, TrendingDown, DollarSign } from 'lucide-react';

const TradingPanel = () => {
  const [amount, setAmount] = useState('');
  const [selectedAction, setSelectedAction] = useState<'buy' | 'sell'>('buy');

  return (
    <div className="bg-gmgn-surface rounded-lg p-4 border border-gmgn-hover">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">快速交易</h3>
        <DollarSign className="w-5 h-5 text-gmgn-green" />
      </div>

      {/* 买卖切换 */}
      <div className="flex space-x-2 mb-4">
        <Button
          variant={selectedAction === 'buy' ? 'default' : 'outline'}
          onClick={() => setSelectedAction('buy')}
          className={`flex-1 ${
            selectedAction === 'buy'
              ? 'bg-green-600 hover:bg-green-700 text-white'
              : 'border-green-600 text-green-600 hover:bg-green-600 hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          买入
        </Button>
        <Button
          variant={selectedAction === 'sell' ? 'default' : 'outline'}
          onClick={() => setSelectedAction('sell')}
          className={`flex-1 ${
            selectedAction === 'sell'
              ? 'bg-red-600 hover:bg-red-700 text-white'
              : 'border-red-600 text-red-600 hover:bg-red-600 hover:text-white'
          }`}
        >
          <TrendingDown className="w-4 h-4 mr-2" />
          卖出
        </Button>
      </div>

      {/* 金额输入 */}
      <div className="mb-4">
        <label className="block text-sm text-gray-400 mb-2">金额 (SOL)</label>
        <Input
          type="number"
          placeholder="输入交易金额"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="bg-gmgn-dark border-gmgn-hover focus:border-gmgn-green text-white"
        />
      </div>

      {/* 快捷金额 */}
      <div className="grid grid-cols-4 gap-2 mb-4">
        {['0.1', '0.5', '1', '5'].map((value) => (
          <Button
            key={value}
            variant="outline"
            size="sm"
            onClick={() => setAmount(value)}
            className="text-xs border-gmgn-hover text-gray-400 hover:bg-gmgn-hover hover:text-white"
          >
            {value}
          </Button>
        ))}
      </div>

      {/* 交易按钮 */}
      <Button
        className={`w-full font-semibold ${
          selectedAction === 'buy'
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-red-600 hover:bg-red-700'
        }`}
        disabled={!amount}
      >
        {selectedAction === 'buy' ? '买入' : '卖出'} {amount && `${amount} SOL`}
      </Button>

      {/* 滑点设置 */}
      <div className="mt-4 pt-4 border-t border-gmgn-hover">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">滑点容忍度</span>
          <span className="text-white">1%</span>
        </div>
      </div>
    </div>
  );
};

export default TradingPanel;
