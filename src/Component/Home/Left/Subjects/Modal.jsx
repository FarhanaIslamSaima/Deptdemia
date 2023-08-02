import React from 'react';

const Modal = ({setModal,resume}) => {
    
    
    return (
        <>
       {
       resume!==null &&(
        <> 
        <embed type="application/pdf" src={resume} width={100+'%'} height={100+'%'}/>
        </>

       )
       }
       </>
    );
};

export default Modal;