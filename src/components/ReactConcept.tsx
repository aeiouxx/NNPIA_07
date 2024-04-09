import React from 'react';

type ReactConceptProps = {
    title : string,
    description : string,
    logo: string
}


const ReactConcept: React.FC<ReactConceptProps> = ({ title, description, logo }) => {
    return (
        <div style={{ margin: '20px', padding: '10px', border: '1px solid #ddd', display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt={title} style={{ width: '50px', height: '50px', marginRight: '20px' }} />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};
  
  export default ReactConcept;
