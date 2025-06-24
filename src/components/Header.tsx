
import { Search, Settings, MoreHorizontal, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import SignUpModal from './SignUpModal';

const Header = () => {
  // 模拟登录状态，您可以根据实际需求替换为真实的登录状态管理
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);

  // 未登录时的简化头部
  if (!isLoggedIn) {
    return (
      <>
        <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
          <div className="flex items-center justify-between px-4 py-3">
            {/* 左侧：Logo 和链选择器 */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded flex items-center justify-center">
                  <img src="/gmgn-logo.svg" alt="GMGN" className="w-5 h-5" />
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-2 text-white font-medium hover:text-gray-300 transition-colors border border-gray-600 rounded px-3 py-1">
                    <img src="/images/solana-logo.png" alt="Solana" className="w-4 h-4" />
                    <span>SOL</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-gray-800 border-gray-700 min-w-[120px]" align="start">
                    <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <img src="/images/solana-logo.png" alt="Solana" className="w-5 h-5" />
                        <span>SOL</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" className="w-5 h-5" />
                        <span>ETH</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <img src="https://cryptologos.cc/logos/coinbase-coin-logo.png" alt="Base" className="w-5 h-5" />
                        <span>Base</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BSC" className="w-5 h-5" />
                        <span>BSC</span>
                      </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                      <div className="flex items-center space-x-2">
                        <img src="https://cryptologos.cc/logos/tron-trx-logo.png" alt="Tron" className="w-5 h-5" />
                        <span>Tron</span>
                      </div>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            {/* 中间：搜索和设置图标 */}
            <div className="flex items-center space-x-4 text-gray-400">
              <Search className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
              <Settings className="w-5 h-5 cursor-pointer hover:text-white transition-colors" />
            </div>

            {/* 右侧：登录按钮 */}
            <div className="flex items-center space-x-3">
              <Button 
                variant="ghost" 
                className="text-white hover:text-gray-300 px-4 py-2"
                onClick={() => setShowSignUpModal(true)}
              >
                Sign Up
              </Button>
              <Button 
                className="bg-white text-black hover:bg-gray-200 px-4 py-2 rounded-md font-medium"
                onClick={() => setIsLoggedIn(true)}
              >
                Log In
              </Button>
            </div>
          </div>
        </header>
        
        <SignUpModal 
          isOpen={showSignUpModal} 
          onClose={() => setShowSignUpModal(false)} 
        />
      </>
    );
  }

  // 已登录时的完整头部（保持原有功能）
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
              <DropdownMenuTrigger className="flex items-center space-x-2 text-white font-medium hover:text-gray-300 transition-colors">
                <img src="/images/solana-logo.png" alt="Solana" className="w-4 h-4" />
                <span>SOL</span>
                <ChevronDown className="w-4 h-4 text-gray-400" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-800 border-gray-700 min-w-[120px]" align="start">
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="/images/solana-logo.png" alt="Solana" className="w-5 h-5" />
                    <span>SOL</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="Ethereum" className="w-5 h-5" />
                    <span>ETH</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://cryptologos.cc/logos/coinbase-coin-logo.png" alt="Base" className="w-5 h-5" />
                    <span>Base</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://cryptologos.cc/logos/bnb-bnb-logo.png" alt="BSC" className="w-5 h-5" />
                    <span>BSC</span>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-white hover:bg-gray-700 focus:bg-gray-700 cursor-pointer">
                  <div className="flex items-center space-x-2">
                    <img src="https://cryptologos.cc/logos/tron-trx-logo.png" alt="Tron" className="w-5 h-5" />
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
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-gray-400 hover:text-white"
            onClick={() => setIsLoggedIn(false)}
          >
            Logout
          </Button>
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
