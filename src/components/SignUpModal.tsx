
import { useState } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

interface SignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SignUpModal = ({ isOpen, onClose }: SignUpModalProps) => {
  const [email, setEmail] = useState('');
  const [inviteCode, setInviteCode] = useState('BadeGhlu');

  const handleSignUp = () => {
    console.log('Sign up with:', { email, inviteCode });
    // Handle sign up logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-gray-900 border-gray-700 text-white max-w-md p-0 gap-0">
        {/* Header */}
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Sign Up</h2>
            <Button
              variant="ghost"
              size="sm"
              className="h-6 w-6 p-0 text-gray-400 hover:text-white"
              onClick={onClose}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="text-sm text-gray-400 mt-2">
            Already have an account?{' '}
            <button className="text-white hover:underline">Log In</button>
          </div>
        </DialogHeader>

        {/* Form */}
        <div className="px-6 pb-6 space-y-4">
          {/* Email Input */}
          <div>
            <label className="block text-sm text-gray-300 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-green-500 focus:outline-none"
            />
          </div>

          {/* Invite Code */}
          <div>
            <input
              type="text"
              value={inviteCode}
              onChange={(e) => setInviteCode(e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-green-500 focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-2">
              The invite code cannot be changed after binding. Please ensure the correct invite code is entered.
            </p>
          </div>

          {/* Sign Up Button */}
          <Button
            onClick={handleSignUp}
            className="w-full bg-green-500 hover:bg-green-600 text-black font-medium py-3 rounded-lg transition-colors"
          >
            Sign Up
          </Button>

          {/* Divider */}
          <div className="text-center text-gray-500 text-sm">
            OR Sign Up
          </div>

          {/* Social Login Options */}
          <div className="flex justify-center space-x-8">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <Send className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-400">Telegram</span>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm text-gray-400">Phantom</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-700 text-center text-xs text-gray-500">
          <span className="hover:underline cursor-pointer">Terms of Service</span>
          {' | '}
          <span className="hover:underline cursor-pointer">Privacy Policy</span>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpModal;
