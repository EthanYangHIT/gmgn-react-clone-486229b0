
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

const StatsOverview = () => {
  const stats = [
    {
      label: '总市值',
      value: '$2.4T',
      change: '+2.3%',
      isPositive: true,
      icon: DollarSign,
    },
    {
      label: '24h交易量',
      value: '$89.2B',
      change: '+5.7%',
      isPositive: true,
      icon: Activity,
    },
    {
      label: 'BTC价格',
      value: '$43,521',
      change: '-1.2%',
      isPositive: false,
      icon: TrendingUp,
    },
    {
      label: '新币数量',
      value: '1,234',
      change: '+12%',
      isPositive: true,
      icon: TrendingUp,
    },
  ];

  return (
    <div className="px-4 py-3 border-b border-gmgn-hover">
      <div className="grid grid-cols-2 gap-3">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-gmgn-surface rounded-lg p-3 border border-gmgn-hover hover:border-gmgn-green/30 transition-all duration-200"
            >
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-4 h-4 text-gray-400" />
                <span
                  className={`text-xs font-medium ${
                    stat.isPositive ? 'text-gmgn-green' : 'text-gmgn-red'
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <div className="space-y-1">
                <div className="text-sm font-bold text-white">{stat.value}</div>
                <div className="text-xs text-gray-400">{stat.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsOverview;
