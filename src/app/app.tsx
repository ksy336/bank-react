import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styles from './app.module.scss';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/loan' element={<Loan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
