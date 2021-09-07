import { ChakraProvider, Container } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Navigator } from './components/Navigator';
import { Routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Navigator />
        <Container maxW="container.lg">
          <Routes />
        </Container>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;