import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TemplateSelection.css';

const TemplateSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="template-selection">
      <h1>Select Your Template</h1>
      <div className="templates">
        <button onClick={() => navigate('/form', { state: { template: 'template1' } })}>
          Template 1
        </button>
        <button onClick={() => navigate('/form', { state: { template: 'template2' } })}>
          Template 2
        </button>
      </div>
    </div>
  );
};

export default TemplateSelection;
