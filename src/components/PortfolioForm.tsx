import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { usePortfolio } from '../context/PortfolioContext';
import { v4 as uuid } from 'uuid';

const PortfolioForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addOrUpdatePortfolio, selected } = usePortfolio();

  const [data, setData] = useState({
    id: selected?.id || uuid(),
    template: selected?.template || location.state?.template || 'template1',
    name: selected?.name || '',
    title: selected?.title || '',
    bio: selected?.bio || '',
    image: selected?.image || '',
    skills: selected?.skills || [],
  });

  const [skill, setSkill] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addOrUpdatePortfolio(data);
    navigate('/portfolios');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={data.name} onChange={e => setData({ ...data, name: e.target.value })} placeholder="Name" required />
      <input value={data.title} onChange={e => setData({ ...data, title: e.target.value })} placeholder="Title" required />
      <textarea value={data.bio} onChange={e => setData({ ...data, bio: e.target.value })} placeholder="Bio" required />
      <input value={data.image} onChange={e => setData({ ...data, image: e.target.value })} placeholder="Image URL" required />
      <div>
        <input value={skill} onChange={(e) => setSkill(e.target.value)} placeholder="Skill" />
        <button type="button" onClick={() => {
          if (skill) {
            setData({ ...data, skills: [...data.skills, skill] });
            setSkill('');
          }
        }}>Add Skill</button>
      </div>
      <ul>{data.skills.map((s, i) => <li key={i}>{s}</li>)}</ul>
      <button type="submit">Save Portfolio</button>
    </form>
  );
};

export default PortfolioForm;
