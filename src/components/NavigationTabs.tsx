
import { TrendingUp, Clock, Star, BarChart3 } from 'lucide-react';

interface NavigationTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavigationTabs = ({ activeTab, onTabChange }: NavigationTabsProps) => {
  const tabs = [
    { id: 'trending', label: '热门', icon: TrendingUp },
    { id: 'new', label: '新币', icon: Clock },
    { id: 'watchlist', label: '关注', icon: Star },
    { id: 'analytics', label: '分析', icon: BarChart3 },
  ];

  return (
    <div className="sticky top-[120px] z-40 bg-gmgn-dark/95 backdrop-blur-sm border-b border-gmgn-hover">
      <div className="px-4 py-2">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'bg-gmgn-green text-gmgn-dark font-medium'
                    : 'text-gray-400 hover:text-white hover:bg-gmgn-hover'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationTabs;
