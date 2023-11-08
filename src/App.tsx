import { AppProvider } from './context/AppContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import { Home } from './Home';
import { Private } from './Private';

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/private' element={<PrivateRoute component={Private} />} />
      </Routes>
    </BrowserRouter>
  </AppProvider>
);

export default App;
