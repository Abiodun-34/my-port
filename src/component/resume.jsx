import React, { useState } from 'react';

const Resume = () => {
  const [pdfError, setPdfError] = useState(false);

  return (
    <section className="container mx-auto py-12">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">My Resume</h2>
        
        {pdfError ? (
          <div className="mt-8">
            <p>PDF failed to load. <a href="/Abiodun.pdf" className="text-blue-600 underline">Download instead</a></p>
          </div>
        ) : (
          <object 
            data="/Abiodun.pdf" 
            type="application/pdf"
            className="w-full h-screen mt-8 border-none"
            onError={() => setPdfError(true)}
          >
            <p>Your browser doesn't support PDFs. <a href="/Abiodun_Sunday.pdf">Download instead</a></p>
          </object>
        )}
      </div>
    </section>
  );
};

export default Resume;