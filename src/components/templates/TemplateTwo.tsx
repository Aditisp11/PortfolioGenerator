import React from 'react';
import { useParams } from 'react-router-dom';
import { usePortfolio } from '../../context/PortfolioContext';

const TemplateTwo = () => {
  const { id } = useParams();
  const { portfolios } = usePortfolio();
  const data = portfolios.find(p => p.id === id);

  if (!data) return <p>Portfolio not found</p>;

  return (
    <div className="template2">
      <div style={{
        background: 'url(https://www.transparenttextures.com/patterns/garden.png)',
        padding: '2rem',
        borderRadius: '15px'
      }}>
        <img src={data.image} alt="Profile" style={{ width: '120px', borderRadius: '50%', boxShadow: '0 0 10px #2e7d32' }} />
        <h2>{data.name}</h2>
        <h4>{data.title}</h4>
        <p style={{ fontStyle: 'italic', maxWidth: '600px', margin: '1rem auto' }}>{data.bio}</p>

        <h5 style={{ marginTop: '1.5rem', color: '#1b5e20' }}>🌿 Skills</h5>
        <div>
          {data.skills.map((skill, idx) => (
            <span key={idx} style={{
              backgroundColor: '#c8e6c9',
              padding: '8px 12px',
              borderRadius: '20px',
              margin: '4px',
              display: 'inline-block',
              color: '#2e7d32',
              fontWeight: 500,
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
            }}>
              🌸 {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
