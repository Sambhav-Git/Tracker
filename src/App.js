import "./App.css";
import React, { useEffect, useState } from "react";
import { do_encode, showBarcode } from './helper.js'
import { Divider } from 'antd';
import { Button, Modal } from 'antd';
import LetterComponent from "./LetterComponent.jsx";
import html2pdf from 'html2pdf.js';
import pdfStylesheet from "./pdf-stylesheet.js";

function App() {

  const [brcde, setBrCde] = useState('');
  const [top, setTop] = useState('')
  const [mid, setMid] = useState('');
  const [btm, setBtm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [party, setParty] = useState({
    name: '',
    address: '',
    font: 'l'
  })
  const [data, setData] = useState({
    zip: '',
    plus4: '',
    delivery_pt: '',
    barcode_id: '',
    mailer_id: '',
    serial_num: '',
    service_type: '',
  });

  const showModal = () => {
    setIsModalOpen(true);
    // setData({})
  };

  const handleOk = () => {
    setIsModalOpen(false);
    // setData({})
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    // setData({})
  };

  useEffect(() => {
    let a = showBarcode(brcde);
    setTop(a.topRow);
    setBtm(a.btmRow);
    setMid(a.midRow);
  }, [brcde])


  const handleDownload = () => {
    const modalContent = document.getElementsByClassName('ant-modal-body')[0];
    const chunkSize = 100 * 100; // 1 MB chunk size (adjust as needed)
    let contentHTML = '';

    // Function to recursively process chunks of content
    const processChunks = (start) => {
      const chunk = modalContent.outerHTML.substring(start, start + chunkSize);
      contentHTML += chunk;

      // If there's more content remaining, process the next chunk
      if (start + chunkSize < modalContent.outerHTML.length) {
        setTimeout(() => {
          processChunks(start + chunkSize);
        }, 0); // Use setTimeout to allow the event loop to handle other tasks
      } else {
        // Once all chunks are processed, use contentHTML for your PDF generation or any other purpose
        console.log(contentHTML);
      }
    };

    // Start processing chunks from the beginning
    processChunks(0);



    // const modalContent = document.getElementsByClassName('ant-modal-content')[0].outerHTML;

    html2pdf(modalContent, {
      margin: 1,
      filename: 'modal_content.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { dpi: 192, letterRendering: true },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
      // Add stylesheets to include in the PDF
      include: [
        // Example: Link to an external stylesheet
        'https://cdnjs.cloudflare.com/ajax/libs/antd/4.17.0/antd.css',
        pdfStylesheet.js
      ]
    });
  };

  // const handleDownload = () => {
  //   const modalContent = document.getElementsByClassName('ant-modal-content')[0].innerText;

  //   html2pdf(modalContent, {
  //     margin: 1,
  //     filename: 'modal_content.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { dpi: 192, letterRendering: true },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   });
  // };



  const handleSubmit = (target) => {

  }


  return (


    <div className="App">
      <Modal
        bodyStyle={{ overflowY: 'auto', maxHeight: 'calc(100vh - 250px)' }}
        className="newStyle"
        id="tier-1"
        title="Preview" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={[
          <Button className="btn-download" key="download" type="primary" onClick={handleDownload}>
            Download
          </Button>
        ]} >
        {/* Encoded: <span>{brcde}</span> */}
        {brcde && <div className="barcode-box"><table className={`barcodeClass ${party.font}`} id="barcodetable" cellSpacing="0" border="0">
          <tbody>
            <tr>{top}</tr>
            <tr>{mid}</tr>
            <tr>{btm}</tr>
          </tbody>

        </table></div>
        }
        <LetterComponent barcode={brcde} partyName={party.name} partyAddress={party.address} data={data} partyData={party} />
      </Modal>
      <div className="form-container">
        <h1>Barcode Encoder</h1>
        <Divider />


        <div>
          <ul>
            <li className="form-row">
              <label htmlFor="name">ZipCode</label>
              <input
                type="text"
                value={data.zip || ""}
                onChange={({ target }) => {
                  setData((prev) => ({
                    ...prev,
                    zip: target.value,
                  }));
                }}
              />
            </li>

            <li className="form-row">
              <label htmlFor="name">(Zip)+4</label>
              <input
                type="text"
                value={data.plus4 || ""}
                onChange={({ target }) => {
                  setData((prev) => ({
                    ...prev,
                    plus4: target.value,
                  }));
                }}
              />
            </li>
            <li className="form-row">
              <label htmlFor="name">Delivery Point</label>
              <input
                type="text"
                value={data.delivery_pt || ""}
                onChange={({ target }) => {
                  setData((prev) => ({
                    ...prev,
                    delivery_pt: target.value,
                  }));
                }}
              />
            </li>

            <li className="form-row">
              <label htmlFor="name">Barcode ID</label>
              <input
                type="text"
                value={data.barcode_id || ""}
                onChange={({ target }) => {
                  setData((prev) => ({
                    ...prev,
                    barcode_id: target.value,
                  }));
                }}
              />
            </li>

            <li className="form-row">
              <label htmlFor="name">Service Type</label>
              <input
                type="text"
                value={data.service_type || ""}
                onChange={({ target }) => {
                  setData((prev) => ({
                    ...prev,
                    service_type: target.value,
                  }));
                }}
              />
            </li>

            <li className="form-row">
              <label htmlFor="name">Mailer ID</label>
              <input
                type="text"
                value={data.mailer_id || ""}
                onChange={({ target }) => {
                  setData((prev) => ({
                    ...prev,
                    mailer_id: target.value,
                  }));
                }}
              />
            </li>

            <li className="form-row">
              <label htmlFor="name">Serial Number</label>
              <input
                type="text"
                value={data.serial_num || ""}
                onChange={({ target }) => {
                  setData((prev) => ({
                    ...prev,
                    serial_num: target.value,
                  }));
                }}
              />
            </li>
            <li className="form-row">
              <label htmlFor="name">Barcode Font Size</label>
              <select value={party.font} onChange={({ target }) => {
                setParty((prev) => ({
                  ...prev,
                  font: target.value,
                }));
              }}>
                <option value="xs">4px</option>
                <option value="s">5px</option>
                <option value="m">6px</option>
                <option value="l">7px (Default)</option>
                <option value="xl">8px</option>
                <option value="xxl">9px</option>
              </select>
            </li>
            {/* <li className="form-row">
            <label htmlFor="letter">Letter Body</label>
            <input
              type="textarea"
              value={data.mail_body || ""}
              onChange={({ target }) => {
                setData((prev) => ({
                  ...prev,
                  mail_body: target.value,
                }));
              }}
            />
          </li> */}
          </ul>

          <ul className="address">
            <li className="form-row">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={party.name || ""}
                onChange={({ target }) => {
                  setParty((prev) => ({
                    ...prev,
                    name: target.value,
                  }));
                }}
              />
            </li>
            <li className="form-row">
              <label htmlFor="name">Address</label>
              <textarea
                style={{ width: '253px', height: '68px' }}
                value={party.address || ""}
                onChange={({ target }) => {
                  setParty((prev) => ({
                    ...prev,
                    address: target.value,
                  }));
                }}
              />
            </li>
          </ul>

          <button className="btn" onClick={() => {
            let a = do_encode(data)
            if (a && data && (Object.keys(data).length !== 0 || Object.values(data).filter(a => a !== '').length === 0)) {
              setBrCde(a);
              showModal();
            }

          }}>Generate Letter</button>
        </div>
      </div></div>
  );
}

export default App;