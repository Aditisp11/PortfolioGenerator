import React from 'react';
import { useParams } from 'react-router-dom';
import { usePortfolio } from '../../context/PortfolioContext';

const TemplateOne = () => {
  const { id } = useParams();
  const { portfolios } = usePortfolio();
  const data = portfolios.find(p => p.id === id);

  if (!data) return <p>Portfolio not found</p>;

  return (
    <div className="resume-template1">
      <div className="resume-header">
        <img src={data.image} alt="Profile" className="resume-img" />
        <div>
          <h1>{data.name}</h1>
          <h3>{data.title}</h3>
        </div>
      </div>

      <hr />

      <div className="resume-section">
        <h2>Profile Summary</h2>
        <p>{data.bio}</p>
      </div>

      <div className="resume-section">
        <h2>Skills</h2>
        <ul className="resume-skills">
          {data.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TemplateOne;
