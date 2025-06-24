

import { Search, Settings, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      {/* 顶部工具栏 */}
      <div className="flex items-center justify-between px-4 py-2 text-sm">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded flex items-center justify-center">
              <img src="/gmgn-logo.svg" alt="GMGN" className="w-4 h-4" />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-white font-medium hover:text-gray-300 transition-colors">
                <span>SOL</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700 min-w-[120px]" align="start">
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">S</span>
                    </div>
                    <span>SOL</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">E</span>
                    </div>
                    <span>ETH</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">B</span>
                    </div>
                    <span>Base</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">B</span>
                    </div>
                    <span>BSC</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">T</span>
                    </div>
                    <span>Tron</span>
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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

      {/* 导航标签 - 添加横向滚动 */}
      <div className="overflow-x-auto scrollbar-hide border-b border-gray-800">
        <div className="flex items-center px-4 py-2 space-x-6 text-sm min-w-max">
          <span className="text-white font-medium whitespace-nowrap">Trenches</span>
          <span className="text-gray-400 whitespace-nowrap">New</span>
          <span className="text-gray-400 whitespace-nowrap">Trending</span>
          <span className="text-gray-400 whitespace-nowrap">CopyTrade</span>
          <span className="text-gray-400 whitespace-nowrap">Monitor</span>
          <span className="text-gray-400 whitespace-nowrap">Track</span>
          <span className="text-gray-400 whitespace-nowrap">Hold</span>
        </div>
      </div>

      {/* Trenches 子导航 */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-900/50">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded flex items-center justify-center">
            <img src="/gmgn-logo.svg" alt="GMGN" className="w-3 h-3" />
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

