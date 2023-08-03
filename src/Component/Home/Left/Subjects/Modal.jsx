import React from 'react';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Modal = ({setModal,resume}) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();
    
    
    return (
        <>
       {
       resume!==null &&(
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={resume} plugins={[defaultLayoutPluginInstance]}/>
        
    </Worker>

       )
       }
       </>
    );
};

export default Modal;