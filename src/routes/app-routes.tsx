import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Loan from '../pages/loan/loan';
import NotFound from '../pages/404/NotFound';
import Scoring from '../pages/loan/scoring/Scoring';
import LoanLayout from '../components/LoanLayout/LoanLayout';
import PaymentSchedule from '../pages/loan/paymentSchedule/PaymentSchedule';
import FileForSigning from '../pages/loan/file/FileForSigning';
import Code from '../pages/loan/code/Code';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<NotFound />} />
      <Route path='/loan' element={<LoanLayout />}>
        <Route index element={<Loan />} />
        <Route path=":id" element={<Scoring />}/>
        <Route path=":id/document" element={<PaymentSchedule />} />
        <Route path=":id/document/sign" element={<FileForSigning />} />
        <Route path=":id/code" element={Code}/>
      </Route>
    </Routes>
  </BrowserRouter>
)
export default AppRoutes;