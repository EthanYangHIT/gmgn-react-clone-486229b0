
import { useState } from 'react';
import { ArrowLeft, Copy, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';

const WalletPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('PnL');

  // Mock wallet data
  const walletAddress = '2MZzS...Dng';
  const totalPnL = 0;
  const winRate = 0;
  const unrealizedProfits = 0;

  const tabs = ['7D PnL', 'Profit', 'Distribution'];
  const timePeriods = ['1d', '7d', '30d', 'All'];
  const [selectedPeriod, setSelectedPeriod] = useState('7d');

  const phishingChecks = [
    { label: 'Blacklist', status: true, value: '--' },
    { label: "Didn't buy", status: true, value: '--' },
    { label: 'Sold > Bought', status: true, value: '--' },
    { label: 'Buy/Sell within 5 secs', status: true, value: '--' }
  ];

  const activityTabs = ['Recent PnL', 'Holdings', 'Activity', 'Deployed Tokens'];

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(walletAddress);
    toast({
      title: "Address Copied",
      description: "Wallet address copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate('/')}
            className="text-gray-400 hover:text-white"
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-sm">🌸</span>
            </div>
            <span className="text-lg font-medium">{walletAddress}</span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleCopyAddress}
              className="text-gray-400 hover:text-white"
            >
              <Copy className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button className="bg-gray-800 text-white hover:bg-gray-700">
            <ExternalLink className="w-4 h-4 mr-2" />
            Copy trade
          </Button>
          <Button variant="ghost" className="text-gray-400">
            <span className="text-lg">👤</span>
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4">
        {/* Tab Navigation */}
        <div className="flex space-x-8 mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm pb-2 border-b-2 transition-colors ${
                activeTab === tab
                  ? 'text-white border-white'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Time Period Selector */}
        <div className="flex space-x-4 mb-6">
          {timePeriods.map((period) => (
            <button
              key={period}
              onClick={() => setSelectedPeriod(period)}
              className={`px-3 py-1 text-sm rounded transition-colors ${
                selectedPeriod === period
                  ? 'bg-gray-700 text-white'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {period}
            </button>
          ))}
        </div>

        {/* PnL Statistics */}
        <div className="grid grid-cols-2 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-2">
              <span className="text-gray-400">7D Realized PnL</span>
              <span className="text-gray-500">USD</span>
            </div>
            <div className="text-3xl font-bold text-white">
              {totalPnL}% <span className="text-sm text-gray-500">$0</span>
            </div>
            <div className="text-sm text-gray-400 mt-1">
              Total PnL
            </div>
          </div>
          <div>
            <div className="text-gray-400 mb-2">Win Rate</div>
            <div className="text-3xl font-bold text-white">{winRate}%</div>
            <div className="text-sm text-gray-400 mt-1">
              $0 (--) 
            </div>
            <div className="text-sm text-gray-400">
              Unrealized Profits: ${unrealizedProfits}
            </div>
          </div>
        </div>

        {/* Phishing Check */}
        <div className="bg-gray-900 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <span className="text-yellow-500">🛡️</span>
            <span className="text-white font-medium">Phishing check</span>
          </div>
          <div className="space-y-2">
            {phishingChecks.map((check, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${check.status ? 'bg-green-500' : 'bg-red-500'}`} />
                <span className="text-gray-300 flex-1">{check.label}:</span>
                <span className="text-gray-400">{check.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Activity Tabs */}
        <div className="flex space-x-8 mb-6">
          {activityTabs.map((tab) => (
            <button
              key={tab}
              className={`text-sm pb-2 border-b-2 transition-colors ${
                tab === 'Activity'
                  ? 'text-white border-white'
                  : 'text-gray-400 border-transparent hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Activity Table */}
        <div className="bg-gray-900 rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="border-gray-800">
                <TableHead className="text-gray-400">Type</TableHead>
                <TableHead className="text-gray-400">Token</TableHead>
                <TableHead className="text-gray-400">Total USD</TableHead>
                <TableHead className="text-gray-400">Amount</TableHead>
                <TableHead className="text-gray-400">Price</TableHead>
                <TableHead className="text-gray-400">Profit</TableHead>
                <TableHead className="text-gray-400">Age</TableHead>
                <TableHead className="text-gray-400">Gas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell colSpan={8} className="text-center py-12">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 text-2xl">📋</span>
                    </div>
                    <div className="text-gray-500">No Data</div>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
