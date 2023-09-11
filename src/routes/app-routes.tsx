import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/home/home';
import Loan from '../pages/loan/loan';
import NotFound from '../pages/404/NotFound';
import Scoring from '../pages/loan/scoring/Scoring';
import LoanLayout from '../components/LoanLayout/LoanLayout';
import PaymentSchedule from '../pages/loan/paymentSchedule/PaymentSchedule';
import FileForSigning from '../pages/loan/file/FileForSigning';
import CodePage from '../pages/loan/code/CodePage';
import WaitingDecision from '../components/WaitingDecision/WaitingDecision';
import { useContext } from 'react';
import { SoringStepContext } from '../../store/FormsContext/scoringContext';
import ResultText from '../pages/loan/paymentSchedule/Components/ResultText';
import { ScheduleStepContext } from '../../store/FormsContext/scheduleContext';
import SentDocument from '../components/SentDocument/SentDocument';
import  { DocumentStepContext } from '../../store/FormsContext/documentContext';
import Present from '../components/PResent/Present';

const AppRoutes = () => {
  const {scoringStep} = useContext(SoringStepContext);
  const {scheduleStep} = useContext(ScheduleStepContext);
  const {documentStep, codeStep} = useContext(DocumentStepContext);

  const stepForm = {
    scoring:  <Route path=":id" element={<Scoring />} />,
    waitingDecision:  <Route path=":id" element={<WaitingDecision />} />,
  };

  const stepDocument = {
    schedule: <Route path=":id/document" element={<PaymentSchedule />} />,
    result: <Route path=":id/document" element={<ResultText />} />,
  }
  const documentForm = {
    document:  <Route path=":id/document/sign" element={<FileForSigning />} />,
    sentDocument: <Route path=":id/document/sign" element={<SentDocument />} />
  }

  const codeForm = {
    code: <Route path=":id/code" element={<CodePage />} />,
    present: <Route path=":id/code" element={<Present />} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/loan' element={<LoanLayout />}>
          <Route index element={<Loan />} />
          {stepForm[scoringStep]}
          {stepDocument[scheduleStep]}
          {documentForm[documentStep]}
          {codeForm[codeStep]}
        </Route>
      </Routes>
    </BrowserRouter>
    )
}
export default AppRoutes;