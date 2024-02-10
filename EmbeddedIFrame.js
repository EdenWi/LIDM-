import React from 'react';

const EmbeddedIframe = () => {
  return (
    <div className=''>
      <iframe
        width="800"
        height="650"
        src="https://lookerstudio.google.com/embed/reporting/63b70f39-4729-46ee-bed7-64c4dbc546dd/page/CjfoD"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen
        sandbox="allow-storage-access-by-user-activation allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  );
};

export default EmbeddedIframe;
