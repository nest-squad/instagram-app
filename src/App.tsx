import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navigator } from './components/Navigator';
import { UserProvider } from './context/User';
import { Routes } from './routes';


function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <UserProvider>
          <Navigator />
          <Container maxW="container.lg">
            <Routes />
          </Container>
        </UserProvider>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;