// src/components/ReactConcept.tsx
import React from 'react';

type ReactConceptProps = {
  children: React.ReactNode;
};

const ReactConcept: React.FC<ReactConceptProps> = ({ children }) => {
  return (
    <div style={{ margin: '20px', padding: '10px', border: '1px solid #ddd' }}>
      {children}
    </div>
  );
};

export default ReactConcept;
