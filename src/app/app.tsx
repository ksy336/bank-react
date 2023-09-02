import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Loan from '../pages/loan/loan';
import styles from './app.module.scss';
import NotFound from '../pages/404/NotFound';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loan' element={<Loan />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
