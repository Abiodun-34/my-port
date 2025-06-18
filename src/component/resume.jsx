import React from 'react';



const resume = () => (
  <section className="container mx-auto py-12">
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6">My Resume</h2>
      
      {/* Optional: Embed preview */}
      <object 
        data="/Abiodun.pdf" 
        type="application/pdf"
        className="w-full h-screen mt-8 border-none"
        onError={() => setPdfError(true)}
      >
        <p>PDF failed to load. <a href="/Abiodun_Sunday.pdf">Download instead</a></p>
    </object>
    </div>
  </section>
);

export default resume