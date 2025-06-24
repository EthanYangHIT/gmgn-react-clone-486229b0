import { Search, Settings, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      {/* 顶部工具栏 */}
      <div className="flex items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded flex items-center justify-center">
              <img src="/lovable-uploads/3c7d9142-1ee0-43a5-aa48-530a9d98f8ee.png" alt="GMGN" className="w-4 h-4" />
            </div>
            <span className="text-white font-medium">SOL</span>
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex items-center space-x-2 text-gray-400">
            <Search className="w-4 h-4" />
            <Settings className="w-4 h-4" />
            <MoreHorizontal className="w-4 h-4" />
          </div>
        </div>
        <div className="flex items-center space-x-2 text-gray-400">
          <span className="text-xs">≡ 0</span>
          <ChevronDown className="w-3 h-3" />
        </div>
      </div>

      {/* 导航标签 */}
      <div className="flex items-center px-4 py-2 space-x-6 text-sm border-b border-gray-800">
        <span className="text-white font-medium">Trenches</span>
        <span className="text-gray-400">New</span>
        <span className="text-gray-400">Trending</span>
        <span className="text-gray-400">CopyTrade</span>
        <span className="text-gray-400">Monitor</span>
        <span className="text-gray-400">Track</span>
        <span className="text-gray-400">Hold</span>
      </div>

      {/* Trenches 子导航 */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 bg-white rounded flex items-center justify-center">
            <img src="/lovable-uploads/3c7d9142-1ee0-43a5-aa48-530a9d98f8ee.png" alt="GMGN" className="w-3 h-3" />
          </div>
          <span className="text-white font-medium">Trenches</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>
        <div className="flex items-center space-x-4 text-gray-400">
          <div className="flex items-center space-x-1">
            <span className="text-xs">TP/SL</span>
            <Settings className="w-3 h-3" />
          </div>
          <Button variant="ghost" size="sm" className="p-1">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* New Creations 过滤器 */}
      <div className="flex items-center justify-between px-4 py-2 bg-black">
        <div className="flex items-center space-x-2">
          <span className="text-green-400 text-sm">🚀 New Creations</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
          <div className="flex items-center space-x-1 ml-4">
            <span className="text-gray-400 text-xs">≡ 0</span>
            <span className="text-gray-400 text-xs">P1</span>
            <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <div className="bg-gray-800 rounded px-2 py-1">
            <Search className="w-3 h-3 text-gray-400" />
          </div>
          <Button variant="ghost" size="sm" className="p-1">
            <MoreHorizontal className="w-4 h-4 text-gray-400" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
