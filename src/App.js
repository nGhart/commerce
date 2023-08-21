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
          {/* <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              border: '2px solid white',
              color: 'green',
              fontWeight: 700,
              fontSize: '20px',
            }}
          >
            <div
              style={{ backgroundColor: 'var(--color1)', width: '20%' }}
              className="font1"
            >
              1Pie total 12345
            </div>
            <div
              className="font2"
              style={{ backgroundColor: 'var(--color2)', width: '20%' }}
            >
              2Pie total 12345
            </div>
            <div
              className="font3"
              style={{ backgroundColor: 'var(--color3)', width: '20%' }}
            >
              3Pie total 12345
            </div>
            <div
              className="font4"
              style={{ backgroundColor: 'var(--color4)', width: '20%' }}
            >
              4Pie total 12345
            </div>
            <div
              className="font5"
              style={{ backgroundColor: 'var(--color5)', width: '20%' }}
            >
              5Pie total 12345
            </div>
            <div style={{ backgroundColor: 'var(--color6)', width: '20%' }}>
              6Pie total 12345
            </div>
            <div style={{ backgroundColor: 'var(--color7)', width: '20%' }}>
              7Pie total 12345
            </div>
          </div> */}
          <Routing />
          <CartModal />
        </div>
      </BrowserRouter>
    </ContextProvider>
  );
}

export default App;
