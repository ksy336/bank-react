import { Document, Page, pdfjs  } from "react-pdf";
import pdfFile from '/public/credit-card-offer.pdf';
import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import {useSendSigningMutation} from '../../../../store/api/apiSlice';
import { useParams } from 'react-router-dom';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const FileForSigning = () => {
  const [sendSigning, {isLoading}] = useSendSigningMutation();
  const [isValid, setIsValid] = useState(false);
  const {id} = useParams();
  const sendPDFAgreeDataHandler = async () => {
    event.preventDefault();

    if (isValid) {
      // setPdfStep("result")
      try {
        await sendSigning(id).unwrap();
        // setScheduleStep("result")
      } catch(e) {
        console.warn(e);
        throw new Error(e);
      }
    }
  }
  if (isLoading) return  <div className="customize-text">Loading...</div>;

  return (
    <section className="block-pdf wrapper">
      <h3>Signing of documents</h3>
      <span>Step 4 of 5</span>
      <p className="text-for-pdf">Information on interest rates under bank deposit agreements with individuals. Center for Corporate Information Disclosure. Information of
        a professional participant in the securities market. Information about persons under whose control or significant influence the Partner
        Banks are. By leaving an application, you agree to the processing of personal data, obtaining information, obtaining access to a credit
        history, using an analogue of a handwritten signature, an offer, a policy regarding the processing of personal data, a form of consent to the
        processing of personal data.</p>
      <div className="document-pdf">
        <Document
          file={pdfFile}
          options={{ workerSrc: "/pdf.worker.js" }}
          // onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={1} />
        </Document>
      </div>
      <div className="button-send-pdf">
        <div className="input-block-agree">
          <input type="checkbox" onChange={() =>  setIsValid((prevState) => prevState = !prevState)} />
          <label className="agree-for-checkbox">I agree with the payment schedule</label>
        </div>
        <Button  className="button-send" onClick={sendPDFAgreeDataHandler} disabled={!isValid}>Send</Button>
      </div>
    </section>
  );
};

export default FileForSigning;