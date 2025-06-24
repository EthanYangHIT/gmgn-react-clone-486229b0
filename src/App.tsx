
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import Header from './components/Header'
import WalletPage from './pages/WalletPage'

function App() {
  return (
    <Router>
      <Box minH="100vh" bg="black">
        <Header />
        <Routes>
          <Route path="/" element={<WalletPage />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App
