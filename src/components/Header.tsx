
import { Search, Bell, User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gmgn-dark/95 backdrop-blur-sm border-b border-gmgn-hover">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gmgn-gradient flex items-center justify-center">
              <span className="text-gmgn-dark font-bold text-sm">G</span>
            </div>
            <span className="text-xl font-bold text-gmgn-green">GMGN</span>
          </div>

          {/* 右侧按钮 */}
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm" className="p-2">
              <Search className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="sm" className="p-2">
              <User className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* 搜索栏 */}
        <div className="mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input 
              placeholder="搜索代币或地址..." 
              className="pl-10 bg-gmgn-surface border-gmgn-hover focus:border-gmgn-green"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
