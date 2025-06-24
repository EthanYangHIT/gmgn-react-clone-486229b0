
import { useState } from 'react';
import Header from '@/components/Header';
import NavigationTabs from '@/components/NavigationTabs';
import TokenList from '@/components/TokenList';
import TradingPanel from '@/components/TradingPanel';
import StatsOverview from '@/components/StatsOverview';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [activeTab, setActiveTab] = useState('trending');
  const { toast } = useToast();

  return (
    <div className="min-h-screen bg-gmgn-dark text-white">
      {/* 主要内容区域 */}
      <div className="flex flex-col">
        {/* 头部 */}
        <Header />
        
        {/* 统计概览 */}
        <StatsOverview />
        
        {/* 导航标签 */}
        <NavigationTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* 主要内容 */}
        <main className="flex-1 px-4 pb-20">
          <div className="max-w-md mx-auto space-y-4">
            {/* 代币列表 */}
            <TokenList activeTab={activeTab} />
            
            {/* 交易面板 */}
            <TradingPanel />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
