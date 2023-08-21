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
        <div className="App">
          <NavigationBar />
          <div style={{ display: 'flex' }}>
            <div style={{ backgroundColor: 'var(--color1)', width: '50px' }}>
              1
            </div>
            <div style={{ backgroundColor: 'var(--color2)', width: '50px' }}>
              2
            </div>
            <div style={{ backgroundColor: 'var(--color3)', width: '50px' }}>
              3
            </div>
            <div style={{ backgroundColor: 'var(--color4)', width: '50px' }}>
              4
            </div>
            <div style={{ backgroundColor: 'var(--color5)', width: '50px' }}>
              5
            </div>
            <div style={{ backgroundColor: 'var(--color6)', width: '50px' }}>
              6
            </div>
          </div>
          <Routing />
          <CartModal />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
