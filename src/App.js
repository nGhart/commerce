import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './Routing';
import CartModal from './components/CartModal';
import { ContextProvider } from './context';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <NavigationBar />
        <Routing />
        <CartModal />
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
