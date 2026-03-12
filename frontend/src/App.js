import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './routes/login';
import Menu from './routes/menu';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/menu' element={<Menu />}/>
        </Routes>
      </Router>
    </ChakraProvider>

  );
}

export default App;
