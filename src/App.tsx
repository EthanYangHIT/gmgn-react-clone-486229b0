import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import Index from './pages/Index'
import WalletPage from './pages/WalletPage'
import { useState } from 'react'

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSignUp = () => {
    // 这里可以触发 SignUpModal，实际弹窗逻辑由 Header 内部 useDisclosure 控制
    // 这里只是为了接口完整性
  };

  const handleSignIn = () => {
    setIsSignedIn(true);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
  };

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Box minH="100vh" bg="black">
        <Header
          isSignedIn={isSignedIn}
          onSignUp={handleSignUp}
          onSignIn={handleSignIn}
          onSignOut={handleSignOut}
        />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/wallet" element={<WalletPage />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
