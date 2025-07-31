import React from 'react';
import { useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';

const PortfolioDisplay = () => {
  const { portfolios, setSelected } = usePortfolio();
  const navigate = useNavigate();

  return (
    <div className="portfolio-display">
      <h2>Generated Portfolios</h2>
      <div className="cards">
        {portfolios.map(p => (
          <div className="card" key={p.id}>
            <h3>{p.name}</h3>
            <button onClick={() => navigate(`/${p.template}/${p.id}`)}>View</button>
            <button onClick={() => {
              setSelected(p);
              navigate('/form');
            }}>Edit</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioDisplay;
